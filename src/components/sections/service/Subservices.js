"use client";
import getSubservice from "@/libs/service/data-collection-services/getSubservices";
import SubserviceCard from "@/components/sections/service/SubserviceCard";

const Subservices = () => {
	const subservices = getSubservice();
	return (
		<section className="tj-blog-section-2 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Services
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
										Data Collection Services We <span>Provide.</span>
									</h2>
								</div>
								<div className="wow fadeInUp" data-wow-delay=".5s">
									<p className="desc tagline">
										We offer scalable, secure outsourced data collection services that support AI model training, marketing intelligence, and real-time decision-making.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row row-gap-4 h6-blog-wrapper">
					{subservices?.length
						? subservices?.map((subservice, idx) => (
							<div key={idx} className="col-xl-4 col-md-6">
								<SubserviceCard subservice={subservice} idx={idx} />
							</div>
						))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Subservices;
