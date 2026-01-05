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
                                    Outsource <span>Resume & CV Formatting</span> to Boost Hiring Speed and Productivity
                                </h2>
                            </div>
                        </div>
                        <div className="about-bottom-area">
                            <p className="desc wow fadeInUp mb-0" data-wow-delay=".8s">
                                Computyne delivers professional resume and CV formatting services for recruitment agencies, HR departments, and job portals across the UK, USA, Australia, Singapore, and the UAE. We standardize and format candidate resumes into clean, consistent, and recruiter-ready documents, helping your teams evaluate talent faster and hire with confidence. Outsource resume formatting to stay focused on identifying and closing top talent, while we handle the operational load.
                            </p>
                            <p className="desc wow fadeInUp mb-0" data-wow-delay=".8s">
                                Our expert team transforms high-volume resume batches into polished, professional, ATS-friendly formats that reflect your company branding and enhance the candidate experience. With streamlined workflows and scalable resources, we help organizations reduce manual efforts, improve turnaround time, and achieve repeatable hiring success.
                            </p>
                            <p className="desc wow fadeInUp mb-0" data-wow-delay=".8s">
                                Whether you manage thousands of resumes monthly or support corporate-level recruiting, our flexible packages accommodate bulk cv formatting, custom layout development, and resume template creation—designed specifically for recruitment firms and HR teams that demand consistency and speed.
                            </p>
                            <p className="desc wow fadeInUp mb-0" data-wow-delay=".8s">
                                As a trusted CV formatting company, we deliver rapid turnaround, strict quality control, and reliable support, ensuring long-term success for recruitment partners worldwide. Our commitment to excellence, accuracy, and service makes us the preferred outsourcing partner for staffing firms and HR teams looking to streamline operations.
                            </p>
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
                                    src="/images/subservice/resume-formatting-services/outsource-resume-and-cv-formatting-to-boost-hiring-speed-and-productivity.webp"
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
