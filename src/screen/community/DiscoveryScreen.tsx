import { Col, Container, Row } from "react-bootstrap"
import { flexCenter } from "../../AppStyle"
import Column from "../../components/Column"
import Post from "./Post"


interface DiscoveryScreenProp {

}

let posts = [
    { avatarUrl: "https://cuoifly.tuoitre.vn/820/0/ttc/r/2021/01/22/hai-tu-1611284734.jpg", petName: "Hai Tu", content: "Hải Tú và Thiều Bảo Trâm là hai mỹ nhân Việt được chú ý nhờ liên quan đến Sơn Tùng M-TP.", imgUrl: "https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/dinhcuc/2020_12_21/tu/do-ve-goi-cam-hai-tu-va-ban-gai-tin-don-cua-son-tung.jpg" },
    { avatarUrl: "https://cuoifly.tuoitre.vn/820/0/ttc/r/2021/01/22/hai-tu-1611284734.jpg", petName: "Hai Tu 1", content: "Hải Tú và Thiều Bảo Trâm là hai mỹ nhân Việt được chú ý nhờ liên quan đến Sơn Tùng M-TP.", imgUrl: "https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/dinhcuc/2020_12_21/tu/do-ve-goi-cam-hai-tu-va-ban-gai-tin-don-cua-son-tung.jpg" },
    { avatarUrl: "https://cuoifly.tuoitre.vn/820/0/ttc/r/2021/01/22/hai-tu-1611284734.jpg", petName: "Hai Tu 2", content: "Hải Tú và Thiều Bảo Trâm là hai mỹ nhân Việt được chú ý nhờ liên quan đến Sơn Tùng M-TP.", imgUrl: "https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/dinhcuc/2020_12_21/tu/do-ve-goi-cam-hai-tu-va-ban-gai-tin-don-cua-son-tung.jpg" },
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