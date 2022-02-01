const makeSlug = (str: string) => {
	const first4Words = str.split(' ').slice(0, 4).join('-');
	return first4Words.toLowerCase();
};

export default makeSlug;
