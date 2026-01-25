import getPortfolio from "@/libs/getPortfolio";
import ButtonPrimary from "./ButtonPrimary";
import PortfolioCard from "./PortfolioCard";
import getCaseStudy from "@/libs/getCaseStudies";
const Portfolios = () => {
	const portfolio = getPortfolio()?.slice(0, 3);
	const casestudy = getCaseStudy()?.slice(0, 5);
	return (
		<section className="h5-project">
			<div className="tj-scroll-slider  section-gap">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="sec-heading-wrap style-3">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Proud Projects
								</span>
								<div className="heading-wrap-content">
									<div className="sec-heading style-3">
										<h2 className="sec-title text-anim">
											Breaking Boundaries, Building Dreams.
										</h2>
									</div>
									<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
										<ButtonPrimary text={"Explore More"} url={"/contact-us"} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row ">
						<div className="col-12">
							<div className="project-wrapper h5-project-wrapper">
								{casestudy?.length
									? casestudy?.map((casestudySingle, idx) => (
											<PortfolioCard key={idx} casestudy={casestudySingle} />
									  ))
									: ""}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios;
