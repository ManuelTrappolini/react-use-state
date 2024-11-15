
import Button from "./Button/Button"
import { useState } from 'react'
import Card from "./Card/Card"

import languages from "../data/languages"
export default function AppMain() {

    const [active, setActive] = useState(0)

    function handleClick(e) {
        console.log(e.target);
        const newActive = Number(e.target.getAttribute('data-index'))
        setActive(newActive)
    }

    return (

        <main>
            <div className="container">
                <div>
                    {languages.map((language, index) => (
                        <button className="btn" onClick={handleClick} key={index} data-index={index}>{language.title}</button>
                    )
                    )}
                    {languages.map((language, index) => (
                        <div className={active == index ? "card" : "hide"}>
                            <div className="card-title">{language.title}</div>
                            <div className="card-description">{language.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main >
    )
}