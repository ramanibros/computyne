import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import getTechServices from "@/libs/getTechServices";
import Link from "next/link";
import { useState } from "react";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();
	const techServices = getTechServices();
	const homeNav = makeActiveLink(navItems[0]);
	const servicesNav = makeActiveLink(navItems[1]);
    const hireResourcesNav = makeActiveLink(navItems[8]);
	const pagesNav = makeActiveLink(navItems[2]);
	const industriesNav = makeActiveLink(navItems[3]);
	const aboutNav = makeActiveLink(navItems[4])
	const blogNav = makeActiveLink(navItems[5]);
	const portfolioNav = makeActiveLink(navItems[6]);
	const contactNav = makeActiveLink(navItems[7])
	const [activeTab, setActiveTab] = useState(0);
	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{/* <li
						className={
							homeNav?.isActive ? "current-menu-ancestor" : ""
						}
					>
						<Link href={homeNav?.path ? homeNav?.path : "#"}>
							{homeNav?.name ? homeNav?.name : "Home"}
						</Link>
						
					</li> */}

					<li
						className={`has-dropdown ${servicesNav?.isActive ? "current-menu-ancestor" : ""
							}`}
					>
						<Link href={servicesNav?.path}>{servicesNav?.name}</Link>

						<ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
							<li>
								<div className="mega-menu-wrapper tabs-layout">

									<div className="mega-menu-left">
										<div className="mega-menu-tabs">
											{servicesNav?.submenu?.map((pageItem, idx) => (
												<button
													key={idx}
													className={`mega-tab ${activeTab === idx ? "active" : ""
														}`}
													onMouseEnter={() => setActiveTab(idx)}
												>
													{pageItem?.name}
												</button>
											))}
										</div>

										{/* DIVIDER */}
										<div className="mega-menu-divider" />

										{/* QUICK TECHNOLOGIES */}
										<div className="mega-tech-services">
											<h6 className="mega-tech-title">Quick Technologies Services</h6>

											<div className="mega-tech-grid">
												{techServices.map((tech) => (
													<Link
														key={tech.id}
														href={tech.path}
														className="mega-tech-item"
														title={tech.name}
													>
														<img src={tech.icon} alt={tech.name} />
													</Link>
												))}
											</div>


										</div>

									</div>

									{/* LEFT SIDE : TAB MENU */}
									

									{/* CENTER : TAB CONTENT */}
									<div className={`mega-menu-content ${servicesNav?.submenu?.[activeTab]?.items?.length <= 7
											? "one-column"
											: "two-column"
										}`}>
										{servicesNav?.submenu?.[activeTab]?.items?.map((item, idx) => (
											<Link
												key={idx}
												href={item?.path || "/"}
												className={`mega-menu-item ${item?.isActive ? "active" : ""
													}`}
											>
												<div className="item-head">
													<span className="item-title">{item?.name}</span>

													{/* {item?.badge && (
														<span
															className={`mega-menu-badge ${item.badge === "HOT" ? "mega-menu-badge-hot" : ""
																}`}
														>
															{item?.badge}
														</span>
													)} */}
												</div>

												{item?.desc && (
													<p className="item-desc">{item?.desc}</p>
												)}
											</Link>
										))}
									</div>

									{/* RIGHT SIDE : FEATURE BOX */}
									
									<div className="col-12 col-lg-3 mega-menu-pages-single">
										<div className="mega-menu-pages-single-inner">
											<div className="feature-box">
												<div className="feature-content">
													<h2 className="title">Modern</h2>
													<span>Home Makeover</span>
													<Link
														className="read-more feature-contact"
														href="tel:8321890640"
													>
														<i className="tji-phone-3"></i>
														<span>+8 (321) 890-640</span>
													</Link>
												</div>
												<div className="feature-images">
													<img src="/images/service/service-ad.webp" alt="" />
												</div>
											</div>
										</div>
									</div>

								</div>
							</li>
						</ul>
					</li>

					<li className={hireResourcesNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={hireResourcesNav?.path ? hireResourcesNav?.path : "#"}>
							{hireResourcesNav?.name ? hireResourcesNav?.name : "Hire Resources"}
						</Link>
					</li>

					{/* <li
						className={`has-dropdown ${
							pagesNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={pagesNav?.path}>{pagesNav?.name}</Link>
						<ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
							<li>
								<div className="mega-menu-wrapper">
									{pagesNav?.submenu?.length
										? pagesNav?.submenu?.map((pageItem, idx) => (
												<div key={idx} className="mega-menu-pages-single">
													<div className="mega-menu-pages-single-inner">
														<h6 className="mega-menu-title">
															{pageItem?.name}
														</h6>
														<div className="mega-menu-list">
															{pageItem?.items?.length
																? pageItem?.items?.map((item, idx2) => (
																		<Link
																			key={100 + idx2}
																			href={item?.path ? item?.path : "/"}
																			className={item?.isActive ? "active" : ""}
																		>
																			{item?.name}
																			{item?.badge ? (
																				<span
																					className={`mega-menu-badge tj-zoom-in-out-anim ${
																						item?.badge === "HOT"
																							? "mega-menu-badge-hot"
																							: ""
																					}`}
																				>
																					{item?.badge}
																				</span>
																			) : (
																				""
																			)}
																		</Link>
																  ))
																: ""}
														</div>
													</div>
												</div>
										  ))
										: ""}

									<div className="col-12 col-lg-3 mega-menu-pages-single">
										<div className="mega-menu-pages-single-inner">
											<div className="feature-box">
												<div className="feature-content">
													<h2 className="title">Modern</h2>
													<span>Home Makeover</span>
													<Link
														className="read-more feature-contact"
														href="tel:8321890640"
													>
														<i className="tji-phone-3"></i>
														<span>+8 (321) 890-640</span>
													</Link>
												</div>
												<div className="feature-images">
													<img src="/images/service/service-ad.webp" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</li> */}

					<li
						className={`has-dropdown ${
							industriesNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={industriesNav?.path ? industriesNav?.path : "#"}>
							{industriesNav?.name}
						</Link>
						<ul className="sub-menu  mega-menu-service">
							{industriesNav?.submenu?.length
								? industriesNav?.submenu?.map((item, idx) => (
										<li key={idx}>
											<Link
												className="mega-menu-service-single"
												href={item?.path ? item?.path : "/"}
											>
												{" "}
												<span className="mega-menu-service-icon">
													<i
														className={
															item?.icon ? item?.icon : "tji-service-1"
														}
													></i>
												</span>{" "}
												<span className="mega-menu-service-title">
													{item?.name
														? item?.name
														: "Business process optimization"}
												</span>{" "}
												<span className="mega-menu-service-nav">
													<i className="tji-arrow-right-long"></i>
													<i className="tji-arrow-right-long"></i>
												</span>
											</Link>
										</li>
								  ))
								: ""}
						</ul>
					</li>

					<li className={aboutNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={aboutNav?.path ? aboutNav?.path : "#"}>
							{aboutNav?.name ? aboutNav?.name : "About US"}
						</Link>
					</li>

					<li
						className={`has-dropdown ${
							blogNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={blogNav?.path ? blogNav?.path : "#"}>
							{blogNav?.name}
						</Link>
						<ul className="sub-menu">
							{blogNav?.submenu?.length
								? blogNav?.submenu?.map((item, idx) => (
										<li
											key={idx}
											className={item?.isActive ? "current-menu-item" : ""}
										>
											<Link href={item?.path ? item?.path : "/portfolios"}>
												{item?.name ? item?.name : "Portfolio"}
											</Link>
										</li>
								  ))
								: ""}
						</ul>
					</li>

					<li
						className={`has-dropdown ${
							portfolioNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={portfolioNav?.path ? portfolioNav?.path : "#"}>
							{portfolioNav?.name}
						</Link>
						<ul className="sub-menu">
							{portfolioNav?.submenu?.length
								? portfolioNav?.submenu?.map((item, idx) => (
										<li
											key={idx}
											className={item?.isActive ? "current-menu-item" : ""}
										>
											<Link href={item?.path ? item?.path : "/portfolios"}>
												{item?.name ? item?.name : "Portfolio"}
											</Link>
										</li>
								  ))
								: ""}
						</ul>
					</li>

					

					<li className={contactNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={contactNav?.path ? contactNav?.path : "#"}>
							{contactNav?.name ? contactNav?.name : "Contact"}
						</Link>
					</li>

				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
