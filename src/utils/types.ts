export interface PageProps {
	posts: Post[];
}

export interface Post {
	id: string;
	title: string;
	content: string;
	featuredImage: string;
	author: Author;
	tags: Tag[];
}

export interface Author {
	id: string;
	firstName: string;
	lastName: string;
	picture?: string;
}

export interface Tag {
	name: string;
}

export interface PostCardProps {
	id: string;
	title: string;
	text?: string;
	image: string;
	authorName: string;
	postSlider?: boolean;
	tags?: Tag[];
}
