const initialState = {
	cards: [
		{ color: '#DB6767', name: 'Jane Doe', key: '0.5551' },
		{ color: '#9AC6AA', name: 'Jane Doe', key: '0.5552' },
		{ color: '#DB6767', name: 'Jane Doe', key: '0.5553' },
		{ color: '#9AC6AA', name: 'Jane Doe', key: '0.5554' },
		{ color: '#DB6767', name: 'Jane Doe', key: '0.5555' },
		{ color: '#9AC6AA', name: 'Jane Doe', key: '0.5556' }
	]
};

const card = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CARD':
			return {
				...state,
				cards: [
					...state.cards,
					{ color: action.payload.color, name: action.payload.name, key: action.payload.key }
				]
			};
		// return [ ...state.cards, { color: action.color, name: action.name, key: action.key } ];
		default:
			return state;
	}
};

export default card;
