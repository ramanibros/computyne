import FooterMod from "@/components/layout/footer/FooterMod";
import Header from "@/components/layout/header/Header";
import BlogsGridPrimary from "@/components/sections/blogs/BlogsGridPrimary";
import CallSchedule from "@/components/sections/funfacts/CallSchedule";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import HeroInnerMod from "@/components/sections/hero/HeroInnerMod";

export default function BlogGrid() {
	return (
		<div>
			<BackToTop />
			<Header headerType={5} />
			<Header headerType={5} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-15"></div>
						<HeroInnerMod
							title={"Case Study"}
							text={"Our business process services - driven by data, technology, and people - help" +
								" clients save time, reduce costs, and improve operational efficiency worldwide."}
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
