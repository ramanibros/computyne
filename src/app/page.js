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


/* ================================
   SEO META DATA (AUTO <head>)
================================ */
export const metadata = {
	metadataBase: new URL("https://www.computyne.com"),

	title: "Computyne: Global Outsourcing &amp; Data Services Company	",
	description:
		"Computyne is your trusted outsourcing company for end-to-end data services and solutions. Partner with us to boost efficiency, accuracy &amp; business performance.",
	keywords: [
		"data entry outsourcing",
		"data enrichment",
		"back office solutions",
		"outsourcing company",
		"business process management",
	],

	alternates: {
		canonical: "https://computyne.com/",
	},

	openGraph: {
		title: "Computyne: Global Outsourcing &amp; Data Services Company",
		description:
			"Computyne provides professional outsourcing services, data management, and business process solutions to help companies operate efficiently.",
		url: "https://computyne.com/",
		siteName: "Computyne",
		type: "website",
		images: [
			{
				url: "https://computyne.com/logo.png",
				width: 800,
				height: 600,
				alt: "Computyne Logo",
			},
		],
	},

	twitter: {
		card: "Computyne: Global Outsourcing &amp; Data Services Company",
		title: "Computyne provides professional outsourcing services, data management, and business process solutions to help companies operate efficiently.",
		description:
			"End-to-end data outsourcing, data processing, and web research services for global enterprises.",
		images: [
			{
				url: "https://computyne.com/logo.png",
				width: 800,
				height: 600,
				alt: "Computyne Logo",
			},
		],
	},

};


/* ================================
   PAGE COMPONENT
================================ */

export default function Home(){
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
