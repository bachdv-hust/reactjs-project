import React from 'react'

import {ChatEngine} from 'react-chat-engine'
import Column from "../../components/Column";
import Text from "../../components/Text";
import {AppStyle, flexCenterInParent, width} from "../../AppStyle";
import {ImageView} from "../../components/ImageView";
import CustomChatForm from "./CustomChatForm";
import Constants from "../../api/Constants";

const DirectChatPage = (props) => {
    return (
        <ChatEngine
            height='100vh'
            userName={props.userName}
            userSecret={props.userSecret}
            projectID={Constants.MESSENGER_PROJECT_ID}
            renderNewChatForm={(creds) => <CustomChatForm creds={creds}/>}
            renderChatHeader={() => {
            }}
            renderConnectionBar={(chat) => {
            }}
            renderScrollDownBar={(chat) => {

            }}
            renderIceBreaker={(chat) => {
                return <Column style={
                    AppStyle(
                        flexCenterInParent()
                    )
                }>
                    <ImageView style={AppStyle(
                        width(100)
                    )} src="https://cliply.co/wp-content/uploads/2021/08/472108440_HELLO_STICKER_400px.gif"/>
                    <Text>Hãy nói gì đó...</Text>
                </Column>
            }}
            offset={7}
        />
    )
}

export default DirectChatPage;
