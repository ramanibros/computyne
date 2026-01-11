import Header from "@/components/layout/header/Header";
import BlogMain from "@/components/layout/main/BlogMain";
import CallSchedule from "@/components/sections/funfacts/CallSchedule";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Footer from "@/components/layout/footer/Footer";
import CasestudyMain from "@/components/layout/main/CasestudyMain";

export default function Blogs() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<CasestudyMain />
						<CallSchedule />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
