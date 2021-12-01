import { FC, useEffect, useState } from "react";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { Colors } from "../../AppColor";
import { AppStyle, background, border, borderWidth, cursorPointer, flexCenterInParent, height, margin, marginEnd, marginHori, marginVertical, padding, radius, regular, semiBold, setOverFlowX, setOverFlowY, shadow, textColor, weightItem, width } from "../../AppStyle";
import Column from "../../components/Column";
import { ButtonImageView, ImageView } from "../../components/ImageView";
import Rows from "../../components/Row";
import TextView from "../../components/Text";

import icCancle from '../../asset/ic_cancle.svg'

let genderOptions = ["Đực", "Cái", "Không xác định"]
let typeOptions = ["Dog", "Cat", "Fish"]
let botocOptions = ["SNSD", "BTS", "BIGBANG"]
let fromOptions = ["VN", "USD"]
let statusOptions = ["Triệt sản", "No Triệt sản"]

const AddPetScreen: FC = () => {
    return <Column>
        <AddPetHeader />

        <AddImage />

        <Column style={AppStyle(marginHori(16))}>
            <TextView style={AppStyle(semiBold(17))}>THÔNG TIN CHUNG</TextView>
            <InfoInputFromKeyBoard isNecessary={true} title={"Tên Boss"}/>
            <InfoInputDropDown isNecessary={true} title={"Giới tính"} listOption={genderOptions} />
            <InfoInputDropDown isNecessary={true} title={"Loài"} listOption={typeOptions} />
            <InfoInputDropDown isNecessary={true} title={"Bộ tộc"} listOption={botocOptions} />
            <InfoInputDropDown isNecessary={true} title={"Nguồn gốc"} listOption={fromOptions} />
            <InfoInputDropDown isNecessary={false} title={"Tình trạng"} listOption={statusOptions} />
            <TextView style={AppStyle(semiBold(17))}>NƠI Ở HIỆN TẠI</TextView>

            <InfoInputFromKeyBoard isNecessary={false} title={"Số nhà, đường/phố"}/>
        </Column>
    </Column>
}

function AddPetHeader() {
    return <Rows style={margin(16)}>
        <TextView style={AppStyle(semiBold(17), weightItem(1))}>Báo danh Boss</TextView>
        <TextView style={AppStyle(semiBold(17), textColor(Colors.color_primary))}>Lưu</TextView>
    </Rows>
}

let imgDemo = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg"

function AddImage() {
    let [listImage, setListImage] = useState<string[]>([])

    return <Rows style={AppStyle(setOverFlowX())}>
        <AddImageItem onClick={() => {
            let newList = [...listImage]
            newList.push(imgDemo)
            setListImage(newList)
        }} />

        {
            listImage.map((item, index) =>
                <ImageItem position={0} item={imgDemo} onItemDelete={() => {
                    let _newList = [...listImage]
                    _newList.splice(index, 1)
                    setListImage(_newList)
                }} />
            )
        }


    </Rows>

}

interface AddImageItem {
    onClick: () => void
}

const AddImageItem: FC<AddImageItem> = (props) => {
    return <Column
        onClick={() => {
            props.onClick()
        }}
        style={AppStyle(width(150), cursorPointer(), height(200), radius(8), border(Colors.color_8A8A8F), borderWidth(1), margin(12), flexCenterInParent())}>
        <TextView>Thêm ảnh</TextView>
    </Column>
}


interface ImageItemProps {
    item: string,
    position: number,
    onItemDelete: (position: number) => void
}

const ImageItem: FC<ImageItemProps> = (props) => {
    return <Column style={AppStyle(width(150), height(200), radius(8), margin(12), borderWidth(1))}>
        <ButtonImageView src={icCancle} onClick={() => props.onItemDelete(props.position)} />
        <ImageView style={AppStyle(width(150), height(200))} src={props.item} />
    </Column>
}

export default AddPetScreen


interface InfoInputDropDownProps<T> {
    isNecessary: boolean
    listOption: T[]
    title: string
}

const InfoInputDropDown: FC<InfoInputDropDownProps<string>> = (props) => {
    let [value, setValue] = useState<string>('')

    return <Rows style={AppStyle(borderWidth(1), shadow(8), border(Colors.color_E5E5E5), padding(8), marginVertical(12), radius(8))}>
        <Column style={weightItem(1)}>
            <Rows>
                <TextView style={AppStyle(textColor(Colors.color_8A8A8F), regular(12), marginEnd(8))}>{props.title}</TextView>
                {props.isNecessary === true && <TextView style={textColor('red')}>*</TextView>}
            </Rows>
            <TextView>{value}</TextView>
        </Column>
        <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle split id="dropdown-split-basic" />

            <Dropdown.Menu>
                {
                    props.listOption.map((item) =>
                        <Dropdown.Item
                            onClick={() => {
                                setValue(item)
                            }}>{item}</Dropdown.Item>
                    )
                }
            </Dropdown.Menu>
        </Dropdown>
    </Rows>
}

interface InfoInputProps {
    isNecessary: boolean
    title: string
}

const InfoInputFromKeyBoard: FC<InfoInputProps> = (props) => {
    let [inputValue, setValue]  = useState('')
    return <Column
            style={AppStyle(borderWidth(1), shadow(8), border(Colors.color_E5E5E5), padding(8), marginVertical(12), radius(8))}
        >
        <Rows>
            <TextView style={AppStyle(textColor(Colors.color_8A8A8F), regular(12))}>{props.title}</TextView>
            {props.isNecessary === true && <TextView style={textColor('red')}>*</TextView>}
        </Rows>

        <input value={inputValue} onChange={
            (event) => {
                setValue(event.target.value)
            }
        } style={AppStyle(borderWidth(0), border('none'))}/>
    </Column>
}