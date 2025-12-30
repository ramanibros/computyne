import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import FunfactSingleMod from "@/components/shared/funfact/FunfactSingleMod";
import FunfactSingleMod2 from "@/components/shared/funfact/FunfactSingleMod2";
import FunfactSingleMod3 from "@/components/shared/funfact/FunfactSingleMod3";
const ServiceCounter = () => {
	return (
		// <div className="tj-countup-section-mod">
		// 	<div className="container">
		// 		<div className="row">
		// 			<div className="col-12">
		// 				<div className="countup-wrap">
		// 					<div className="countup-item-mod">
		// 						<FunfactSingleMod3 currentValue={93} symbol={"%"} />

		// 						<span className="count-text">Projects Completed.</span>
		// 						<span
		// 							className="count-separator"
		// 							style={{
		// 								backgroundImage: "url('/images/shape/separator.svg')",
		// 							}}
		// 						></span>
		// 					</div>
		// 					<div className="countup-item-mod">
		// 						<FunfactSingleMod3 currentValue={20} symbol={"M"} />
		// 						<span className="count-text">Reach Worldwide</span>
		// 						<span
		// 							className="count-separator"
		// 							style={{
		// 								backgroundImage: "url('/images/shape/separator.svg')",
		// 							}}
		// 						></span>
		// 					</div>
		// 					<div className="countup-item-mod">
		// 						<FunfactSingleMod3 currentValue={8.5} symbol={"X"} />
		// 						<span className="count-text">Faster Growth</span>
		// 						<span
		// 							className="count-separator"
		// 							style={{
		// 								backgroundImage: "url('/images/shape/separator.svg')",
		// 							}}
		// 						></span>
		// 					</div>
        //                     <div className="countup-item-mod">
		// 						<FunfactSingleMod3 currentValue={8.5} symbol={"X"} />
		// 						<span className="count-text">Faster Growth</span>
		// 						<span
		// 							className="count-separator"
		// 							style={{
		// 								backgroundImage: "url('/images/shape/separator.svg')",
		// 							}}
		// 						></span>
		// 					</div>
        //                     <div className="countup-item-mod">
		// 						<FunfactSingleMod3 currentValue={8.5} symbol={"X"} />
		// 						<span className="count-text">Faster Growth</span>
		// 						<span
		// 							className="count-separator"
		// 							style={{
		// 								backgroundImage: "url('/images/shape/separator.svg')",
		// 							}}
		// 						></span>
		// 					</div>
		// 					<div className="countup-item-mod">
		// 						<FunfactSingleMod3   currentValue={100} symbol={"+"} />
		// 						<span className="count-text">Awards Archived</span>
		// 					</div>
                           
                            
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
        <div
			className={`tj-client-section-4 mb-0    section-gap-x wow fadeInUp`}
			data-wow-delay=".4s"
		>
			<div className="container-fluid client-container">
				<div className="row">
					<div className="col-12">
					<div className="countup-wrap">
							<div className="countup-item-mod">
								<FunfactSingleMod3 currentValue={93} symbol={"%"} />

								<span className="count-text-mod-2">Projects Completed.</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item-mod">
								<FunfactSingleMod3 currentValue={20} symbol={"M"} />
								<span className="count-text-mod-2">Reach Worldwide</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item-mod">
								<FunfactSingleMod3 currentValue={8.5} symbol={"X"} />
								<span className="count-text-mod-2">Faster Growth</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
                            <div className="countup-item-mod">
								<FunfactSingleMod3 currentValue={8.5} symbol={"X"} />
								<span className="count-text-mod-2">Faster Growth</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
                            <div className="countup-item-mod">
								<FunfactSingleMod3 currentValue={8.5} symbol={"X"} />
								<span className="count-text-mod-2">Faster Growth</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item-mod">
								<FunfactSingleMod3   currentValue={100} symbol={"+"} />
								<span className="count-text-mod-2">Awards Archived</span>
							</div>
                           
                            
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceCounter;
