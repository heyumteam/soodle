export const getTodayString = () => {
	return new Date().toJSON().slice(0, 10);
};
