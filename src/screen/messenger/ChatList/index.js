import React, {useContext} from 'react'

import {ChatEngineContext, getOrCreateChat} from 'react-chat-engine'

import ChatLink from './ChatLink'
import ChatGroup from './ChatGroup'
import {useNavigate} from "react-router-dom";
import {AppCtx} from "../../../App";
import Rows from "../../../components/Row";
import {ImageView} from "../../../components/ImageView";
import {AppStyle, circleImage, padding} from "../../../AppStyle";
import {ArrowBack} from "@mui/icons-material";
import ButtonView from "../../../components/ButtonView";
let styles = require('../styles.json');

const ChatList = props => {
    const {setActiveChat} = useContext(ChatEngineContext)
    const navigate = useNavigate()
    const {currentUser} = useContext(AppCtx)

    function hasReadLastMessage(chat) {
        let lastReadMessageID = -1;
        chat.people.foreach(chat_person => {
            if (chat_person.person.username === props.userName) {
                lastReadMessageID = chat_person.last_read
            }
        })
        return !chat.last_message.id || lastReadMessageID === chat.last_message.id
    }

    function renderChannels() {
        const chatList = props.chats ? Object.values(props.chats) : []
        return chatList.map((chat, index) => {
            try {
                if (!chat.is_direct_chat) {
                    return (<ChatLink
                        key={`chat-${index}`}
                        title={`# ${chat.title}`}
                        bold={!hasReadLastMessage(chat)}
                        onClick={() => setActiveChat(chat.id)}
                    />)
                } else {
                    return <div key={`chat-${index}`}/>
                }
            } catch (e) {
                return <div key={`chat-${index}`}/>
            }
        })
    }

    function returnNotMe(chat) {
        let username = ''
        chat.people.foreach(chat_person => {
            if (chat_person.person.username !== props.userName) {
                username = chat_person.person.username
            }
        })
        return username
    }

    function renderDirectMessages() {
        const chatList = props.chats ? Object.values(props.chats) : []
        return chatList.map((chat, index) => {
            try {
                if (chat.is_direct_chat) {
                    console.log('render')
                    return (<ChatLink
                        key={`chat-${index}`}
                        title={`${returnNotMe(chat)}`}
                        bold={!hasReadLastMessage(chat)}
                        onClick={() => setActiveChat(chat.id)}
                    />)
                } else {
                    console.log('not render')
                    return <div key={`chat-${index}`}/>
                }
            } catch (e) {
                console.log('not render')
                return <div key={`chat-${index}`}/>
            }
        })
    }

    function onChannelCreate(data) {
        const chat = {title: data.value}
        getOrCreateChat(props, chat, r => console.log('New Channel', r))
    }


    function onDirectMessageCreate(data) {
        const chat = {
            is_direct_chat: true, usernames: [data.value, props.userName]
        }
        getOrCreateChat(props, chat, r => console.log('New DM', r))
    }

    return (<div style={styles.chatList}>



        {/*<div style={styles.titleContainer}>*/}
        {/*    <ChatGroup*/}
        {/*        title='Nhóm chat'*/}
        {/*        placeholder='Tạo nhóm'*/}
        {/*        onSubmit={(data) => onChannelCreate(data)}*/}
        {/*    />*/}
        {/*</div>*/}

        {/*<div style={styles.chatsContainer}>*/}
        {/*    {renderChannels()}*/}
        {/*</div>*/}

        <div style={styles.titleContainer}>
            <ChatGroup
                title='Tin nhắn trực tiếp'
                placeholder='Nhập tên người cần gửi tin'
                onSubmit={(data) => onDirectMessageCreate(data)}
            />
        </div>

        <div style={styles.chatsContainer}>
            {renderDirectMessages()}
        </div>
    </div>);
}

export default ChatList;