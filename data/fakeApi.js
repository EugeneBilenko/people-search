import users from './users';

export default function fakeApi() {
	return Promise.resolve(users);
}
