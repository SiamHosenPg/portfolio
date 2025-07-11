import Image from "next/image";
import Navigation from "./components/navigation/Navigation";

export default function Home() {
  return (
    <>
      <div className="navigation fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>
      <div className="Area h-screen Area w-full ">
        <div className=" h-full relative overflow-hidden flex items-center justify-center">
          <div className=" absolute left-0 w-5/6 ">
            <h1 className="text-4xl font-bold  ">Welcome to My Portfolio</h1>
            <p className="">
              This is a simple portfolio page built with Next.js and Tailwind
              CSS.
            </p>
          </div>
          <div className=" h-full aspect-square absolute right-0  ">
            <img
              className="w-full h-full object-cover absolute z-30"
              src="/image/hero.png"
            />
            <img
              className="w-full h-full opacity-[0.04] object-cover absolute top-20 left-0 z-0"
              src="/image/brush.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
