import Footer from "@/components/layout/footer/Footer";
import FooterMod from "@/components/layout/footer/FooterMod";
import Header from "@/components/layout/header/Header";
import AboutMod from "@/components/sections/about/AboutMod";
import Blogs1 from "@/components/sections/blogs/Blogs1";
import Brands1 from "@/components/sections/brands/Brands1";
import Brands3 from "@/components/sections/brands/Brands3";
import ServicesCounter from "@/components/sections/brands/ServicesCounter";
import Contact2 from "@/components/sections/contacts/Contact2";
import Cta from "@/components/sections/cta/Cta";
import CallSchedule from "@/components/sections/funfacts/CallSchedule";
import HeroInner from "@/components/sections/hero/HeroInner";
import HeroInnerMod from "@/components/sections/hero/HeroInnerMod";
import PricingPlan from "@/components/sections/pricing-plan/PricingPlan";
import ServicesPrimary from "@/components/sections/services/ServicesPrimary";
import Testimonials4 from "@/components/sections/testimonials/Testimonials4";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import HeroInnerService from "@/components/sections/hero/HeroInnerService";
export default function Services() {
	// return (
	// 	<div>
	// 		<BackToTop />
	// 		<Header />
	// 		<Header isStickyHeader={true} />
	// 		<div id="smooth-wrapper">
	// 			<div id="smooth-content">
	// 				<main>
	// 					<HeaderSpace />
	// 					<HeroInner title={"Services"} text={"Services"} />
	// 					<ServicesPrimary />
	// 					<Contact2 />
	// 					<PricingPlan type={3} />
	// 					<Brands1 type={2} />
	// 					<Cta />
	// 				</main>
	// 				<Footer />
	// 			</div>
	// 		</div>

	// 		<ClientWrapper />
	// 	</div>
	// );


	return (
		<div>
			<BackToTop />
			 <Header headerType={5} />
            <Header headerType={5} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-15"></div>
						{/* <HeaderSpace /> */}
						{/* <HeroInner title={"Services"} text={"Services"} /> */}
						 <HeroInnerService title={"Services"} text={"Our business process services - driven by data, technology, and people - help" +
                            " clients save time, reduce costs, and improve operational efficiency worldwide."} isShowButton={true} buttonLabel={"Talk To Our Expert"}/>
						<ServicesCounter className="mb-0" />
						<AboutMod type={1}/>
						<ServicesPrimary />
						<Testimonials4/>
						<Blogs1/>
						<CallSchedule/>
					</main>
					<FooterMod />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
