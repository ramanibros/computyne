import TeamMarqueeSlider from "./TeamMarqueeSlider";

const Team = () => {
	return (
        // h7-team 
		<section className="h7-team-mod section-gap-1 section-gap-x">
			<div className="container-fluid">
				{/* <div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 style-7 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> Meet Our Team
							</span>
							<h2 className="sec-title text-anim">
								The People Empowering Business Level.
							</h2>
						</div>
					</div>
				</div> */}
				<div className="row">
					<div className="col-12">
						<div className="h7-team-mod-wrapper">
                            <TeamMarqueeSlider/>
							{/* <TeamMarqueeSlider /> */}
							{/* <TeamMarqueeSlider isRtl={true} /> */}
						</div>
					</div>
				</div>
			</div>
			{/* <div className="bg-shape-3">
				<img src="/images/shape/h7-testimonial-shape-blur-mod.svg" alt="" />
			</div> */}
		</section>
	);
};

export default Team;
