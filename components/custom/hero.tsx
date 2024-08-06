import { Spotlight } from "../ui/spotlight"

const Hero = () => {
  return (
    <div className="pt-36 pb-20">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue"/>
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.04] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>
      <div className="flex justify-center">
        <div className="max-w-[89vw] relative md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase text-xs tracking-widest text-center text-blue-100 maw-w-80">Dynamic Web Magic with Next.js</h2>
        </div>
      </div>
    </div>
  )
}

export default Hero