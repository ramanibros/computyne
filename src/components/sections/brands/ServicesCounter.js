import BrandSlider2 from "@/components/shared/brands/BrandSlider2";
import FunfactSingleMod from "@/components/shared/funfact/FunfactSingleMod";
import FunfactSingleMod2 from "@/components/shared/funfact/FunfactSingleMod2";

const ServicesCounter = ({ type, className }) => {
	return (
		<div
			className={`tj-client-section-4  ${className ? className : ""} section-gap-x wow fadeInUp`}
			data-wow-delay=".4s"
		>
			<div className="container-fluid client-container">
				<div className="row">
					<div className="col-12">
						{/* <BrandSlider2 type={type} /> */}
                        <div className="client-item-mod">
                            <div className="client-logo-mod">
                                    <FunfactSingleMod2 currentValue={1200} symbol={"+"} />
                                    <span className="count-text-mod">
                                        Projects Completed
                                    </span>
                            </div>
                            <div className="client-logo-mod">
								 <FunfactSingleMod2 currentValue={1200} symbol={"+"} />
                                    <span className="count-text-mod">
                                        Projects Completed
                                    </span>
							</div>
                            <div className="client-logo-mod">
								 <FunfactSingleMod2 currentValue={1200} symbol={"+"} />
                                    <span className="count-text-mod">
                                        Projects Completed
                                    </span>
							</div>
                            <div className="client-logo-mod">
								 <FunfactSingleMod2 currentValue={1200} symbol={"+"} />
                                    <span className="count-text-mod">
                                        Projects Completed
                                    </span>
							</div>
                            <div className="client-logo-mod">
								 <FunfactSingleMod2 currentValue={1200} symbol={"+"} />
                                    <span className="count-text-mod">
                                        Projects Completed
                                    </span>
							</div>
                            <div className="client-logo-mod">
								 <FunfactSingleMod2 currentValue={1200} symbol={"+"} />
                                    <span className="count-text-mod">
                                        Projects Completed
                                    </span>
							</div>
						</div>
                        
                        
					</div>
				</div>
			</div>
		</div>
	);
};
export default ServicesCounter;
