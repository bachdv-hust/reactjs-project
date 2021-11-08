import { AppStyle, background, border, borderWidth, cursorPointer, fitContain, flexCenter, flexCenterInParent, flexHori, flexVerti, height, marginBottom, marginEnd, paddingBottom, paddingHori, paddingStart, paddingTop, paddingVerti, radius, regular, textColor, width } from "../../AppStyle";

export default function LoginScreen(){
    return <div style={AppStyle(flexHori(), flexCenterInParent(),
         height("100%"),background("linear-gradient(180deg, #00C181 0%, #1F00C181 100%)"))}>
        <div style={AppStyle(flexVerti(), flexCenterInParent() )}>
            <h1> Dung </h1>
            <div > 
                <LoginButton imgLink= "https://weeboo.vn/icons/login/icon-facebook.svg" text = "Đăng nhập bằng Facebook" backgroundColor="rgb(51 87 149)" 
                textColor="#FFFFFF"/>
                <LoginButton textColor="#000000" imgLink= "https://weeboo.vn/icons/login/icon-google.svg" text = "Đăng nhập bằng Google" backgroundColor="#FFFFFF"/>
            </div>

        </div>

    </div>
}


function LoginButton(props) {
    return <button
    style={AppStyle( cursorPointer(), flexHori(), marginBottom(20), width(300),
    paddingVerti(12), flexCenterInParent(), radius(24), borderWidth(0), background(props.backgroundColor))}>
        <img src={props.imgLink} style={AppStyle(width(24), height(24), marginEnd(10))}/>
        <span style={AppStyle(regular(15), textColor(props.textColor))}>{props.text}</span>
        </button>
}