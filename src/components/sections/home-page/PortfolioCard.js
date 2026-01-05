import ButtonPrimary from "./ButtonPrimary";
import FunfactSingle2 from "./FunfactSingle2";

const PortfolioCard = ({ portfolio }) => {
	const {
		title = "Event Management Platform",
		img5 = "/images/project/h5-project-1.webp",
		shortDesc,
		id,
		dataFilter,
		category = "Connect",
	} = portfolio ? portfolio : {};
	return (
		<div className="h5-project-item-wrapper tj-scroll-slider-item">
			<div className="project-item h4-project-item  h5-project-item">
				<div className="project-img">
					<img src={img5} alt="Image" />
				</div>

				<div className="h9-about-content-port-card-mod">
					<h3><span>Our Stories</span> on Begins Passion Driven by Purpose,
						and Fueled by a Relentless Pursuit.</h3>
					<p className="desc wow fadeInUp" data-wow-delay=".4s">
						Recognize that exceptional customer experiences are at the
						heart of every successful business. Our Customer Experience
						Solutions are crafted to help you transform every interaction
						your customers have with your brand busin into a meaningful
						and positive experience.
					</p>
					<div
						className="about-btn-area-2 wow fadeInUp"
						data-wow-delay=".7s"
					>
						<ButtonPrimary text={"Explore Now"} url={"/about"} />
					</div>
					<div
						className="h9-about-funfact-port-card-mod wow fadeInUp"
						data-wow-delay=".6s"
					>
						<div className="countup-item">
							<FunfactSingle2 currentValue={20} symbol={"M"} />
							<span className="count-text">
								Reduced Manual Errors
							</span>
						</div>
						<div className="countup-item">
							<FunfactSingle2 currentValue={8.5} symbol={"X"} />
							<span className="count-text">
								Reduced Order Processing Time
							</span>
						</div>
						<div className="countup-item">
							<FunfactSingle2 currentValue={8.5} symbol={"X"} />
							<span className="count-text">
								Boost in Shipping Efficiency
							</span>
						</div>
					</div>

				</div>
			</div>
			{/* </div> */}
		</div>
	);
};

export default PortfolioCard;
