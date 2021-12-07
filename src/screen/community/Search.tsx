import { FC, useState } from "react";
import { AppStyle, borderWidth, cursorPointer, flexCenter, flexHori, marginStart, marginTop, paddingHori, paddingVerti, radius, weightItem } from "../../AppStyle";
import icPetSearch from "../../asset/ic_pet_search.svg";
import { BaseHTMLProps } from "../../components/Props";
import Rows from "../../components/Row";


interface SearchProp extends BaseHTMLProps {
    onInputListener: (name: string) => void
}
 
const Search:FC<SearchProp> = (prop) => {
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

export default Search