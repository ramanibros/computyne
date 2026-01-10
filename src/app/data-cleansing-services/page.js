import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import CallSchedule from "@/components/sections/funfacts/CallSchedule";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Aboutus from "@/components/sections/subservice/Aboutus";
import Subservices from "@/components/sections/subservice/Subservices";
import Banner from "@/components/sections/subservice/Banner";
import Counter from "@/components/sections/subservice/Counter";
import Whychooseus from "@/components/sections/subservice/Whychooseus";
import Faq from "@/components/sections/subservice/Faq";
import Industries from "@/components/sections/subservice/Industries";
import Casestudy from "@/components/sections/subservice/Casestudy";
import Testimonials from "@/components/sections/subservice/Testimonials";
import { dataCleansingServicesSchema } from "@/libs/schema/services/dataCleansingServicesSchema";
import JsonLd from "@/components/seo/JsonLd";

export default function dataCleansingServices() {
    return (
        <>
            <JsonLd
                id="web-scraping-schema"
                schema={dataCleansingServicesSchema}
            />
            <div>
                <BackToTop />
                <Header headerType={5} />
                <Header headerType={5} isStickyHeader={true} />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <main>
                            <div className="top-space-15"></div>
                            <Banner />
                            <Counter />
                            <Aboutus type={1} />
                            <Subservices />
                            <Casestudy />
                            <Whychooseus />
                            <Faq type={1} />
                            <Testimonials />
                            <Industries />
                            <CallSchedule />
                        </main>
                        <Footer />
                    </div>
                </div>

                <ClientWrapper />
            </div>
        </>
    );
}
