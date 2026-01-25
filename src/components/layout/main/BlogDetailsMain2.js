import BlogDetailsPrimary from "@/components/sections/blogs/BlogDetailsPrimary";
import HeroInner from "@/components/sections/hero/HeroInner";
import getBlogs from "@/libs/getBlogs";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
import HeroInnerBlog from "@/components/sections/hero/HeroInnerBlog";
const BlogDetailsMain2 = ({ currentItem }) => {
  const items = getBlogs();
  const option = getPreviousNextItem(items, currentItem);

  const { title, img } = currentItem || {};

  return (
    <div>
      <HeroInnerBlog
        title={title}
        text={title}
        breadcrums={[{ name: "Blogs", path: "/blogs" }]}
        bgImg={img}
      />
      <BlogDetailsPrimary option={option} />
    </div>
  );
};


export default BlogDetailsMain2;
