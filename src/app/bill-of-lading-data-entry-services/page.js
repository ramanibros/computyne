import FooterMod from "@/components/layout/footer/FooterMod";
import Header from "@/components/layout/header/Header";
import CallSchedule from "@/components/sections/funfacts/CallSchedule";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Aboutus from "@/components/sections/service/Aboutus";
import Subservices from "@/components/sections/service/Subservices";
import Banner from "@/components/sections/service/Banner";
import Counter from "@/components/sections/service/Counter";
import Whychooseus from "@/components/sections/service/Whychooseus";
import Faq from "@/components/sections/service/Faq";
import Industries from "@/components/sections/service/Industries";
import Casestudy from "@/components/sections/service/Casestudy";
import Testimonials from "@/components/sections/service/Testimonials";

export default function billOfLadingDataEntryServices() {
    return (
        <div>
            <BackToTop/>
            <Header headerType={5}/>
            <Header headerType={5} isStickyHeader={true}/>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <Banner title={"Data Collection Services"}
                                          text={"Fuel Data-Driven Growth with Scalable, Accurate, and Outsourced Data Collection Services"}
                                          isShowButton={true}
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
                    <FooterMod/>
                </div>
            </div>

            <ClientWrapper/>
        </div>
    );
}
