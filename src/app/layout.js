import { Mona_Sans } from "next/font/google";
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./assets/css/animate.min.css";
import "./assets/css/bexon-icons.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./assets/css/odometer-theme-default.css";
import "./globals.scss";
import Script from "next/script";


const bodyFont = Mona_Sans({
    variable: "--tj-ff-body",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    display: "swap",
});
const headingFont = Mona_Sans({
    variable: "--tj-ff-heading",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
    display: "swap",
});

export const metadata = {
    title: "Computyne -Global outsourcing & Data Services Company",
    description: "Computyne -Global outsourcing & Data Services Company",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-scroll-behavior="smooth" dir="ltr">
            <head>
                <Script
                    id="live2support-chat"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function () {
                                var pp = document.createElement('script'),
                                    ppr = document.getElementsByTagName('script')[0];
                                var stid = 'VHJVakJQZmZscmQ4VWlxL1ZlSmFyQT09';
                                pp.type = 'text/javascript';
                                pp.async = true;
                                pp.src =
                                (document.location.protocol === 'https:' ? 'https://' : 'http://') +
                                's01.live2support.com/dashboardv2/chatwindow/';
                                ppr.parentNode.insertBefore(pp, ppr);
                            })();
                            `,
                    }}
                />
            </head>
            <body className={`${bodyFont.variable} ${headingFont.variable}`}>
                {children}
            </body>
        </html>
    );
}
