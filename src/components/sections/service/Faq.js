import BootstrapWrapper from "./BootstrapWrapper";
import ButtonPrimary from "./ButtonPrimary";
import FaqItem from "./FaqItem";

const Faq = () => {
	const items =[
			{
				"title": "What are outsourced data collection services?",
				"desc": "Outsourced data collection services involve hiring a third-party provider like Computyne to gather, extract, clean, and deliver business-ready datasets. Instead of allocating internal resources, companies use offshore specialists to collect information from websites, APIs, documents, and databases at scale—saving time and operational costs.",
				"initActive": true
			},
			{
				"title": "Why should businesses outsource data collection to Computyne?",
				"desc": "Outsourcing to Computyne provides access to automated web scraping tools, expert data teams, 24/7 operations, and enterprise-grade accuracy. Businesses receive scalable datasets without hiring internal staff, enabling faster decision-making, reduced costs, and secure data sourcing tailored to their needs."
			},
			{
				"title": "What industries benefit most from outsourced data collection?",
				"desc": "Industries such as AI & ML, eCommerce, real estate, B2B enterprises, financial services, healthcare analytics, travel, and hospitality use outsourced data collection to gather competitor pricing, property listings, contact lists, market feeds, and analytical insights."
			},
			{
				"title": "Can Computyne collect data for AI and machine learning models?",
				"desc": "Yes. Computyne specializes in AI training data collection services, including labeled datasets, text and image datasets, synthetic data sourcing, and structured feeds required to train machine learning models with high accuracy."
			},
			{
				"title": "What types of data can Computyne collect?",
				"desc": "Computyne collects product catalogs, competitor price lists, property listings, B2B contacts, sentiment reviews, financial datasets, market intelligence insights, and document-based information from websites, APIs, SaaS platforms, PDFs, and unstructured sources."
			},
			{
				"title": "How accurate are the datasets delivered?",
				"desc": "All datasets undergo multi-stage validation, deduplication, and manual quality checks. Most projects achieve over 99% accuracy, ensuring reliable and decision-ready data."
			},
			{
				"title": "What is the cost of outsourcing data collection services?",
				"desc": "Pricing depends on dataset size, frequency, complexity, data sources, and delivery format. Computyne offers cost-efficient offshore data collection with flexible monthly or project-based pricing. Contact us for a customized quote."
			},
			{
				"title": "What formats can I receive the collected data in?",
				"desc": "Datasets can be delivered in CSV, Excel, JSON, XML, Google Sheets, or via API or database uploads, depending on integration requirements."
			},
			{
				"title": "Can Computyne provide real-time or scheduled data updates?",
				"desc": "Yes. Computyne supports real-time API feeds, scheduled scraping, recurring monitoring, and continuous data refresh cycles—ideal for price tracking, stock monitoring, OTA rates, and property listings."
			},
			{
				"title": "Does Computyne offer secure data handling?",
				"desc": "All outsourced data collection processes follow strict security and compliance standards, using encryption, NDAs, secure access controls, and regional compliance frameworks."
			},
			{
				"title": "Can I request custom datasets tailored to my business?",
				"desc": "Yes. Computyne builds fully customized datasets aligned to your business goals—whether competitor pricing by SKU, AI-ready labeled data, or commercial property records—ensuring KPI-driven, analytics-ready outputs."
			}
		];
	return (
		<section className="h7-faq section-gap slidebar-stickiy-container">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12 col-lg-4">
						<div className="sec-heading style-2 style-7 slidebar-stickiy">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> FAQs
							</span>
							<h2 className="sec-title text-anim">
								Frequently Asked Questions
							</h2>
							<div className="btn-area wow fadeInUp mt-30" data-wow-delay=".8s">
								<ButtonPrimary text={"Contact Now"} url={"/contact"} />
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-8">
						<BootstrapWrapper>
							<div
								className="accordion tj-faq style-2 h7-faq-wrapper"
								id="faqTwo"
							>
								{items?.length
									? items?.map((item, idx) => (
											<FaqItem key={idx} item={item} idx={idx} />
									  ))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;
