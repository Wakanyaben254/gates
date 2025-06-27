"use client";
 import GatesDeadline from "./components/GatesDeadline";
import GatesNavbar from "./components/GatesNavbar";
import GatesHero from "./components/GatesHero";
import GatesAbout from "./components/GatesAbout";
import GatesImpact from "./components/GatesImpact"; 
import GatesAnimate from "./components/GatesAnimate";
import GatesFooter from "./components/GatesFooter"; 
export default function Home() {
  return (
    <>
      <GatesNavbar />
      <div>
        <main className="flex flex-col gap-0 min-h-screen font-[family-name:var(--font-geist-sans)]">
          <GatesHero />
          <GatesAbout />
          <GatesImpact /> 
          <GatesAnimate />
          <GatesDeadline />
          
           
        </main>
        <GatesFooter />
      </div>
      
    </>
  );
}
