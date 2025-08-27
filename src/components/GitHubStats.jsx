const GithubStats = () => {
  const username = "ShamirAli55";

  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <h2 className="text-3xl font-bold">GitHub Stats</h2>

      <div className="w-full flex justify-center">
        <img
          src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-compact`}
          alt="GitHub Contribution Graph"
          className="h-90 w-fit rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={`https://streak-stats.demolab.com?user=${username}&theme=transparent&hide_border=true&date_format=j%20M%5B%20Y%5D`}
          alt="GitHub streak"
          className="rounded-xl shadow-lg"
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&border_radius=10`}
          alt="Top Languages"
          className="rounded-xl shadow-lg"
        />
      </div>

      {/* 📝 Profile Summary Card */}
      <div className="flex justify-center">
        <img
          src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=github_dark`}
          alt="GitHub Summary"
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default GithubStats;
