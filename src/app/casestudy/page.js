import Footer from "@/components/layout/footer/Footer";
import FooterMod from "@/components/layout/footer/FooterMod";
import Header from "@/components/layout/header/Header";
import BlogsGridPrimary from "@/components/sections/blogs/BlogsGridPrimary";
import Cta from "@/components/sections/cta/Cta";
import CallSchedule from "@/components/sections/funfacts/CallSchedule";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function BlogGrid() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner
							title={"Case Study"}
							text={"Case Study"}
						/>
						<BlogsGridPrimary isSidebar={true} />
						<CallSchedule />
					</main>
					<FooterMod />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
