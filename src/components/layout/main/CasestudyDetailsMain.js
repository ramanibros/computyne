import CaseStudyDetailsPrimary from "@/components/sections/casestudy/CaseStudyDetailsPrimary";
import CasestudyDetailsPrimary2 from "@/components/sections/casestudy/CaseStudyDetailsPrimary2";
import HeroInner from "@/components/sections/hero/HeroInner";
import getBlogs from "@/libs/getBlogs";
import getCaseStudy from "@/libs/getCaseStudies";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
const CasestudyDetailsMain = ({ currentItem }) => {
	const items = getCaseStudy();
	// const currentId = currentItemId;
	// const option = getPreviousNextItem(items, currentId);
	// const { title } = option?.currentItem || {};

	const option = getPreviousNextItem(items, currentItem);

	const { title, img, detailsImg } = currentItem || {};
	console.log("CHECK THIS ", currentItem)
	return (
		<div>
			<HeroInner
				title={title ? title : "Casestudy Details"}
				text={title ? title : "Casestudy Details"}
				breadcrums={[{ name: "Case Studies", path: "/case-studies" }]}
				bgImg={detailsImg}
			/>
			<CasestudyDetailsPrimary2 option={option} />
		</div>
	);
};

export default CasestudyDetailsMain;
