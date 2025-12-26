// import Footer from "@/components/layout/footer/Footer";
// import Header from "@/components/layout/header/Header";
// import About1 from "@/components/sections/about/About1";
// import Blogs1 from "@/components/sections/blogs/Blogs1";
// import Brands1 from "@/components/sections/brands/Brands1";
// import Contact2 from "@/components/sections/contacts/Contact2";
// import Cta from "@/components/sections/cta/Cta";
// import Faq2 from "@/components/sections/faq/Faq2";
// import Features from "@/components/sections/features/Features";
// import Funfact1 from "@/components/sections/funfacts/Funfact1";
// import Hero from "@/components/sections/hero/Hero";
// import Portfolios1 from "@/components/sections/portfolios/Portfolios1";
// import Services1 from "@/components/sections/services/Services1";
// import Testimonials1 from "@/components/sections/testimonials/Testimonials1";
// import BackToTop from "@/components/shared/others/BackToTop";
// import HeaderSpace from "@/components/shared/others/HeaderSpace";
// import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

// export default function Home() {
// 	return (
// 		<div>
// 			<BackToTop />
// 			<Header />
// 			<Header isStickyHeader={true} />
// 			<div id="smooth-wrapper">
// 				<div id="smooth-content">
// 					<main>
// 						<HeaderSpace />
// 						<Hero />
// 						<Features />
// 						<Brands1 />
// 						<About1 />
// 						<Services1 />
// 						<Portfolios1 />
// 						<Funfact1 />
// 						<Testimonials1 />
// 						<Faq2 type={1} />
// 						<Contact2 />
// 						<Blogs1 />
// 						<Cta />
// 					</main>
// 					<Footer />
// 				</div>
// 			</div>

// 			<ClientWrapper />
// 		</div>
// 	);
// }


import Footer from "@/components/layout/footer/Footer";
import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import About1 from "@/components/sections/about/About1";
import About2 from "@/components/sections/about/About2";
import About5 from "@/components/sections/about/About5";
import Blogs1 from "@/components/sections/blogs/Blogs1";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Blogs3 from "@/components/sections/blogs/Blogs3";
import Brands2 from "@/components/sections/brands/Brands2";
import Cta from "@/components/sections/cta/Cta";
import Hero2 from "@/components/sections/hero/Hero2";
import Portfolios2 from "@/components/sections/portfolios/Portfolios2";
import Portfolios5 from "@/components/sections/portfolios/Portfolios5";
import PricingPlan from "@/components/sections/pricing-plan/PricingPlan";
import Process from "@/components/sections/process/Process";
import Process4 from "@/components/sections/process/Process4";
import Services1 from "@/components/sections/services/Services1";
import Services2 from "@/components/sections/services/Services2";
import Team1 from "@/components/sections/teams/Team1";
import Team4 from "@/components/sections/teams/Team4";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import Testimonials4 from "@/components/sections/testimonials/Testimonials4";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Team from "./team/page";
import Team3 from "@/components/sections/teams/Team3";
import Team3Mod from "@/components/sections/teams/Team3Mod";
import ServicesMod from "@/components/sections/services/ServicesMod";
import Blogs6 from "@/components/sections/blogs/Blogs6";
import ServicesMod2 from "@/components/sections/services/ServicesMod2";
import ProcessMod from "@/components/sections/process/ProcessMod";
import Funfact1 from "@/components/sections/funfacts/Funfact1";
import FooterMod from "@/components/layout/footer/FooterMod";
import CallSchedule from "@/components/sections/funfacts/CallSchedule";
import Hero5 from "@/components/sections/hero/Hero5";

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
						{/*<Team3Mod/>*/}
						<ServicesMod2/>
						{/* <Services1/> */}
						<About5/>
						<Portfolios5/>	
						{/* <Process4/>	 */}
						<ProcessMod/>
						{/*<Team4/>*/}
						<Blogs2/>
						<Testimonials4/>
						<Blogs1/>
						<CallSchedule/>
						{/* <Cta/> */}
					</main>
					<FooterMod/>
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
