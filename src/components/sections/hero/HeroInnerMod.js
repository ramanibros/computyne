import React from "react";

const HeroInnerMod = ({ title, text, breadcrums = [] }) => {
	return (
		<section
			className="tj-page-header section-gap-x"
			style={{ backgroundImage: `url('/images/bg/pheader-bg.webp')` }}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="tj-page-header-content text-center">
							<h1 className={`tj-page-title`}>{title}</h1>
                            <div className="tagline mt">
                                Our business process services - driven by data, technology, and people - help clients save time,<br></br> reduce costs, and improve operational efficiency worldwide.
                            </div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="page-header-overlay"
				style={{ backgroundImage: `url('/images/shape/pheader-overlay.webp')` }}
			></div>
		</section>
	);
};
export default HeroInnerMod;
