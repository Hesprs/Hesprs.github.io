const listeners = new Map();

const state = {
	language: null,
	page: null,
};

export default function store() {
	return {
		modify: (field, value) => {
			if (state[field] === value) return;
			state[field] = value;
			const listenerSet = listeners.get(field);
			if (listenerSet) for (let listener of listenerSet) listener(value);
		},
		subscribe: (field, listener) => {
			if (!listeners.has(field)) listeners.set(field, new Set());
			listeners.get(field).add(listener);
			return () => {
				const set = listeners.get(field);
				set?.delete(listener);
				if (set?.size === 0) listeners.delete(field);
			};
		},
		getState: field => state[field],
	};
}
