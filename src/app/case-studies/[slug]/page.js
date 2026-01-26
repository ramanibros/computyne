import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import CasestudyDetailsMain from "@/components/layout/main/CasestudyDetailsMain";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getCaseStudy from "@/libs/getCaseStudies";
import {notFound} from "next/navigation";
import SubFooter from "@/components/layout/footer/subFooter";

const items = getCaseStudy();

export default async function CaseeStudyDetails({ params }) {
	// const { id } = await params;
	// const isExistItem = items?.find(({ id: id1 }) => id1 === parseInt(id));
	// if (!isExistItem) {
	// 	notFound();
	// }
	const { slug } = await params;
	
		const currentItem = items.find((item) => item.slug === slug);
	
		if (!currentItem) {
			notFound();
		}
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<CasestudyDetailsMain currentItem={currentItem} />
						<SubFooter />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}

export async function generateStaticParams() {
	return items?.map(({ id }) => ({ id: id.toString() }));
}
