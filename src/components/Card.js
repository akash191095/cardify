import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	font-size: 10px;
	max-width: 60em;
	height: 30em;
	box-shadow: 0px 8px 18px -10px rgba(0, 0, 0, 0.5);
	background-color: #fdfdfd;
	border-radius: 6px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
`;

const LeftContainer = styled.div`
	width: 20em;
	height: 30em;
	background-color: #de6c6c;
	// border-radius: 6px;
	z-index: 10;
	overflow: hidden;
	transition: .5s width;
	&:hover {
		width: 60em;
	}
`;

const LeftDetailsContainer = styled.div`
	width: 20em;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
`;

const RightContainer = styled.div`
	align-self: flex-start;
	margin: 1em 0;
	font-size: 2em;
	font-color: #201616;
	position: absolute;
	max-width: 40em;
	left: 10em;
	height: 100%;
`;

const CylinderText = styled.p`
	margin: 0;
	background-color: #b85554;
	border-radius: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	display: inline-block;
	font-size: 1.4em;
	padding: 0.3em 1.2em;
	color: #fdfdfd;
`;

const TextPrimary = styled.h2`
	margin: 0;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0%);
`;

const TextPrimarySmall = styled.h3`
	margin: 0;
	font-size: 0.9em;
	line-height: 1.3em;
	color: #625959;
	font-weight: 400;
	margin-top: 3em;
	padding: 1.2em;
	text-align: justify;
  text-justify: inter-word;
`;

const Info = styled(TextPrimarySmall)`
	position: absolute;
	right: -5px;
	bottom: 10px;
	font-size: 0.8em;
`;

const Avatar = styled.img`width: 13em;`;

const Card = () => {
	return (
		<Wrapper>
			<LeftContainer>
				<LeftDetailsContainer>
					<CylinderText style={{ marginTop: '1em' }}>LEVEL 13</CylinderText>
					<Avatar src={require('../assets/woman.svg')} alt="avatar" />
					<CylinderText style={{ marginBottom: '1em' }}>5,312 POINTS</CylinderText>
				</LeftDetailsContainer>
			</LeftContainer>
			<RightContainer>
				<TextPrimary>Jane Doe</TextPrimary>
				<TextPrimarySmall>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.
				</TextPrimarySmall>
				<Info>Mouse over the card for more info</Info>
			</RightContainer>
		</Wrapper>
	);
};

export default Card;
