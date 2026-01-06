import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Industries from "@/components/sections/industries-page/Industries";
import Testimonials from "@/components/sections/industries-page/Testimonials";
import Banner from "@/components/sections/industries-page/Banner";
import Counter from "@/components/sections/industries-page/Counter";
import Aboutus from "@/components/sections/industries-page/Aboutus";
import Subservices from "@/components/sections/industries-page/Subservices";
import Casestudy from "@/components/sections/industries-page/Casestudy";
import Whychooseus from "@/components/sections/industries-page/Whychooseus";
import Faq from "@/components/sections/industries-page/Faq";
import CallSchedule from "@/components/sections/industries-page/CallSchedule";
import Footer from "@/components/sections/industries-page/Footer";

export default function industriesPage() {
    return (
        <div>
            <BackToTop/>
            <Header headerType={5}/>
            <Header headerType={5} isStickyHeader={true}/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <Banner title={"Industries"}
                                          text={"Delivering Clean, Corporate-Grade Resume Formatting that Gets You Noticed by Decision-Makers"}
                                          isShowButton={true}
                                          bannerimage={"/images/subservice/resume-formatting-services/resume-cv-formatting-services.webp"}
                                          buttonLabel={"Connect with Our Data Expert"}/>
                        <Counter/>
                        <Aboutus type={1}/>
                        <Subservices/>
                        <Casestudy/>
                        <Whychooseus/>
                        <Faq type={1}/>
                        <Testimonials/>
                        <Industries/>
                        <CallSchedule/>
                    </main>
                    <Footer/>
                </div>
            </div>

            <ClientWrapper/>
        </div>
    );
}
