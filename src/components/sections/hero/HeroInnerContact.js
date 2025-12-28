import React from "react";
import Contact3 from "@/components/sections/contacts/Contact3";
import Contact3Mod from "@/components/sections/contacts/Contact3Mod";

const HeroInnerMod = ({ title, text, breadcrums = [] }) => {
	return (
		<section
			className="tj-page-header section-gap-x"
			style={{ backgroundImage: `url('/images/bg/pheader-bg.webp')` }}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="tj-page-header-content">
							<h1 className={`tj-page-title`}>{title}</h1>
                            <div className="tagline mt">
                                {text}
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
