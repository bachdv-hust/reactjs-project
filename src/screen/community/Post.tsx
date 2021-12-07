import { Card, Image } from "react-bootstrap";
import { AppStyle, background, borderWidth, flexCenter, flexCenterInParent, flexHori, height, marginEnd, marginTop, marginVertical, radius, semiBold, shadow, weightItem, width } from "../../AppStyle";
import { Colors } from "../../AppColor";
import TextView from "../../components/Text";
import Rows from "../../components/Row";
import Column from "../../components/Column";
import MessengerScreen from "../messenger/MessengerScreen";


interface PostProp {
    petName: string,
    content: string,
    avatarURL: string,
    imgURL: string
}

export default function Post(props: PostProp) {


    const messageHandler = () => {
        return <MessengerScreen name = {props.petName}/>

    }
    return <Card style={AppStyle(marginVertical(20), radius(8), shadow(2))}>
        <Card.Body>
            <Header avatarUrl={props.avatarURL} petName={props.petName} />

            <Card.Text style={AppStyle(marginTop(12))}>
                {props.content}
            </Card.Text>
        </Card.Body>

        <Card.Img variant="top" src={props.imgURL} />

        <Card.Body>

            <Column>
                <hr style={marginVertical(12)} />
                <Rows >
                    <Reaction name={"Like"} />
                    <Reaction name={"Comment"} />
                    <button onClick = {messageHandler}>Message</button>
                </Rows>
                <hr style={marginVertical(12)} />
            </Column>

        </Card.Body>
    </Card>
}

interface HeaderProp {
    avatarUrl: string,
    petName: string
}

function Header(props: HeaderProp) {
    return (
        <div style={AppStyle(flexHori(), flexCenter())}>
            <Image src={props.avatarUrl} style={AppStyle(width(41), height(41), marginEnd(12))} roundedCircle />
            <TextView style={AppStyle(semiBold(20))}>{props.petName}</TextView>
        </div>
    )
}

interface ReactionProp {
    name: string
}

function Reaction(props: ReactionProp) {
    return (
        <button style={AppStyle(weightItem(1), borderWidth(0), flexHori(), flexCenterInParent(),
            background(Colors.color_white))}>
            <TextView style={AppStyle(semiBold(15))}>{props.name}</TextView>
        </button>
    )
}