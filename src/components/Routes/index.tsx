import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomePage from '../../pages/HomePage'
import AlphabetPage from "../../pages/AlphabetPage"
import SyllablesPage from "../../pages/SyllablesPage"
import WordsPage from "../../pages/WordsPage"

function Routes(): JSX.Element {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/abecedario">
                    <AlphabetPage />
                </Route>
                <Route path="/silabas">
                    <SyllablesPage />
                </Route>
                <Route path="/palabras">
                    <WordsPage />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
