export default class Constants {
	public static BASE_URL_V1 = 'https://petty-server.herokuapp.com/api/v1/'

	public static endPoint = {
		// user
		LOGIN: 'users/login',
		REGISTER: 'users/register',
		USER_DETAIL: 'users/detail',
		USERS: 'users',

		// pets
		PETS: 'pets',
		MY_PETS: 'pets/my',

	}

	public static chatEndPoint = {
		USERS: 'users',
		CHATS: 'chats/'
	}

	public static MESSENGER_PROJECT_ID = "d06a766f-700c-462b-a6a0-b4e698b90315"
	public static MESSENGER_PROJECT_PRIVATE_KEY = "e81da5ed-c0a1-4a9a-90cb-bb026bd92d08"
}
