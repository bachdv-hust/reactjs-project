import { FC } from "react";
import { AppStyle, border, borderWidth, circleImage, flexCenter, margin, marginHori, marginTop, maxHeight, padding, radius, regular, semiBold, shadow, textColor, weightItem, width } from "../../AppStyle";
import Column from "../../components/Column";
import { ButtonImageView, ImageView } from "../../components/ImageView";
import Rows from "../../components/Row";
import TextView from "../../components/Text";

import icMessageToOwner from '../../asset/ic_message_to_owner.svg'
import { Colors } from "../../AppColor";
import { BaseHTMLProps } from "../../components/Props";
import { useParams } from "react-router";

interface PetDetailProp {

}

let url = "https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-1/c2.0.200.200a/p200x200/130964762_392060608574289_6546021595526449829_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=IabFv6HIca0AX-pnc6q&_nc_ht=scontent.fhan5-2.fna&oh=fe9ebedd3073fde113ec7b7f1e06500f&oe=61CA56A0"
let name = "Binz"
let petAvatar = "https://upload.wikimedia.org/wikipedia/commons/5/58/Shiba_inu_taiki.jpg"
interface HeaderProps {

}
const Header: FC<HeaderProps> = (props) => {
    return <Column style={AppStyle(flexCenter())}>
        <ImageView style={AppStyle(width('100%'), maxHeight(300), radius(8))} src={petAvatar} />
        <Rows >

            <Column style={AppStyle(marginTop(-100), flexCenter())}>
                <ImageView style={AppStyle(circleImage(200))} src={petAvatar} />
                <TextView style={semiBold(20)}>Binz The Love</TextView>
            </Column>
        </Rows>
    </Column>

}

const PetDetail: FC<PetDetailProp> = () => {
    const params = useParams()

    return <Column style={AppStyle(border(Colors.color_E5E5E5))}>
        <Header />
        <Rows>
            <InfoBox>
                <Column>
                    <TextView style={AppStyle(regular(12), textColor(Colors.color_8A8A8F))}>Ngày sinh</TextView>
                    <TextView style={AppStyle(semiBold(14))}>13/09/2019</TextView>
                </Column>
            </InfoBox>

            <InfoBox>
                <Column>
                    <TextView style={AppStyle(regular(12), textColor(Colors.color_8A8A8F))}>Bộ tộc</TextView>
                    <TextView style={AppStyle(semiBold(14))}>Chó Samoyed</TextView>
                </Column>
            </InfoBox>
        </Rows>

        <Rows>
            <InfoBox>
                <Column>
                    <TextView style={AppStyle(regular(12), textColor(Colors.color_8A8A8F))}>Nguồn gốc</TextView>
                    <TextView style={AppStyle(semiBold(14))}>Liên Bang Nga</TextView>
                </Column>
            </InfoBox>

            <InfoBox>
                <Column>
                    <TextView style={AppStyle(regular(12), textColor(Colors.color_8A8A8F))}>Quê quán</TextView>
                    <TextView style={AppStyle(semiBold(14))}>Hồ Chí Minh</TextView>
                </Column>
            </InfoBox>
        </Rows>

        <InfoBox>
            <Column>
                <TextView style={AppStyle(regular(12), textColor(Colors.color_8A8A8F))}>Nơi cư trú</TextView>
                <TextView style={AppStyle(semiBold(14))}>Vinhomes Smart City, Tây Mỗ Đại Mỗ, Tây Mỗ, Từ Liêm, Hà Nội</TextView>
            </Column>
        </InfoBox>


        <InfoBox>
            <Column>
                <TextView style={AppStyle(regular(12), textColor(Colors.color_8A8A8F))}>Pet ID</TextView>
                <TextView style={AppStyle(semiBold(14), textColor(Colors.color_primary))}>Hello {params.petId}</TextView>
            </Column>
        </InfoBox>
        <ContactBox user={new User()} />
    </Column>
}

class User {
    id = 1
    name = "Ronaldo"
    avatar = url
}

interface ContactBoxProp extends BaseHTMLProps {
    user: User
}

const ContactBox: FC<ContactBoxProp> = (props) => {
    return <Rows style={AppStyle(margin(16))}>
        <ImageView src={props.user.avatar} style={AppStyle(circleImage(36))} />
        <Column style={AppStyle(weightItem(1), marginHori(16))}>
            <TextView style={regular(13)}>Liên hệ với Chủ</TextView>
            <TextView style={semiBold(15)}>{props.user.name}</TextView>
        </Column>
        <ButtonImageView src={icMessageToOwner}
            onClick={() => {
                console.log("Click")
            }
            }
        />

    </Rows>
}



const InfoBox: FC<BaseHTMLProps> = (props) => {
    return <div style={AppStyle(weightItem(1), margin(12), radius(8), borderWidth(1), border(Colors.color_E5E5E5), padding(12), shadow(8))}>
        {props.children}
    </div>
}

export default PetDetail