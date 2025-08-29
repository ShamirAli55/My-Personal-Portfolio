import { useEffect, useState } from "react";
import { BookOpen, GitFork, GitPullRequest, Folder } from "lucide-react";

const GITHUB_USERNAME = "ShamirAli55";
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const fetchGitHubData = async () => {
  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        repositories(first: 100, ownerAffiliations: OWNER, isFork: false) {
          totalCount
          nodes {
            forkCount
          }
        }
        publicRepos: repositories(privacy: PUBLIC, first: 1) {
          totalCount
        }
        pullRequests(first: 1) {
          totalCount
        }
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  const user = json.data.user;

  const contributions =
    user.contributionsCollection.contributionCalendar.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
      }))
    );

  const forks = user.repositories.nodes.reduce(
    (acc, repo) => acc + repo.forkCount,
    0
  );

  return {
    contributions,
    totalContributions:
      user.contributionsCollection.contributionCalendar.totalContributions,
    forks,
    totalRepos: user.repositories.totalCount,
    publicRepos: user.publicRepos.totalCount,
    pullRequests: user.pullRequests.totalCount,
  };
};

export default function GitHubActivityApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchGitHubData().then(setData);
  }, []);

  return (
    <div className="min-h-screen w-full bg-opposite/3 text-primary-foreground rounded-lg p-6 py-10 flex flex-col items-center">
      <div className="mb-10 text-center">
        <p className="uppercase tracking-widest text-sm text-primary">My</p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          Github <span className="gradient-text">Activity</span>
        </h2>
      </div>

      {!data ? (
        <p>Loading activity...</p>
      ) : (
        <>
          <div className="w-full overflow-x-auto">
            <div className="inline-block relative">
              <svg
                width={(data.contributions.length / 7) * 16 + 30}
                height={20}
                className="mb-1 ml-[30px]"
              >
                {data.contributions.map((day, i) => {
                  const date = new Date(day.date);
                  const weekIndex = Math.floor(i / 7);

                  if (date.getDate() === 1) {
                    const month = date.toLocaleString("default", {
                      month: "short",
                    });
                    return (
                      <text
                        key={day.date}
                        x={weekIndex * 16}
                        y={15}
                        className="fill-gray-400 text-xs"
                      >
                        {month}
                      </text>
                    );
                  }
                  return null;
                })}
              </svg>

              <svg
                width={30}
                height={7 * 16}
                className="absolute left-0 top-[20px]"
              >
                {["Mon", "Wed", "Fri"].map((d, idx) => (
                  <text
                    key={d}
                    x={0}
                    y={(idx * 2 + 1) * 16}
                    className="fill-gray-400 text-xs"
                  >
                    {d}
                  </text>
                ))}
              </svg>

              <svg
                width={(data.contributions.length / 7) * 16}
                height={7 * 16}
                className="ml-[30px]"
              >
                {data.contributions.map((day, i) => {
                  const weekIndex = Math.floor(i / 7);
                  const dayIndex = i % 7;
                  const color =
                    day.count === 0
                      ? "#1a1a1a"
                      : day.count < 3
                      ? "#014421"
                      : day.count < 6
                      ? "#017a35"
                      : day.count < 10
                      ? "#01a94d"
                      : "#00ff66";

                  return (
                    <rect
                      key={day.date}
                      x={weekIndex * 16}
                      y={dayIndex * 16}
                      width={14}
                      height={14}
                      rx={3}
                      ry={3}
                      fill={color}
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          <p className="mt-6 text-opposite">
            Total {data.totalContributions} contributions in this year
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 w-full max-w-5xl">
            <div className="bg-primary-foreground rounded-2xl p-5 flex flex-col items-center shadow-lg">
              <Folder className="text-blue-400 mb-2" size={28} />
              <p className="text-lg font-bold text-opposite">
                {data.totalRepos}
              </p>
              <p className="text-sm md:text-md font-bold text-opposite">
                Total Repos
              </p>
            </div>

            <div className="bg-primary-foreground rounded-2xl p-5 flex flex-col items-center shadow-lg">
              <BookOpen className="text-green-400 mb-2" size={28} />
              <p className="text-lg font-bold text-opposite">
                {data.publicRepos}
              </p>
              <p className="text-sm md:text-md font-bold text-opposite">
                Public Repos
              </p>
            </div>

            <div className="bg-primary-foreground rounded-2xl p-5 flex flex-col items-center shadow-lg text-opposite">
              <GitPullRequest className="text-purple-400 mb-2" size={28} />
              <p className="text-lg font-bold">{data.pullRequests}</p>
              <p className="text-sm md:text-md font-bold">Pull Requests</p>
            </div>

            <div className="bg-primary-foreground text-opposite rounded-2xl p-5 flex flex-col items-center shadow-lg">
              <GitFork className="text-yellow-400 mb-2" size={28} />
              <p className="text-lg font-bold">{data.forks}</p>
              <p className="text-sm md:text-md font-bold">Total Forks</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
