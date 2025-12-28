import Header from "@/components/layout/header/Header";
import Faq2 from "@/components/sections/faq/Faq2";
import FeaturesMod from "@/components/sections/features/FeaturesMod";
import HeroInnerMod from "@/components/sections/hero/HeroInnerMod";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import FooterMod from "@/components/layout/footer/FooterMod";
import CallSchedule from "@/components/sections/funfacts/CallSchedule";
import Team1 from "@/components/sections/teams/Team1";
import Funfact2 from "@/components/sections/funfacts/Funfact2";
import About3 from "@/components/sections/about/About3";

export default function About() {
    return (
        <div>
            <BackToTop/>
            <Header headerType={5} />
            <Header headerType={5} isStickyHeader={true} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        {/*<HeaderSpace/>*/}
                        <HeroInnerMod title={"About Us"} text={"Our business process services - driven by data, technology, and people - help" +
                            " clients save time, reduce costs, and improve operational efficiency worldwide."}/>
                        <About3 type={1}/>
                        <FeaturesMod type={2}/>
                        {/*<Brands1 type={2} />*/}
                        {/*<Testimonials2 type={2} />*/}
                        <Funfact2/>
                        <Faq2 type={2}/>
                        <Team1 type={3}/>
                        <CallSchedule/>
                        {/*<Cta />*/}
                    </main>
                    <FooterMod/>
                </div>
            </div>

            <ClientWrapper/>
        </div>
    );
}
