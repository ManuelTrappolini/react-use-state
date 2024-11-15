
import Button from "./Button/Button"

import Card from "./Card/Card"

import languages from "../data/languages"
export default function AppMain() {

    return (

        <main>
            <div className="container">
                <div>
                    {languages.map((language, index) => <Button key={index} data={language} />)}

                    {languages.map((language, index) => <Card key={index} data={language} />)}
                </div>
            </div>
        </main>
    )
}