import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
export default function Home() {
  return (
    <main >
       <AuroraBackground>
          <Hero />
          <Grid />
        </AuroraBackground>
    </main>
  );
}
