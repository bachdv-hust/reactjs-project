import { useState } from "react";
import { FloatingLabel, Form, FormControl } from "react-bootstrap";
import { AppStyle, borderWidth, cursorPointer, flexCenter, flexHori, marginStart, marginTop, padding, paddingHori, paddingVerti, radius, weightItem, width } from "../../AppStyle";
import icPetSearch from "../../asset/ic_pet_search.svg";
import Rows from "../../components/Row";


interface SearchProp {
    onInputListener: (name: string) => void
}
export default function Search(prop: SearchProp) {

    let takeDataFromSearch=()=>{
        prop.onInputListener(input);
    }

    let [input, setInput] = useState('')

    return (
        <Rows style={AppStyle(flexHori(), flexCenter(), marginTop(6))}>
            <input
            style={AppStyle(weightItem(1), radius(15), borderWidth(1), 
                paddingVerti(6), paddingHori(15))}
            type="text"
            id="header-search"
            placeholder="Tìm kiếm..." 
            value = {input}
            onInput={e => {
                let inputText = e.currentTarget.value
                setInput(inputText)
            }}
        />
            <img onClick={() => takeDataFromSearch()} style ={AppStyle(marginStart(16), cursorPointer())} src={icPetSearch} />
        </Rows>
    )
}