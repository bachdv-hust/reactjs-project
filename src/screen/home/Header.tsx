import { AppStyle, background, bold, circleImage, fitContain, flexCenter, flexHori, flexVerti, height, margin, marginEnd, marginHori, marginStart, marginVertical, paddingBottom, paddingTop, radius, regular, shadow, textColor, weightItem, width } from "../../AppStyle"

import icScan from '../../asset/ic_qr_scan.png'
import icAddFriend from '../../asset/ic_add_friend.png'
import icPetAdd from '../../asset/ic_pet_add.png'
import icPetCard from '../../asset/ic_pet_card.png'
import icCoin from '../../asset/ic_coin.svg'
import bgHome from '../../asset/bg_home.png'



export default function Header(){
    return <div style={AppStyle({ backgroundImage: `url(${bgHome})` }, paddingBottom(20))}>
        <div style={AppStyle(flexHori(), flexCenter(), marginHori(15))}>
            <img style={AppStyle(circleImage(42))} src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2018/05/05/5/6/0/3/1525531851818_600.jpg"/>
            <div style={AppStyle(flexVerti(), weightItem(1), marginStart(15))}>
                <p style={AppStyle(margin(0), bold(15), textColor("#007B52"))}>Quynh Kem</p>
                <p style={AppStyle(margin(0), regular(13), textColor("#474A57"))}>Thong tin tai khoan chu</p>
            </div>
            <div style={AppStyle(flexHori())}>
                <img style ={AppStyle(width(20), height(20), marginEnd(4))}src={icCoin}/>
                <p style={AppStyle(margin(0), bold(13), textColor("#00C181"))}> 780.2</p>
            </div>
            
        </div>
        <div style={AppStyle(flexHori(), background("#FFFFFF"),
         radius(12), shadow(30), marginHori(15), marginVertical(21), paddingTop(20))}>
        <div style={AppStyle(weightItem(1), flexVerti(), flexCenter())}>
            <img style={AppStyle(width(32), height(32), fitContain())} 
            src={icScan}/>
            <p>Quet QR</p>
        </div>   
        <div style={AppStyle(weightItem(1),flexVerti(), flexCenter())}>
            <img style={AppStyle(width(32), height(32), fitContain())} src={icPetAdd}/>
            <p>Them Pet</p>
        </div>   
        <div style={AppStyle(weightItem(1),flexVerti(), flexCenter())}>
            <img style={AppStyle(width(32), height(32), fitContain())} src={icPetCard}/>
            <p>The Pet</p>
        </div>   
        <div style={AppStyle(weightItem(1),flexVerti(), flexCenter())}>
            <img style={AppStyle(width(32), height(32), fitContain())} src={icAddFriend}/>
            <p>Moi ban be</p>
        </div>   
         </div>

    </div>
}