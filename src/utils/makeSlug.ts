const makeSlug = (str: string) => {
	const first4Words = str.split(' ').join('-');
	return first4Words.toLowerCase();
};

export default makeSlug;
