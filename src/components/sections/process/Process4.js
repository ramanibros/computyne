import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard4 from "@/components/shared/cards/ProcessCard4";

const Process4 = () => {
	const process = [
		{
			id: 1,
			iconName: "tji-growth",
			title: "Connect With Our Team",
			desc: "Let’s discuss your challenges, explore opportunities, and build a customized roadmap to transform your data and business processes.",
		},
		{
			id: 2,
			iconName: "tji-worldwide",
			title: "Smarter Operations Start Here",
			desc: "We help you streamline processes, strengthen capabilities, and achieve measurable results through talent, technology, and trusted partnership.",
		},
		{
			id: 3,
			title: "Scope & SLA Agreement",
			iconName: "tji-complete",
			desc: "A structured proposal with defined SLAs, transparent pricing, and NDA compliance enables a confident and efficient project initiation.",
		},
		{
			id: 4,
			title: "Transition & Collaboration",
			iconName: "tji-complete",
			desc: "We review your workflow, resolve process gaps, and onboard the Computyne team to elevate performance and operational efficiency.",
		},
		{
			id: 5,
			title: "Improvement & Value Growth",
			iconName: "tji-complete",
			desc: "Partner with our domain experts to streamline operations, consistently measure performance, and drive continuous process improvement for lasting business value.",
		},
	];

	return (
		<section className="h10-process section-gap section-gap-x tj-sticky-panel-3-container">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-5">
						<div className="sec-heading style-3 tj-sticky-panel-3">
							<span className="sub-title">
								<i className="tji-box"></i> Our PROCESS
							</span>
							<h2 className="sec-title text-anim">
								Seamless Process and Great Results.
							</h2>
							<br></br>
							<p className="desc  wow fadeInUp" data-wow-delay=".4s">
								Your success is at the core of everything we do. We believe that truly effective solutions begin with understanding your goals, challenges, and vision. By offering personalized support tailored to your specific needs, we ensure that every interaction is meaningful, transparent, and focused on delivering real value.
							</p>
							<div className="h10-process-more">
								<ButtonPrimary text={"Explore More"} url={"/about"} />
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-7 ">
						<div className="h10-process-wrapper">
							{process?.length
								? process?.map((processSingle, idx) => (
										<ProcessCard4
											key={idx}
											processSingle={processSingle}
											idx={idx}
										/>
								  ))
								: ""}
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
				<img src="/images/shape/h7-testimonial-shape-blur-mod.svg" alt="" />
			</div>
				{/* <div className="bg-shape-3">
					<img src="/images/shape/h7-testimonial-shape-blur-mod.svg" alt="" />
				</div>
				<div className="bg-shape-3">
					<img src="/images/shape/h7-testimonial-shape-blur-mod.svg" alt="" />
				</div> */}
		</section>
	);
};

export default Process4;
