const initState = {
	posts: [
		{ id: '1', title: 'Charmander Sneaked in on Squirtle', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos alias dolore provident facere placeat porro! Iste tempore quam rem eius, non vero numquam reprehenderit, natus ex explicabo laborum animi officia?' },
		{ id: '2', title: 'Squirtle Laid an Egg', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos alias dolore provident facere placeat porro! Iste tempore quam rem eius, non vero numquam reprehenderit, natus ex explicabo laborum animi officia?' },
		{ id: '3', title: 'Helix Fossil Found!', body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos alias dolore provident facere placeat porro! Iste tempore quam rem eius, non vero numquam reprehenderit, natus ex explicabo laborum animi officia?' }
	]
}

const rootReducer = (state = initState, action) => {
	return state;
}

export default rootReducer