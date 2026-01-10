import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Hero from "@/components/sections/home-page/Hero";
import Services from "@/components/sections/home-page/Services";
import About from "@/components/sections/home-page/About";
import Portfolios from "@/components/sections/home-page/Portfolios";
import Process from "@/components/sections/home-page/Process";
import Industries from "@/components/sections/home-page/Industries";
import Testimonials from "@/components/sections/home-page/Testimonials";
import Blogs from "@/components/sections/home-page/Blogs";
import CallSchedule from "@/components/sections/home-page/CallSchedule";
import Footer from "@/components/layout/footer/Footer";


/* ================================
   SEO META DATA (AUTO <head>)
================================ */
export const metadata = {
	metadataBase: new URL("https://www.computyne.com"),

	title: "Computyne: Global Outsourcing &amp; Data Services Company",
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
		canonical: "https://www.computyne.com/",
	},

	openGraph: {
		title: "Computyne: Global Outsourcing &amp; Data Services Company",
		description:
			"Computyne provides professional outsourcing services, data management, and business process solutions to help companies operate efficiently.",
		url: "https://www.computyne.com/",
		siteName: "Computyne",
		type: "website",
		images: [
			{
				url: "https://www.computyne.com/logo.png",
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
						<Hero />
						<Services/>
						<About/>
						<Portfolios/>
						<Process/>
						<Industries/>
						<Testimonials/>
						<Blogs/>
						<CallSchedule/>
					</main>
					<Footer/>
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
