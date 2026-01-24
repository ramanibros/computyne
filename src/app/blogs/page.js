import Header from "@/components/layout/header/Header";
import BlogMain from "@/components/layout/main/BlogMain";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import Footer from "@/components/layout/footer/Footer";
import SubFooter from "@/components/layout/footer/subFooter";

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
						<SubFooter />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
