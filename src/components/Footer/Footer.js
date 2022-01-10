import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { contactInfo } from "../../constants/constants";
import { socialLinks } from "../../constants/constants";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => (
	<FooterWrapper>
		<LinkList>
			<LinkColumn>
				<LinkTitle>Contact</LinkTitle>
				<LinkItem href={`tel:${contactInfo["mobile"]}`}>
					{contactInfo["mobile"]}
				</LinkItem>
			</LinkColumn>

			<LinkColumn>
				<LinkTitle>Email</LinkTitle>
				<LinkItem href={`mailto:${contactInfo["email"]}`}>
					{contactInfo["email"]}
				</LinkItem>
			</LinkColumn>
		</LinkList>

		<SocialIconsContainer>
			<CompanyContainer>
				<Slogan>Consistency is the key to success.</Slogan>
			</CompanyContainer>

			<SocialContainer>
				<SocialIcons href={socialLinks["github"]} target="_blank">
					<AiFillGithub size="3rem" />
				</SocialIcons>
				<SocialIcons href={socialLinks["linkedIn"]} target="_blank">
					<AiFillLinkedin size="3rem" />
				</SocialIcons>
				<SocialIcons href={socialLinks["instagram"]} target="_blank">
					<AiFillInstagram size="3rem" />
				</SocialIcons>
			</SocialContainer>
		</SocialIconsContainer>
	</FooterWrapper>
);

export default Footer;
