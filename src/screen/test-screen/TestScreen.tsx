import { FC } from "react"

import Column from "../../components/Column";
import TextView from "../../components/Text";
import { createStore } from "redux";
import ButtonView from "../../components/ButtonView";
import { ImageView } from "../../components/ImageView";
import { AppStyle, background } from "../../AppStyle";
import Rows from "../../components/Row";

interface TestScreenProp {

}

function counterReducer(state = { value: 0 }, action: any) {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    }
}

let store = createStore(counterReducer)

const TestScreen: FC<TestScreenProp> = (props) => {
    return <Rows>
    <TextView>OK</TextView>
    <TextView>O2</TextView>
    </Rows>
}

// function merge(...args: any[]) {
//     let filteredArgs = args.filter(item => item !== undefined && item !== null)
//     let res = 
// }

export default TestScreen
