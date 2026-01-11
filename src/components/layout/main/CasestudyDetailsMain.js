import CaseStudyDetailsPrimary from "@/components/sections/casestudy/CaseStudyDetailsPrimary";
import CasestudyDetailsPrimary2 from "@/components/sections/casestudy/CaseStudyDetailsPrimary2";
import HeroInner from "@/components/sections/hero/HeroInner";
import getBlogs from "@/libs/getBlogs";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
const CasestudyDetailsMain = ({ currentItemId }) => {
	const items = getBlogs();
	const currentId = currentItemId;
	const option = getPreviousNextItem(items, currentId);
	const { title } = option?.currentItem || {};
	return (
		<div>
			<HeroInner
				title={"Casestudy Details"}
				text={title ? title : "Casestudy Details"}
				breadcrums={[{ name: "Casestudys", path: "/casestudys" }]}
			/>
			<CasestudyDetailsPrimary2 option={option} />
		</div>
	);
};

export default CasestudyDetailsMain;
