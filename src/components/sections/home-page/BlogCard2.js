import Link from "next/link";

const BlogCard2 = ({ blog, idx }) => {
	const { title, desc, id, img1, category, date, day, month } = blog || {};
	return (
		<div className="blog-item style-2">
			<div className="blog-thumb">
				<Link href={`/blogs/${id}`}>
					<img src={img1 ? img1 : "/images/blog/blog-4.webp"} alt="" />
				</Link>
				{/*<div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div>*/}
			</div>
			<div className="blog-content">
				<div className="title-area">
					{/*<div className="blog-meta">
						<span className="categories">
							<Link href={`/blogs?category=${makePath(category)}`}>
								{category}
							</Link>
						</span>
						<span>
							By <Link href={`/blogs/${id}`}>Ellinien Loma</Link>
						</span>
					</div>*/}
					<h4 className="title">
						{title}
					</h4>
					<p className="desc  wow fadeInUp" data-wow-delay=".8s">
						Behind every solution we deliver, there are real people, real expertise, and a commitment to your success.
					</p>
					<div className="desc blog-text wow fadeInUp" data-wow-delay=".8s">
						<ul className="wow fadeInUp">
							<li><span><i className="tji-check"></i></span>Personalization at Scale</li>
							<li><span><i className="tji-check"></i></span>Improved Customer Retention</li>
							<li><span><i className="tji-check"></i></span>Data-Driven Insights</li>
							<li><span><i className="tji-check"></i></span>Omni-channel Integration</li>
							<li><span><i className="tji-check"></i></span>Customer Retention</li>
							<li><span><i className="tji-check"></i></span>Support Optimization</li>
							<li><span><i className="tji-check"></i></span>Proactive Engagement</li>
						</ul>
					</div>

				</div>
				{/*<ButtonPrimary
					text={"Read More"}
					url={`/blogs/${id}`}
					isTextBtn={true}
				/>*/}
			</div>
		</div>
	);
};

export default BlogCard2;
