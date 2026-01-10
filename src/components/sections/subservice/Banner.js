"use client";
import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import getServiceData from "@/libs/service/getServiceData";
import { usePathname } from "next/navigation";

// const Banner = ({ title, text, bannerimage, isShowButton = false, buttonLabel, buttonLink }) => {
const Banner = () => {
	const pathname = usePathname();
	const slug = pathname.split("/").filter(Boolean).pop();
	const bannner = getServiceData(slug);


	const bannerData =
		!bannner || Object.keys(bannner).length === 0
			? getServiceData("data-extraction-services")
			: bannner;
	return (
		<section
			className="tj-page-header-mod section-gap-x"
			style={{ backgroundImage: `url('${bannerData.banner.image}')` }}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="tj-page-header-content text-center">
							<h1 className={`tj-page-title`}>{bannerData.banner.h1}</h1>
                            <div className="tagline mt-3 tj-page-header-tagline">
								{bannerData.banner.tagline}
                            </div>
							<div className="btn-area wow fadeInUp mt-4" data-wow-delay=".8s">
								<ButtonPrimary text={bannerData.banner.cta} url={"/contact"} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="page-header-overlay"
				style={{ backgroundImage: `linear-gradient(90deg, #0c1d36 20%, #0c1d3666 60%, #0c1d361a 100%)` }}
			></div>
		</section>
	);
};
export default Banner;
