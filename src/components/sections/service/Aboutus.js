import Image from "next/image";

const Aboutus = ({type}) => {
    return (
        <section className="tj-about-section-2 section-gap section-gap-x mt-12">
            <div className="container">
                <div className="row">

                    <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                        <div className="about-content-area">
                            <div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Overview
								</span>
                                <h2 className="sec-title title-anim">
                                    <span>Data</span> Collection Solutions Tailored to Every Industry
                                </h2>
                            </div>
                        </div>
                        <div className="about-bottom-area">
                            <p className="desc wow fadeInUp mb-0" data-wow-delay=".8s">
                                Computyne empowers businesses with outsourced data collection services that eliminate manual tasks, reduce operational
                                overhead, and deliver verified datasets your teams can act on with confidence. Whether you need large-scale enterprise
                                dataset sourcing or automated web data scraping, we ensure every dataset is accurate, complete, secure, and ready to
                                fuel AI, analytics, eCommerce, and operational intelligence.
                            </p>
                            <p className="desc wow fadeInUp mb-0" data-wow-delay=".8s">
                                Messy, incomplete, or outdated data slowing decisions? Computyne delivers clean, scalable, real-time datasets using
                                outsourced web scraping, API-based data harvesting, and enterprise-grade data validation processes.
                            </p>
                            <p className="desc wow fadeInUp mb-0" data-wow-delay=".8s">
                                Our data collection specialists help companies accelerate AI adoption, automate reporting, optimize pricing
                                strategies, and scale market intelligence - without internal hiring or added infrastructure costs.
                            </p>
                            <p className="desc wow fadeInUp mb-0" data-wow-delay=".8s">
                                With Computyne as your backbone, you gain a reliable partner that drives efficiency, reduces costs, and helps your
                                business stay ahead in a competitive market.
                            </p>
                            <p className="desc wow fadeInUp mb-0" data-wow-delay=".8s">
                                <i>We gather and transform information from multiple global sources:</i>
                            </p>
                            <div className="desc blog-text-mod wow fadeInUp ms-5" data-wow-delay=".8s">
                                <ul className="wow fadeInUp">
                                    <li>Websites, online platforms, portals, and marketplaces</li>
                                    <li>Databases, APIs, SaaS applications, business platforms</li>
                                    <li>PDFs, scanned documents, spreadsheets, unstructured content</li>
                                    <li>Industry-specific digital records and government portals</li>
                                </ul>
                            </div>
                            <p className="desc wow fadeInUp mb-0" data-wow-delay=".8s">
                                Every dataset is cleaned, verified, deduplicated, and formatted to integrate seamlessly with BI dashboards, CRM
                                systems, automation workflows, AI pipelines, and enterprise analytics tools.
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                        <div
                            className="about-img-area style-3 wow fadeInLeft mwd-691"
                            data-wow-delay=".3s"
                        >
                            <div className="about-img overflow-hidden">
                                <Image
                                    data-speed=".8"
                                    src="/images/service/data-collection-services/data-collection-solutions-tailored-to-every-industry.webp"
                                    alt=""
                                    width={791}
                                    height={839}
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

export default Aboutus;
