import React from 'react';
import styled from 'styled-components';
import '../styles/card.css';

const Wrapper = styled.div`
	font-size: 10px;
	max-width: 60em;
	height: 30em;
	box-shadow: 0px 8px 18px -10px rgba(0, 0, 0, 0.5);
	background-color: #fdfdfd;
	// background-color: black;
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
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
`;

const LeftDetailsContainer = styled.div`
	min-width: 20em;
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
	font-size: 1.8em;
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

const RightDetailsContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	height: 100%;
	position: relative;
`;

const IconInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 35em;
	align-self: flex-end;
	margin-bottom: 1.5em;
	position: relative;
	top: 8em;
`;

const IconInfo = styled.div`
	color: #fdfdfd;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	& h3 {
		margin: 0;
		font-size: 1.4em;
	}

	& p {
		margin: 0;
		font-size: 2.8em;
	}

	& i {
		font-size: 3.5em;
		margin: 0.15em 0;
	}
`;

const ProfileNameLight = styled.h2`
	color: #fdfdfd;
	font-size: 3.6em;
	top: -0.3em;
	position: relative;
	left: 3.4em;
	// transform: translate(-2.5em, 0%);
	// align-self: flex-start;
	width: 100%;
`;

const Avatar = styled.img`width: 13em;`;

const Card = () => {
	return (
		<Wrapper className="card-wrapper">
			<LeftContainer className="card-expand">
				<LeftDetailsContainer>
					<CylinderText style={{ marginTop: '1em' }}>LEVEL 13</CylinderText>
					<Avatar src={require('../assets/woman.svg')} alt="avatar" />
					<CylinderText style={{ marginBottom: '1em' }}>5,312 POINTS</CylinderText>
				</LeftDetailsContainer>
				<RightDetailsContainer>
					<ProfileNameLight>Jane Doe</ProfileNameLight>
					<IconInfoContainer>
						<IconInfo>
							<h3>AWARDS</h3>
							<i className="fas fa-trophy" />
							<p>2</p>
						</IconInfo>
						<IconInfo>
							<h3>MATCHES</h3>
							<i className="fas fa-gamepad" />
							<p>27</p>
						</IconInfo>
						<IconInfo>
							<h3>PALS</h3>
							<i className="fas fa-users" />
							<p>123</p>
						</IconInfo>
						<IconInfo>
							<h3>Coffee</h3>
							<i className="fas fa-coffee" />
							<i className="fas fa-infinity" style={{ fontSize: '2.4em' }} />
						</IconInfo>
					</IconInfoContainer>
				</RightDetailsContainer>
			</LeftContainer>
			<RightContainer>
				<TextPrimary>Jane Doe</TextPrimary>
				<TextPrimarySmall>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, Fusce a volutpat mauris, at molestie lacus.
					Nam vestibulum sodales odio ut pulvinar.
				</TextPrimarySmall>
				<Info>Mouse over the card for more info</Info>
			</RightContainer>
		</Wrapper>
	);
};

export default Card;
