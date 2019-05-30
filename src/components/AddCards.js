import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCard } from '../actions';

const AddCards = (props) => {
	let [ color, setColor ] = useState('#4286f4');
	const [ name, setName ] = useState('John Doe');

	const onInputChange = (e) => {
		if (e.target.name === 'color') {
			setColor(e.target.value);
		} else if (e.target.name === 'name') {
			setName(e.target.value);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const key = Math.random();
		props.dispatch(addCard(color, name, key));
	};

	return (
		<div>
			<form onSubmit={(e) => onSubmit(e)}>
				<div>
					Hex Color
					<input name="color" type="text" value={color} onChange={(e) => onInputChange(e)} />
				</div>
				<div>
					Name
					<input name="name" type="text" value={name} onChange={(e) => onInputChange(e)} />
				</div>
				<button type="submit">Add a card!</button>
			</form>
      <div>
        <Link to="/">Link to Cards</Link>
      </div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		cards: state.card.cards
	};
};

export default connect(mapStateToProps)(AddCards);
