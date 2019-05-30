import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from './Card';

const CardGrid = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

const RenderCardsGrid = (props) => {
	return (
		<div>
			<CardGrid>
				{props.cards.map((card) => {
					return <Card color={card.color} name={card.name} key={card.key} />;
				})}
			</CardGrid>
			<div>
				<Link to="/add">Link to Add Cards</Link>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { cards: state.card.cards };
};

export default connect(mapStateToProps)(RenderCardsGrid);
