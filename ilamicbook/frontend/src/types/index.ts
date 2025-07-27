export interface Book {
	id: number;
	title: string;
	author: string;
	description: string;
}

export interface User {
	name: string;
	email: string;
	avatar: string;
}

export interface AuthData {
	firstName?: string;
	lastName?: string;
	email: string;
	password: string;
} 