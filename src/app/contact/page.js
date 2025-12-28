import Header from "@/components/layout/header/Header";
import Contact3 from "@/components/sections/contacts/Contact3";
import ContactTop from "@/components/sections/contacts/ContactTop";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import CallSchedule from "@/components/sections/funfacts/CallSchedule";
import FooterMod from "@/components/layout/footer/FooterMod";
import HeroInnerContact from "@/components/sections/hero/HeroInnerContact";
import Contact3Mod from "@/components/sections/contacts/Contact3Mod";

export default function Contact() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInnerContact title={"Get In Touch"} text={"Computyne is a specialized organization dedicated to delivering world-class business solutions with a focus on quality, efficiency, and innovation."} />
						<Contact3Mod/>
						<ContactTop />
						<CallSchedule/>
					</main>
					<FooterMod />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
