"use client";
import getSubservice from "@/libs/service/resume-formatting-services/getSubservices";
import SubserviceCard from "./SubserviceCard";
import { usePathname } from "next/navigation";
import getServiceData from "@/libs/service/getServiceData";
import getSubServicesData from "@/libs/service/getSubServicesData";

const Subservices = () => {
	// const subservices = getSubservice();
	const pathname = usePathname();
    const slug = pathname.split("/").filter(Boolean).pop();

    const subServices = getSubServicesData(slug);
	const subServicesData =
		!subServices || Object.keys(subServices).length === 0
			? getServiceData("data-extraction-services")
			: subServices;
	return (
		<section className="tj-blog-section-2 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Solution
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading-subservice style-2">
									<h2 className="sec-title text-anim">
										{subServicesData.h2}
									</h2>
								</div>
								<div className="wow fadeInUp" data-wow-delay=".5s">
									<p className="desc tagline">
										{subServicesData.desc}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row row-gap-4 h6-blog-wrapper">
					{subServicesData.services?.length
						? subServicesData.services?.map((subservice, idx) => (
							<div key={idx} className="col-xl-4 col-md-6">
								<SubserviceCard subservice={subservice} idx={idx} />
							</div>
						))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Subservices;
