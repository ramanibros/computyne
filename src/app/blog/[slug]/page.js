import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import BlogDetailsMain2 from "@/components/layout/main/BlogDetailsMain2";

import CallSchedule from "@/components/sections/home-page/CallSchedule";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getBlogs from "@/libs/getBlogs";
import { notFound } from "next/navigation";
const items = getBlogs();

export default async function BlogDetails({ params }) {
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
						{/* <BlogDetailsMain currentItemId={parseInt(id)} /> */}
						<BlogDetailsMain2 currentItem={currentItem} />
						<CallSchedule />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}

// export async function generateStaticParams() {
// 	return items?.map(({ id }) => ({ id: id.toString() }));
// }
export async function generateStaticParams() {
  return items.map(({ slug }) => ({
    slug,
  }));
}
