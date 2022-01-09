import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Greetings!
				<br /> It's Umair
			</SectionTitle>
			<SectionText>
				I am a passionate developer. My love for coding is what makes me
				enjoy everything I do as a programmer. I find learning new
				technologies and concepts pretty exciting. I feel comfortable
				working either individually or with a team.
			</SectionText>
			<Button>Learn More</Button>
		</LeftSection>
	</Section>
);

export default Hero;
