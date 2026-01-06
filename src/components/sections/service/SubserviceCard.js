import Link from "next/link";

const SubserviceCard = ({subservice, idx}) => {
    const {title, desc, id, data, url} = subservice || {};
    return (
        <div className="blog-item style-4">
            <div className="blog-content-mod">
                <div className="title-area">
                    <div className="project-text">
                        <h3 className="title">
                            <Link href={`${url}`}>{title}</Link>
                        </h3>
                        <Link className="tji-icon-btn-mod" href={`${url}`}>
                            <i className="tji-arrow-right-long"></i>
                        </Link>
                    </div>
                    <p className="desc  wow fadeInUp" data-wow-delay=".8s">
                        {desc}
                    </p>
                    <div className="desc blog-text-mod wow fadeInUp" data-wow-delay=".8s">
                        <ul className="wow fadeInUp">
                            {data?.length
                                ? data?.map((d, idx) => (
                                <li key={idx}><span><i className="tji-list"></i></span>{d.value}</li>
                                ))
                                : ""}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubserviceCard;
