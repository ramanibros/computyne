import React from "react";
import Contact3 from "@/components/sections/contacts/Contact3";
import Contact3Mod from "@/components/sections/contacts/Contact3Mod";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import FunfactContact from "@/components/shared/funfact/FunfactContact";

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
						<div
							className="h9-about-funfact-port-card-mod wow fadeInUp"
							data-wow-delay=".6s"
						>
							<div className="countup-item">
								<FunfactContact type={3} currentValue={99} symbol={"+"} />
								<span className="count-text" style={{ color: 'white !important', marginTop: '10px' }}>
								Inc5000
							</span>
							</div>
							<div className="countup-item">
								<FunfactContact type={3} currentValue={15} symbol={"+"} />
								<span className="count-text" style={{ color: 'white !important', marginTop: '10px' }}>
								Years
							</span>
							</div>
							<div className="countup-item">
								<FunfactContact type={3} currentValue={18} symbol={"+"} />
								<span className="count-text" style={{ color: 'white !important' , marginTop: '10px'}}>
								Awards
							</span>
							</div>
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
export default HeroInnerMod;
