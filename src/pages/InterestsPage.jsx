import AuroraBackground from "../components/Interests/effects/AuroraBackground";
import OrbEffect from "../components/Interests/effects/OrbEffect";
import RippleEffect from "../components/Interests/effects/RippleEffect";
import CursorTrailEffect from "../components/Interests/effects/CursorTrailEffect";
import CodingFocusChart from "../components/Interests/charts/CodingFocusChart";
import BarsChart from "../components/Interests/charts/BarsChart";

import GamesSection from "../components/Interests/sections/GamesSection";

export default function InterestsPage() {
  return (
    <section className="relative min-h-screen w-full bg-background overflow-hidden">
      <AuroraBackground />
      <OrbEffect />
      <RippleEffect />
      <CursorTrailEffect />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-12 py-20">
        <h1 className="text-4xl font-bold">My Interests</h1>

        <GamesSection />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          <BarsChart />
          <CodingFocusChart />
        </div>
      </div>
    </section>
  );
}
