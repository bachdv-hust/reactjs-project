interface User {
	id: string
	name: string
	avatar: string
	pwd: string
	email: string
	createdAt: string
	updatedAt: string
	phone: string
}

let fakeAvatarUrls = [
	"https://i.scdn.co/image/78d984cb018f355126c426306677ce3fc5711593",
	"https://media-cdn.laodong.vn/storage/newsportal/2019/11/10/765130/Son-Tung-Mtp.jpg?w=720&crop=auto&scale=both",
	"https://store-images.s-microsoft.com/image/apps.28411.13510798887593857.411c7070-8254-4bc7-9822-93212e9b3eaa.d5650289-0ad1-4560-ac30-38a18a1847bb?mode=scale&q=90&h=200&w=200&background=%230078D7"
]

function getRandomString(length: number) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}

const textLorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export default User
export {
	getRandomString,
	textLorem,
	fakeAvatarUrls
}
