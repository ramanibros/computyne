import React from "react";

const Banner = ({ title, text, bannerimage, isShowButton = false, buttonLabel, buttonLink }) => {
	return (
		<section
			className="tj-page-header-mod section-gap-x"
			style={{ backgroundImage: `url('${bannerimage}')` }}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="tj-page-header-content text-center">
							<h1 className={`tj-page-title`}>{title}</h1>
                            <div className="tagline mt-3 tj-page-header-tagline">
								{text}
                            </div>
							{/*<div className="btn-area wow fadeInUp mt-4" data-wow-delay=".8s">
								<ButtonPrimary text={buttonLabel} url={"/contact"} />
							</div>*/}
						</div>
					</div>
				</div>
			</div>
			<div
				className="page-header-overlay"
				style={{ backgroundImage: `linear-gradient(90deg, #0c1d36 20%, #0c1d3666 60%, #0c1d361a 100%)` }}
			></div>
		</section>
	);
};
export default Banner;
