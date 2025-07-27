import type { Book } from '../types';

const API_BASE_URL = 'http://localhost:8000';

export async function fetchBooks(): Promise<Book[]> {
	try {
		const response = await fetch(`${API_BASE_URL}/api/books`);
		if (!response.ok) {
			throw new Error('Failed to fetch books');
		}
		return await response.json();
	} catch (error) {
		console.error('Error fetching books:', error);
		throw error;
	}
}

export async function loginUser(email: string, password: string): Promise<any> {
	// TODO: Implement actual login API call
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ success: true, user: { email, name: 'John Doe' } });
		}, 1000);
	});
}

export async function signupUser(data: { firstName: string; lastName: string; email: string; password: string }): Promise<any> {
	// TODO: Implement actual signup API call
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({ success: true, user: { email: data.email, name: `${data.firstName} ${data.lastName}` } });
		}, 1000);
	});
} 