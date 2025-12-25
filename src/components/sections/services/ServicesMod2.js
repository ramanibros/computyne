import BlogCard6 from "@/components/shared/cards/BlogCard6";
import getBlogs from "@/libs/getBlogs";
import ServiceModCard2 from "./ServiceModCard2";

const ServicesMod2 = () => {
	const blogs = getBlogs().slice(0, 6);
	return (
		<section className="tj-blog-section h6-blog section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Solutions
							</span>
							<h2 className="sec-title text-anim">
								Intelligent Data Solutions for High-Performance <span>Business.</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 h6-blog-wrapper">
					{blogs?.length
						? blogs?.map((blog, idx) => (
								<div key={idx} className="col-xl-4 col-md-6">
									<ServiceModCard2 blog={blog} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default ServicesMod2;
