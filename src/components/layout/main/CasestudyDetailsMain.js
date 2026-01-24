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

	const { title, img } = currentItem || {};
	return (
		<div>
			<HeroInner
				title={"Casestudy Details"}
				text={title ? title : "Casestudy Details"}
				breadcrums={[{ name: "Casestudys", path: "/casestudys" }]}
				bgImg={img}
			/>
			<CasestudyDetailsPrimary2 option={option} />
		</div>
	);
};

export default CasestudyDetailsMain;
