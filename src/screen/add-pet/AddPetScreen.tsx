import { FC, useState } from "react";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { Colors } from "../../AppColor";
import { AppStyle, border, borderWidth, cursorPointer, flexCenterInParent, flexShrink, height, margin, marginEnd, marginHori, marginVertical, padding, radius, regular, semiBold, setOverFlowX, shadow, textColor, weightItem, width } from "../../AppStyle";
import ButtonView from "../../components/ButtonView";
import Column from "../../components/Column";
import Rows from "../../components/Row";
import TextView from "../../components/Text";
import AddImage from "./AddImage";




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
            <InfoInputFromKeyBoard isNecessary={true} title={"Tên Boss"} />
            <InfoInputDropDown isNecessary={true} title={"Giới tính"} listOption={genderOptions} />
            <InfoInputDropDown isNecessary={true} title={"Loài"} listOption={typeOptions} />
            <InfoInputDropDown isNecessary={true} title={"Bộ tộc"} listOption={botocOptions} />
            <InfoInputDropDown isNecessary={true} title={"Nguồn gốc"} listOption={fromOptions} />
            <InfoInputDropDown isNecessary={false} title={"Tình trạng"} listOption={statusOptions} />
            <TextView style={AppStyle(semiBold(17))}>NƠI Ở HIỆN TẠI</TextView>

            <InfoInputFromKeyBoard isNecessary={false} title={"Số nhà, đường/phố"} />
        </Column>
    </Column>
}

function AddPetHeader() {
    return <Rows style={margin(16)}>
        <TextView style={AppStyle(semiBold(17), weightItem(1))}>Báo danh Boss</TextView>
        <ButtonView>
            <TextView style={AppStyle(semiBold(17), textColor(Colors.color_primary))}>Lưu</TextView>
        </ButtonView>
    </Rows>
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
    let [inputValue, setValue] = useState('')
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
        } style={AppStyle(borderWidth(0), border('none'))} />
    </Column>
}