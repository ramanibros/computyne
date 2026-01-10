import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import AboutMod from "@/components/sections/about/AboutMod";
import CallSchedule from "@/components/sections/funfacts/CallSchedule";
import ServiceCounter from "@/components/sections/funfacts/ServiceCounter";
import Testimonials4 from "@/components/sections/testimonials/Testimonials4";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import HeroInnerService from "@/components/sections/hero/HeroInnerService";
import PortfoliosMod from "@/components/sections/portfolios/PortfoliosMod";
import TestimonialsMod from "@/components/sections/testimonials/TestimonialsMod";
import Faq4 from "@/components/sections/faq/Faq4";
import TestimonialsMod2 from "@/components/sections/testimonials/TestimonialsMod2";
import SubserviceData from "@/components/sections/services-old/SubserviceData";
import Services5Mod from "@/components/sections/services-old/Services5Mod";

export default function Services() {

    return (
        <div>
            <BackToTop/>
            <Header headerType={5}/>
            <Header headerType={5} isStickyHeader={true}/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <HeroInnerService title={"Services"} text={"Our business process services - driven by data, technology, and people - help" +
                            " clients save time, reduce costs, and improve operational efficiency worldwide."} isShowButton={true}
                                          buttonLabel={"Talk To Our Expert"}/>
                        <ServiceCounter/>
                        <AboutMod type={1}/>
                        <SubserviceData/>
                        <PortfoliosMod/>
                        <TestimonialsMod/>
                        <Faq4 type={1}/>
                        <TestimonialsMod2/>
						<Testimonials4/>
                        <Services5Mod/>
                        <CallSchedule/>
                    </main>
                    <Footer/>
                </div>
            </div>

            <ClientWrapper/>
        </div>
    );
}
