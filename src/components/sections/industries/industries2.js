"use client";
import BlogCard2 from "@/components/shared/cards/BlogCard2";
import IndustriesCard from "@/components/shared/cards/IndustriesCard";
import getBlogs from "@/libs/getBlogs";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Industries2 = () => {
	const blogs = getBlogs().slice(0, 6);
	return (
		<section className="tj-blog-section-2 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Industries
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
										Smart Data Solutions for Smarter <span>Industries.</span>
									</h2>
								</div>
								<div className="wow fadeInUp" data-wow-delay=".5s">
									<p className="desc tagline">
										Computyne empowers multiple industries with customized Data Services designed for accuracy, security, and growth.
									</p>
								</div>
								{/* <div
									className="slider-navigation d-none d-md-inline-flex wow fadeInUp"
									data-wow-delay=".7s"
								>
									<div className="slider-prev" role="button">
										<span className="anim-icon">
											<i className="tji-arrow-left"></i>
											<i className="tji-arrow-left"></i>
										</span>
									</div>
									<div className="slider-next" role="button">
										<span className="anim-icon">
											<i className="tji-arrow-right"></i>
											<i className="tji-arrow-right"></i>
										</span>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>

				<div className="row row-gap-4 h6-blog-wrapper">
					{blogs?.length
						? blogs?.map((blog, idx) => (
							<div key={idx} className="col-xl-4 col-md-6">
								<IndustriesCard blog={blog} idx={idx} />
							</div>
						))
						: ""}
				</div>

				{/* <div className="row">
					<div className="col-12">
						<div className="blog-wrapper wow fadeIn" data-wow-delay=".5s">
							
								{blogs?.length
									? blogs?.map((blog, idx) => (
												<IndustriesCard blog={blog} idx={idx} />
									  ))
									: ""}
								<div className="swiper-pagination-area"></div>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default Industries2;
