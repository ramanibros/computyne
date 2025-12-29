import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const AboutMod = ({type}) => {
    return (
        <section className="tj-about-section-2 section-gap section-gap-x mt-12">
            <div className="container">
                <div className="row">
                   
                    <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                        <div className="about-content-area">
                            <div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Get to Know Us
								</span>
                                <h2 className="sec-title title-anim">
                                    {type === 2 ? (
                                        <>
                                            <span>Computyne</span> : Stronger Operations, Smarter Growth
                                        </>
                                    ) : (
                                        "Driving Innovation and Excellence for Sustainable Corporate Success Worldwide."
                                    )}
                                </h2>
                            </div>
                        </div>
                        <div className="about-bottom-area">
                            <p>
                                Computyne partners with medium to large enterprises and MNCs across the USA, Canada, Australia, UK, and Europe,
                                delivering smarter outsourcing solutions that power growth. We take care of the routine, complex, and high-volume
                                back-office and data processing tasks, freeing your teams to focus on innovation and business impact.
                            </p>
                            <p>
                                Our expertise spans data support & capture, data entry, data conversion, document processing, web research & data
                                collection, and data cleansing & validation-delivered with speed, accuracy, and scalability.
                            </p>
                            <p>
                                With Computyne as your backbone, you gain a reliable partner that drives efficiency, reduces costs, and helps your
                                business stay ahead in a competitive market.
                            </p>
                        </div>
                        <div className="about-btn-area wow fadeInUp" data-wow-delay=".5s">
                            <ButtonPrimary text={"Connect With Us Today"} url={"/contact"}/>
                        </div>
                    </div>

                     <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                        <div
                            className="about-img-area style-3 wow fadeInLeft"
                            data-wow-delay=".3s"
                        >
                            <div className="about-img overflow-hidden">
                                <Image
                                    data-speed=".8"
                                    src="/images/about/aboutMod.webp"
                                    alt=""
                                    width={591}
                                    height={639}
                                />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-shape-1">
                <img src="/images/shape/pattern-2.svg" alt=""/>
            </div>
            <div className="bg-shape-2">
                <img src="/images/shape/pattern-3.svg" alt=""/>
            </div>
        </section>
    );
};

export default AboutMod;
