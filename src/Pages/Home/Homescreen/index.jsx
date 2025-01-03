import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Resume from "../Resume";

export default function Home () {
    return (
        <>
            <HeroSection />
            <AboutMe />
            <MySkills />
            <Resume />
            <MyPortfolio />
        </>
    )
}