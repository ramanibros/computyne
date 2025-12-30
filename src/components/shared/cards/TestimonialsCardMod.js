import Image from "next/image";

const TestimonialsCardMod = ({ testimonial }) => {
    const {
        authorName,
        authorDesig,
        desc3,
        img = "/images/testimonial/client-1.webp",
        logoImg,
        logoImgLight,
    } = testimonial ? testimonial : {};
    return (
        <div className="testimonial-item">
            <div className="testimonial-author-mod">
                <div className="author-inner">
                    {/* <div className="author-img">
                        <Image
                            src={img}
                            alt="Images"
                            width={89}
                            height={89}
                            style={{ height: "auto" }}
                        />
                    </div> */}
                    <div className="author-header">
                        <h4 className="title">{authorName}</h4>
                        {/* <span className="designation">{authorDesig}</span> */}
                    </div>
                </div>
            </div>
            <div className="desc-mod">
                <p>{desc3}</p>
            </div>
        </div>
    );
};

export default TestimonialsCardMod;
