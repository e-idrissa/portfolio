import Grid from "@/components/custom/grid";
import Hero from "@/components/custom/hero";
import { FloatingNav } from "@/components/ui/floating-nav";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
