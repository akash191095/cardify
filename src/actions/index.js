export const addCard = (color, name, key) => {
	return {
		type: 'ADD_CARD',
		payload: { color, name, key }
	};
};
