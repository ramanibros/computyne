import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const About5 = () => {
	return (
		<section className="tj-about-section h6-about section-gap section-gap-x">	
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6">
						<div
							className="about-content-area  h6-about-content  style-1 wow fadeInLeft"
							data-wow-delay=".2s"
						>
							<div className="sec-heading style-2 style-6">
								<span className="sub-title  wow fadeInUp" data-wow-delay=".3s">
									{/* <i className="tji-box"></i> */}
									OUR COMPANY
								</span>
								<h2 className="sec-title title-anim">
									A Leading Data Services & BPO Partner Delivering Accuracy, Speed & Growth
								</h2>
								<p className="desc  wow fadeInUp" data-wow-delay=".8s">
									Behind every solution we deliver, there are real people, real expertise, and a commitment to your success.
								</p>
							</div>
							<div className="h6-about-funfact-wrapper">
								<div className="h6-about-funfact">
									<div className="countup-item">
										<FunfactSingle currentValue={120} symbol={"+"} />
										<span className="count-text">
											Projects Completed
										</span>
									</div>
									<div className="countup-item">
										<FunfactSingle currentValue={240} symbol={"+"} />

										<span className="count-text">
											Expert Professionals
										</span>
									</div>
								</div>
								<div className="h6-about-funfact">
									<div className="countup-item">
										<FunfactSingle currentValue={550} symbol={"+"} />
										<span className="count-text">
											Global Clients
										</span>
									</div>
									<div className="countup-item">
										<FunfactSingle currentValue={24} symbol={"/7"} />
										<span className="count-text">
											Support Available
										</span>
									</div>
								</div>
								<div className="h6-about-funfact-shape">
									<img
										src="/images/shape/about-counter-shape-blur-mod.svg"
										alt=""
									/>
								</div>
							</div>
							<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
								<ButtonPrimary text={"Know More Us"} url={"/contact"} />
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<div
							className="about-img-area h6-about-img wow fadeInLeft"
							data-wow-delay=".2s"
						>
							<div
								className="about-img overflow-hidden  wow fadeInRight"
								data-wow-delay=".8s"
							>
								<img
									data-speed=".8"
									src="/images/about/h6-about-banner.webp"
									alt=""
								/>
							</div>
							<div className="box-area h6-about-box  ">
								<div className="customers-box wow fadeInUp" data-wow-delay="1s">
									<div className="customers">
										<ul>
											<li className="wow fadeInLeft" data-wow-delay=".5s">
												<img src="/images/testimonial/client-1.webp" alt="" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay=".6s">
												<img src="/images/testimonial/client-2.webp" alt="" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay=".7s">
												<img src="/images/testimonial/client-3.webp" alt="" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay=".8s">
												<span>
													<i className="tji-plus"></i>
												</span>
											</li>
										</ul>
									</div>
									<h5
										className="customers-text wow fadeInUp"
										data-wow-delay=".5s"
									>
										We have 100+ happy customer.
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
			<div className="bg-shape-3">
				<img src="/images/shape/shape-blur-mod.svg" alt="" />
			</div>
		</section>
	);
};

export default About5;
