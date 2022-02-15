import styled from "styled-components";

export const LeftSection = styled.div`
	width: 100%;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}
	@media ${(props) => props.theme.breakpoints.md} {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}
`;

export const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const PicContainer = styled.div`
	width: 400px;
	height: 400px;
	background-image: linear-gradient(
			226deg,
			rgba(31, 31, 31, 0.02) 0%,
			rgba(31, 31, 31, 0.02) 50%,
			rgba(164, 164, 164, 0.02) 50%,
			rgba(164, 164, 164, 0.02) 100%
		),
		linear-gradient(
			190deg,
			rgba(120, 120, 120, 0.01) 0%,
			rgba(120, 120, 120, 0.01) 50%,
			rgba(117, 117, 117, 0.01) 50%,
			rgba(117, 117, 117, 0.01) 100%
		),
		linear-gradient(
			34deg,
			rgba(159, 159, 159, 0.02) 0%,
			rgba(159, 159, 159, 0.02) 50%,
			rgba(205, 205, 205, 0.02) 50%,
			rgba(205, 205, 205, 0.02) 100%
		),
		linear-gradient(
			190deg,
			rgba(206, 206, 206, 0.01) 0%,
			rgba(206, 206, 206, 0.01) 50%,
			rgba(141, 141, 141, 0.01) 50%,
			rgba(141, 141, 141, 0.01) 100%
		),
		linear-gradient(
			341deg,
			rgba(233, 233, 233, 0.03) 0%,
			rgba(233, 233, 233, 0.03) 50%,
			rgba(125, 125, 125, 0.03) 50%,
			rgba(125, 125, 125, 0.03) 100%
		),
		linear-gradient(
			148deg,
			rgba(250, 250, 250, 0.03) 0%,
			rgba(250, 250, 250, 0.03) 50%,
			rgba(23, 23, 23, 0.03) 50%,
			rgba(23, 23, 23, 0.03) 100%
		),
		linear-gradient(
			147deg,
			rgba(253, 253, 253, 0.02) 0%,
			rgba(253, 253, 253, 0.02) 50%,
			rgba(171, 171, 171, 0.02) 50%,
			rgba(171, 171, 171, 0.02) 100%
		),
		linear-gradient(90deg, rgb(58, 36, 145), rgb(168, 95, 194));
	border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
`;

export const Pic = styled.img`
	width: 400px;
	height: 400px;
	object-fit: contain;
`;
