import { FC, useEffect, useState } from "react"

import Column from "../../components/Column";
import Rows from "../../components/Row";
import TextView from "../../components/Text";
import { createStore } from "redux";

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

    // useEffect(() => {

    //     let storeListener = store.subscribe( () => {
    //         console.log(store.getState())
    //     })

    //     return () => {
    //         storeListener()
    //     }
    // }, [])

    let storeListener = store.subscribe( () => {
        console.log(store.getState())
    })

    
    return <Column>
        <TextView>Test</TextView>
        <button onClick={
            () => {
                store.dispatch({
                    type : "counter/incremented"
                })
            }
        }>+1</button>

        <button onClick={
            () => {
                store.dispatch({
                    type : "counter/decremented"
                })
            }
        }>-1</button>
    </Column>
}

export default TestScreen
