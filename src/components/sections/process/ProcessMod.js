"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard from "@/components/shared/cards/ProcessCard";

const ProcessMod = () => {
	const process = [
		{
			id: 1,
			title: "Discovery & Planning",
			desc: "The first step in our process is understanding your unique business needs,  objectives, and our cutomes challenges.",
		},
		{
			id: 2,
			title: "Execution & Delivery",
			desc: "Once the plan is in place, our team moves forward with execution, turning strategies into actiony to deliver.",
		},
		{
			id: 3,
			title: "Review & Support",
			desc: "After project completion, we conduct a thorough review to ensure everything aligns with your goals and requirements.",
		},
        {
			id: 4,
			title: "Review & Support",
			desc: "After project completion, we conduct a thorough review to ensure everything aligns with your goals and requirements.",
		},
	];
	return (
		<section className="tj-working-process h6-about section-gap section-gap-x">
			<div className="container">
				{/* <div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Process
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
										Seamless Process, Great <span>Results.</span>
									</h2>
								</div>
								
							</div>
						</div>
					</div>
				</div> */}
                
                 {/* style-1  */}
                <div
                    className="about-content-area  h6-about-content wow fadeInLeft"
                    data-wow-delay=".2s">
                    <div className="sec-heading style-2 style-6">
                        <span className="sub-title  wow fadeInUp" data-wow-delay=".3s">
                            Our Process
                        </span>
                        <h2 className="sec-title title-anim">
                            Seamless Process, Great <span>Results.</span>
                        </h2>

                    </div>
                </div>
				<div className="row">
					<div className="col-12">
						<div className="working-process-area-mod">
							{process?.length
								? process?.map((processSingle, idx) => (
										<ProcessCard
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
		</section>
	);
};

export default ProcessMod;
