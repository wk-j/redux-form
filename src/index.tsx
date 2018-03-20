import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { combineReducers, createStore } from "redux"
import { reducer as reduxFormReducer } from "redux-form"
import { MySimpleForm } from "./SimpleForm";

const dest = document.getElementById("root")

const reducer = combineReducers({
    form: reduxFormReducer
})

const showResults = values => {
    console.log(values)
}

const store = createStore(reducer)

class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <MySimpleForm onSubmit={showResults} />
            </Provider>
        );
    }
}

const el = document.getElementById("root")
ReactDOM.render(<App />, el)
