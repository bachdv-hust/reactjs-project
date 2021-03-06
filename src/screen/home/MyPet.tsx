import { AppStyle, background, border, flexCenter, flexHori, flexVerti, height, margin, marginHori, marginStart, marginTop, padding, paddingEnd, paddingStart, paddingVerti, radius, regular, semiBold, setOverFlowX, shadow, textColor, textWeight, weightItem, width } from '../../AppStyle'

import maleLogo from '../../asset/ic_male.svg' 
import femaleLogo from '../../asset/ic_female.svg' 
import ic_add from '../../asset/ic_add.png' 
import { FC, useState } from 'react'
import { useNavigate } from 'react-router'
import Pet from '../../models/Pet'

import { BaseHTMLProps } from '../../components/Props';

export default function MyPet() {
    const [pets, setPets] = useState<Pet[]>([]);

    let navigate = useNavigate()
    const addPet = () => {
        navigate('../add-pet')
    }

    return <div style={AppStyle(margin(0), padding(0))}>
        <div style={AppStyle(flexHori(), flexCenter())}>
            <p style={AppStyle(weightItem(1), textWeight(700))}>Pet của tui ({pets.length})</p>
            <p style={AppStyle(textColor('#00C181'))}>Xem tất cả</p>
        </div>

        <div style={AppStyle(flexHori(), margin(0), setOverFlowX())}>
            {
                pets.map(function (pet) { return <MyPetItem onClick={()=>{}} name={pet.name} age={pet.age} img={pet.avatar} gender={pet.gender} /> })
            }
            <CreatePetButton  eventClick={addPet}/>
        </div>

    </div>
}

interface MyPetItemProps extends BaseHTMLProps{
    gender: string
    img: string
    name: string
    age: string
}

const MyPetItem: FC<MyPetItemProps> = (props) => {
    let genderImg;
    if (props.gender === "male") {
        genderImg = maleLogo
    } else {
        genderImg = femaleLogo
    }

    const navigate = useNavigate()

    return <div onClick={
        () => navigate('../pet-detail/1')
    } style={AppStyle(flexHori(), marginHori(6), paddingVerti(16), paddingStart(16), paddingEnd(54), flexCenter(), border("#EEEFF4"),
        radius(8), shadow(8))}>
        <img style={AppStyle(
            width(42), height(42), radius(21), background('#000000')
        )} src={props.img}></img>

        <div style={AppStyle(flexVerti(), marginStart(12))}>
            <div style={AppStyle(flexHori(), margin(0))}>
                <p style={AppStyle(margin(0), semiBold(14))}>{props.name}</p>
                <img style={AppStyle(marginStart(3), width(18), height(18))} src={genderImg}></img>
            </div>
            <p style={AppStyle(marginTop(2), regular(12), textColor('#969BAB'))}>{props.age}</p>
        </div>
    </div>
}

interface CreatePetButtonProps{
    eventClick: () => void
}

const CreatePetButton: FC<CreatePetButtonProps> = (props) => {
        return <div onClick={props.eventClick} style={AppStyle(flexHori(), padding(16), flexCenter(), border("#EEEFF4"), radius(8), shadow())}>
            <img style={AppStyle(
                width(42), height(42), radius(21)
            )} src={ic_add}></img>

            <div style={AppStyle(flexVerti(), marginStart(12))}>
                <div style={AppStyle(marginTop(2), semiBold(14), textColor('#969BAB'))}>
                    <p>Thêm mới Pet</p>
                </div>
            </div>
        </div>

}