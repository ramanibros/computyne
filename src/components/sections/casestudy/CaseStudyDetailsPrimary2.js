"use client";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "./CtaSidebar";
const CasestudyDetailsPrimary2 = ({ option }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
	const { img, title, id, content, clientWords } = currentItem || {};
	console.log("CURRENT ITEM", currentItem)

	return (
		<section className="tj-blog-section section-gap">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							{Array.isArray(content) && content.map((item, index) => (
								<div key={index} className="tj-sidebar-widget blog-item style-4">
									<div className="blog-content-mod">
										<div className="title-area">

											{/* TITLE */}
											{item?.title && (
												<div className="project-text">
													<h3 className="title-casestudy">{item.title}</h3>
												</div>
											)}

											{/* SUB LINE */}
											{item?.subLine && (
												<p className="wow fadeInUp" data-wow-delay=".3s">
													{item.subLine}
												</p>
											)}

											{/* PARAGRAPH DATA (string) */}
											{typeof item?.data === "string" && (
												<p className="wow fadeInUp" data-wow-delay=".6s">
													{item.data}
												</p>
											)}

											{/* LIST DATA (array) */}
											{Array.isArray(item?.data) && item.data.length > 0 && (
												<div className="desc blog-text-mod wow fadeInUp" data-wow-delay=".8s">
													<ul className="wow fadeInUp">
														{item.data.map((listItem, i) => (
															<li key={i}>
																<span>
																	<i className="tji-list"></i>
																</span>
																{listItem}
															</li>
														))}
													</ul>
												</div>
											)}



										</div>

									</div>

								</div>
							))}

							<blockquote className="wow fadeInUp" data-wow-delay=".3s">
								<p>
									{clientWords.data}
								</p>
								<cite>{clientWords.by}</cite>
							</blockquote>


							<div
								className="tj-post__navigation mb-0 wow fadeInUp"
								data-wow-delay="0.3s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/casestudys/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/casestudys"} className="tj-nav-post__grid">
									<i className="tji-window"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/casestudys/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>


						</div>
					</div>
					<div className="col-lg-4">
						<aside className="tj-main-sidebar">
							{/* <!-- category --> */}
							<div
								className="tj-sidebar-widget widget-categories wow fadeInUp"
								data-wow-delay=".1s"
							>
								<h4 className="widget-title">Project Info</h4>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-user"></i>
									</div>
									<div className="project-text">
										<span>Company</span>
										<h6 className="title">Innovate Interiors Group</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-chart"></i>
									</div>
									<div className="project-text">
										<span>Industry</span>
										<h6 className="title">Corporate Business</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-location-2"></i>
									</div>
									<div className="project-text">
										<span>Location</span>
										<h6 className="title">Maplewood Heights, CA</h6>
									</div>
								</div>

								{/* <div className="infos-item">
									<div className="project-icons">
										<i className="tji-budget"></i>
									</div>
									<div className="project-text">
										<span>Budget</span>
										<h6 className="title">$100M USD</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-calendar"></i>
									</div>
									<div className="project-text">
										<span>Complete date</span>
										<h6 className="title">OCT 20, 2024</h6>
									</div>
								</div> */}
							</div>
							{/* <!-- cta --> */}
							<div
								className="tj-sidebar-widget widget-feature-item wow fadeInUp"
								data-wow-delay=".3s"
							>
								<CtaSidebar />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CasestudyDetailsPrimary2;
