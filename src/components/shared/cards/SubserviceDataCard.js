import Link from "next/link";

const SubserviceCard = ({ blog, idx }) => {
	const { title, desc, id, img1, category, date, day, month } = blog || {};
	return (
		<div className="blog-item style-4">
			<div className="blog-content-mod">
				<div className="title-area">
					{/* <h4 className="title">
						{title}
					</h4> */}
					<div className="project-text">
						<h4 className="title">
							<Link href={`/portfolios/${id}`}>{title}</Link>
						</h4>
					</div>
					<p className="desc  wow fadeInUp" data-wow-delay=".8s">
						Behind every solution we deliver, there are real people, real expertise, and a commitment to your success.
					</p>
					<p className="desc  wow fadeInUp" data-wow-delay=".8s">
						Behind every solution we deliver, there are real people, real expertise, and a commitment to your success.
					</p>
					<p className="desc  wow fadeInUp" data-wow-delay=".8s">
						Behind every solution we deliver, there are real people, real expertise, and a commitment to your success.
					</p>

				</div>
				
				
			</div>
		</div>
	);
};

export default SubserviceCard;
