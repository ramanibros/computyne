import Link from "next/link";

const FooterMod = () => {
	return (
		<footer className="tj-footer-section footer-2 section-gap-x">
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/logo.svg" alt="Logos" />
									</Link>
								</div>
								<div className="footer-text-mod">
									<p>
										Developing personalze our customer journeys to increase
										satisfaction & loyalty of our expansion.
									</p>
								</div>
								<div className="award-logo-area-mod">
									<div className="award-logo-mod">
										<img src="https://www.computyne.com/images/footer/google.svg" alt="" />
									</div>
									<div className="award-logo-mod">
										<img src="https://www.computyne.com/images/footer/goodfirm.svg" alt="" />
									</div>
									<div className="award-logo-mod">
										<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn_mZl44kQu3wSiXwF7epkOJmpw6tcvoyeYQ&s" alt="" />
									</div>
									<div className="award-logo-mod">
										<img src="https://www.computyne.com/images/footer/clutch.svg" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-2 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">Resources</h5>
								<ul>
									<li>
										<Link href="/contact">Contact us</Link>
									</li>
									<li>
										<Link href="/team">About Us</Link>
									</li>
									<li>
										<Link href="/blogs">Blogs</Link>
									</li>
									<li>
										<Link href="#">Case Studies</Link>
									</li>
									<li>
										<Link href="#">Careers</Link>
									</li>
									<li>
										<Link href="#">Team Members</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">Services</h5>
								<ul>
									<li>
										<Link href="/services/1">Data Solutions</Link>
									</li>
									<li>
										<Link href="/services/2">Data Management</Link>
									</li>
									<li>
										<Link href="/services/3">Document Processing</Link>
									</li>
									<li>
										<Link href="/services/4">Data Collection</Link>
									</li>
									<li>
										<Link href="/services/5">Data Annotation</Link>
									</li>
									<li>
										<Link href="/services/6">Data Entry</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">Industries</h5>
								<ul>
									<li>
										<Link href="#">Real Estate</Link>
									</li>
									<li>
										<Link href="#">Logistics & Transportation</Link>
									</li>
									<li>
										<Link href="#">Ecommerce</Link>
									</li>
									<li>
										<Link href="#">ITES</Link>
									</li>
									<li>
										<Link href="#">Finance & Accounting</Link>
									</li>
									<li>
										<Link href="#">Energy & Utilities</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget widget-contact wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h5 className="title">Our Office</h5>
								<div className="footer-contact-info">
									<div className="contact-item">
										<span>
											993 Renner Burg, West Rond, MT 94251-030, USA.
										</span>
									</div>
									<div className="contact-item">
										<Link href="tel:10095447818">
											<span>
													<i className="tji-phone"></i> +1 (009) 544-7818
											</span>
											</Link>
									</div>
									<div className="contact-item">
										<Link href="mailto:support@bexon.com">
											<span>
													<i className="tji-envelop"></i> support@bexon.com
											</span>
										</Link>
									</div>
									<div className="contact-item">
										<span>
											<i className="tji-clock"></i> Mon-Fri 10am-10pm
										</span>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="col-xl-4 col-lg-5 col-md-6">
							<div
								className="footer-widget widget-subscribe wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h3 className="title">Subscribe to Our Newsletter.</h3>
								<div className="subscribe-form">
									<form action="#">
										<input
											type="email"
											name="email"
											placeholder="Enter email"
										/>
										<button type="submit">
											<i className="tji-plane"></i>
										</button>
										<label htmlFor="agree">
											<input id="agree" type="checkbox" />
											Agree to our{" "}
											<Link href="/terms-and-conditions">
												Terms & Condition?
											</Link>
										</label>
									</form>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
			<div className="tj-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="footer-contact-mod">
									<ul>
										<li>
											<Link href="tel:10095447818">
												<span className="icon">
													<i className="tji-phone-2"></i>
												</span>
												<span className="text">+1 (009) 544-7818</span>
											</Link>
										</li>
										<li>
											<Link href="mailto:info@bexon.com">
												<span className="icon">
													<i className="tji-envelop-2"></i>
												</span>
												<span className="text">info@bexon.com</span>
											</Link>
										</li>
									</ul>
								</div>
								<div className="social-links-mod">
									<ul>
										<li>
											<Link href="https://www.facebook.com/" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" target="_blank">
												<i className="fa-brands fa-x-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/company/computyne/" target="_blank">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-text-mod">
									<p>
										&copy; 2025
										{" "}<Link
											href="https://themeforest.net/user/theme-junction/portfolio"
											target="_blank"
										>
											Computyne
										</Link>{" "}
										All right reserved
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</footer>
	);
};

export default FooterMod;
