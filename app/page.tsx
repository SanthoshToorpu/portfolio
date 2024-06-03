import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { TracingBeam } from "@/components/ui/tracing-beam";
export default function Home() {
  return (
       <AuroraBackground>
          <TracingBeam>
          <Hero />
          <Grid />
          </TracingBeam>
        </AuroraBackground>
  );
}
