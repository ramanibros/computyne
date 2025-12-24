"use client";
import ServiceCard1 from "@/components/shared/cards/ServiceCard1";
import getALlServices from "@/libs/getALlServices";
import ServiceCard4 from "../cards/ServiceCard4";
import makeWowDelay from "@/libs/makeWowDelay";

const ServicesSliderMod = () => {
    // const showableSevices = getALlServices()?.slice(0, 4);
    // const services = [...showableSevices, ...showableSevices];
    const services = getALlServices()?.slice(0, 6);
    return (
        <div className="tj-service-section service-4 ">
            <div className="container">
                <div className="row row-gap-4">
                    {services?.length
                        ? services?.map((item, idx) => (
                            <div
                                key={idx}
                                className="col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay={makeWowDelay(idx, 0.1)}
                            >
                                <ServiceCard1 service={item} idx={idx} />
                            </div>
                        ))
                        : ""}
                </div>
            </div>
        </div>
    );
};

export default ServicesSliderMod;