import Footer from "@/components/layout/footer/Footer";
import FooterMod from "@/components/layout/footer/FooterMod";
import Header from "@/components/layout/header/Header";
import BlogMain from "@/components/layout/main/BlogMain";
import Cta from "@/components/sections/cta/Cta";
import CallSchedule from "@/components/sections/funfacts/CallSchedule";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

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
						<BlogMain />
						<CallSchedule />
					</main>
					<FooterMod />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
