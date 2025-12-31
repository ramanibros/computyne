"use client";
import getSubservice from "@/libs/getSubservice";
import SubserviceCard from "@/components/shared/cards/SubserviceCard";
import SubserviceDataCard from "@/components/shared/cards/SubserviceDataCard";

const SubserviceData = () => {
	const subservices = getSubservice().slice(0, 6);
	return (
		<section className="tj-blog-section-2 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Industries
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
										Specialized Data Collection <span>Offerings.</span>
									</h2>
								</div>
								<div className="wow fadeInUp" data-wow-delay=".5s">
									<p className="desc tagline">
										Many businesses struggle with inconsistent, scattered, or outdated information, slowing decisions and reducing efficiency.
									</p>
								</div>
								{/* <div
									className="slider-navigation d-none d-md-inline-flex wow fadeInUp"
									data-wow-delay=".7s"
								>
									<div className="slider-prev" role="button">
										<span className="anim-icon">
											<i className="tji-arrow-left"></i>
											<i className="tji-arrow-left"></i>
										</span>
									</div>
									<div className="slider-next" role="button">
										<span className="anim-icon">
											<i className="tji-arrow-right"></i>
											<i className="tji-arrow-right"></i>
										</span>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>

				<div className="row row-gap-4 h6-blog-wrapper">
					{subservices?.length
						? subservices?.map((blog, idx) => (
							<div key={idx} className="col-xl-4 col-md-6">
								<SubserviceCard blog={blog} idx={idx} />
							</div>
						))
						: ""}
				</div>

				{/* <div className="row">
					<div className="col-12">
						<div className="blog-wrapper wow fadeIn" data-wow-delay=".5s">
							
								{blogs?.length
									? blogs?.map((blog, idx) => (
												<IndustriesCard blog={blog} idx={idx} />
									  ))
									: ""}
								<div className="swiper-pagination-area"></div>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default SubserviceData;
