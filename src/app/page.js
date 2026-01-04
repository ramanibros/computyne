import Header from "@/components/layout/header/Header";
import About5 from "@/components/sections/about/About5";
import Blogs1 from "@/components/sections/blogs/Blogs1";
import Industries from "@/components/sections/industries/Industries";
import Hero2 from "@/components/sections/hero/Hero2";
import Testimonials4 from "@/components/sections/testimonials/Testimonials4";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import ServicesMod2 from "@/components/sections/services-old/ServicesMod2";
import ProcessMod from "@/components/sections/process/ProcessMod";
import FooterMod from "@/components/layout/footer/FooterMod";
import CallSchedule from "@/components/sections/funfacts/CallSchedule";
import PortfoliosMod from "@/components/sections/portfolios/PortfoliosMod";

export default function Home2() {
	return (
		<div>
			<BackToTop />
			<Header headerType={5} />
			<Header headerType={5} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-15"></div>
						<Hero2 />
						<ServicesMod2/>
						<About5/>
						<PortfoliosMod/>
						<ProcessMod/>
						<Industries/>
						<Testimonials4/>
						<Blogs1/>
						<CallSchedule/>
					</main>
					<FooterMod/>
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
