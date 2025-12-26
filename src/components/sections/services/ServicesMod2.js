import getServices from "@/libs/getServices";
import ServiceModCard2 from "./ServiceModCard2";

const ServicesMod2 = () => {
	const services = getServices().slice(0, 6);
	return (
		<section className="tj-blog-section h6-blog section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Services
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h1 className="sec-title text-anim">
										Intelligent Data Solutions for High-Performance <span>Businesses.</span>
									</h1>
								</div>
								<div className="wow fadeInUp" data-wow-delay=".5s">
									<p className="desc">
										Our specialists deliver scalable data outsourcing to manage, optimize, and leverage your data for real business results.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row row-gap-4 h6-blog-wrapper">
					{services?.length
						? services?.map((blog, idx) => (
								<div key={idx} className="col-xl-4 col-md-6">
									<ServiceModCard2 blog={blog} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default ServicesMod2;
