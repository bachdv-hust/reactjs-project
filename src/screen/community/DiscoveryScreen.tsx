import { Col, Container, Row } from "react-bootstrap"
import { flexCenter } from "../../AppStyle"
import Column from "../../components/Column"
import Post from "./Post"


interface DiscoveryScreenProp {

}

let posts = [
    { avatarUrl: "https://thuthuattienich.com/wp-content/uploads/2017/06/anh-dai-dien-facebook-cho-meo-de-thuong-1.jpg", petName: "Micky", content: " Hẹn cùng em đi đến hết cuộc đời ", imgUrl: "https://icapi.org/wp-content/uploads/2019/11/anh-dep-bau-troi-13-4.jpg" },
    { avatarUrl: "https://thuthuattienich.com/wp-content/uploads/2017/06/anh-dai-dien-facebook-cho-meo-de-thuong-1.jpg", petName: "John", content: " Hẹn cùng em đi đến hết cuộc đời ", imgUrl: "https://icapi.org/wp-content/uploads/2019/11/anh-dep-bau-troi-13-4.jpg" },
    { avatarUrl: "https://thuthuattienich.com/wp-content/uploads/2017/06/anh-dai-dien-facebook-cho-meo-de-thuong-1.jpg", petName: "Jesus", content: " Hẹn cùng em đi đến hết cuộc đời ", imgUrl: "https://icapi.org/wp-content/uploads/2019/11/anh-dep-bau-troi-13-4.jpg" },
]

export default function DiscoveryScreen(prop: DiscoveryScreenProp) {
    return <Column style={flexCenter()}>
        {
            posts.map((postItem) =>
                <Post
                    petName={postItem.petName} avatarURL={postItem.avatarUrl}
                    imgURL={postItem.imgUrl} content={postItem.content}
                />
            )
        }
    </Column>
}