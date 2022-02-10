export interface SingleMessage {
	id: number,
	sender: MessageUser,
	created: string,
	text: string,
	attachments: any[],
	sender_username: string
}

export interface MessageUser {
	username: string,
	first_name: string,
	last_name: string,
	avatar: string,
	is_online: boolean,
}

export interface ChatCard {
	id: string,
	title: string,
	admin: MessageUser,
	people: MessageUser[],
	last_message: SingleMessage | undefined,
	is_direct_chat: boolean,
	access_key: string,
	is_authenticated: boolean,
	created: string
}

