"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import getHtmlStringData from "@/libs/getHtmlStringData";
import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const BlogDetailsPrimary = ({ option }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
	const { title, id, img, tags } = currentItem || {};

	const pathname = usePathname();
	const slug = pathname.split("/").filter(Boolean).pop();


	const [htmlString, setHtmlString] = useState("");

	useEffect(() => {
		if (!slug) return;

		getHtmlStringData(slug).then((data) => {
			setHtmlString(data || "<p>Content not found</p>");
		});
	}, [slug]);
	return (
		<section className="tj-blog-section section-gap slidebar-stickiy-container">
			<div className="container">
				<div className="row row-gap-5">
					<div
						className="postBody-module__Mf2ZlW__content col-lg-8"
						dangerouslySetInnerHTML={{ __html: htmlString }}
					/>
					<div className="col-lg-4">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogDetailsPrimary;
