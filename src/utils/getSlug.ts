const getIdFromSlug = (str: string | any) => {
	const splitStr = str.split('-');
	const id = splitStr[splitStr.length - 1];
	return id;
};

export default getIdFromSlug;
