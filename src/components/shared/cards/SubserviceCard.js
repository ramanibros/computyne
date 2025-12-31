import Link from "next/link";

const SubserviceCard = ({ blog, idx }) => {
	const { title, desc, id, img1, category, date, day, month } = blog || {};
	return (
		<div className="blog-item style-4">
			{/* <div className="blog-thumb">
				<Link href={`/blogs/${id}`}>
					<img src={img1 ? img1 : "/images/blog/blog-4.webp"} alt="" />
				</Link>
			</div> */}
			<div className="blog-content-mod">
				<div className="title-area">
					{/* <h4 className="title">
						{title}
					</h4> */}
					<div className="project-text">
						<h4 className="title">
							<Link href={`/portfolios/${id}`}>{title}</Link>
						</h4>
						<Link className="tji-icon-btn-mod" href={`/portfolios/${id}`}>
							<i className="tji-arrow-right-long"></i>
						</Link>
					</div>
					<p className="desc  wow fadeInUp" data-wow-delay=".8s">
						Behind every solution we deliver, there are real people, real expertise, and a commitment to your success.
					</p>
					<div className="desc blog-text-mod wow fadeInUp" data-wow-delay=".8s">
						<ul className="wow fadeInUp">
							<li><span><i className="tji-list"></i></span>Personalization at Scale</li>
							<li><span><i className="tji-list"></i></span>Improved Customer Retention</li>
							<li><span><i className="tji-list"></i></span>Data-Driven Insights</li>
							<li><span><i className="tji-list"></i></span>Omni-channel Integration</li>
							<li><span><i className="tji-list"></i></span>Customer Retention</li>
							<li><span><i className="tji-list"></i></span>Support Optimization</li>
							<li><span><i className="tji-list"></i></span>Proactive Engagement</li>
						</ul>
						
					</div>
					

				</div>
				
				
			</div>
			{/* <div className="wow fadeInUp service-card-learn-more-btn" data-wow-delay=".3s">
				<ButtonPrimary
					text={""}
					url={"/about"}
					isTextBtn={true}
				/>
			</div> */}
		</div>
	);
};

export default SubserviceCard;
