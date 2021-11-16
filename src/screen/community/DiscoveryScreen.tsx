import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { flexCenter } from "../../AppStyle"
import Column from "../../components/Column"
import Post from "./Post"
import Search from "./Search"


interface DiscoveryScreenProp {

}

let posts = [
    { avatarUrl: "https://cms.luatvietnam.vn/uploaded/Images/Original/2019/01/17/nuoi-cho-meo_1701125148.png", petName: "Cho 1", content: "Hải Tú và Thiều Bảo Trâm là hai mỹ nhân Việt được chú ý nhờ liên quan đến Sơn Tùng M-TP.", imgUrl: "http://vanchuyenchomeo.com/wp-content/uploads/2020/04/cho-meo-song-chung.jpg" },
    { avatarUrl: "https://cms.luatvietnam.vn/uploaded/Images/Original/2019/01/17/nuoi-cho-meo_1701125148.png", petName: "Cho 2", content: "Hải Tú và Thiều Bảo Trâm là hai mỹ nhân Việt được chú ý nhờ liên quan đến Sơn Tùng M-TP.", imgUrl: "http://vanchuyenchomeo.com/wp-content/uploads/2020/04/cho-meo-song-chung.jpg" },
    { avatarUrl: "https://cms.luatvietnam.vn/uploaded/Images/Original/2019/01/17/nuoi-cho-meo_1701125148.png", petName: "Cho 3", content: "Hải Tú và Thiều Bảo Trâm là hai mỹ nhân Việt được chú ý nhờ liên quan đến Sơn Tùng M-TP.", imgUrl: "http://vanchuyenchomeo.com/wp-content/uploads/2020/04/cho-meo-song-chung.jpg" },
    { avatarUrl: "https://cms.luatvietnam.vn/uploaded/Images/Original/2019/01/17/nuoi-cho-meo_1701125148.png", petName: "Cho 4", content: "Hải Tú và Thiều Bảo Trâm là hai mỹ nhân Việt được chú ý nhờ liên quan đến Sơn Tùng M-TP.", imgUrl: "http://vanchuyenchomeo.com/wp-content/uploads/2020/04/cho-meo-song-chung.jpg" },
    { avatarUrl: "http://icdn.dantri.com.vn/zoom/1200_630/2021/09/08/meo-crop-1631079099680.jpeg", petName: "Meo", content: "Hải Tú và Thiều Bảo Trâm là hai mỹ nhân Việt được chú ý nhờ liên quan đến Sơn Tùng M-TP.", imgUrl: "http://vanchuyenchomeo.com/wp-content/uploads/2020/04/cho-meo-song-chung.jpg" },
    { avatarUrl: "http://icdn.dantri.com.vn/zoom/1200_630/2021/09/08/meo-crop-1631079099680.jpeg", petName: "Meo 1", content: "Hải Tú và Thiều Bảo Trâm là hai mỹ nhân Việt được chú ý nhờ liên quan đến Sơn Tùng M-TP.", imgUrl: "http://vanchuyenchomeo.com/wp-content/uploads/2020/04/cho-meo-song-chung.jpg" },
    { avatarUrl: "http://icdn.dantri.com.vn/zoom/1200_630/2021/09/08/meo-crop-1631079099680.jpeg", petName: "Meo 2", content: "Hải Tú và Thiều Bảo Trâm là hai mỹ nhân Việt được chú ý nhờ liên quan đến Sơn Tùng M-TP.", imgUrl: "http://vanchuyenchomeo.com/wp-content/uploads/2020/04/cho-meo-song-chung.jpg" },
    { avatarUrl: "http://icdn.dantri.com.vn/zoom/1200_630/2021/09/08/meo-crop-1631079099680.jpeg", petName: "Meo 3", content: "Hải Tú và Thiều Bảo Trâm là hai mỹ nhân Việt được chú ý nhờ liên quan đến Sơn Tùng M-TP.", imgUrl: "http://vanchuyenchomeo.com/wp-content/uploads/2020/04/cho-meo-song-chung.jpg" },
]

export default function DiscoveryScreen(prop: DiscoveryScreenProp) {

    let [listPostFilter, setListPostFilter] = useState(posts)

    const onFilterChange = (name: string) => {
        let filter =  posts.filter( (item) => item.petName.includes(name));
        setListPostFilter(filter);
    }

    return <Column style={flexCenter()}>
        <Search onInputListener = {onFilterChange}/>
        {
            listPostFilter.map((postItem) =>
                <Post
                    petName={postItem.petName} avatarURL={postItem.avatarUrl}
                    imgURL={postItem.imgUrl} content={postItem.content}
                />
            )
        }
    </Column>
}