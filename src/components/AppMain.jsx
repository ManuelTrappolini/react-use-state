

import { useState } from 'react'


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
                        <button className={active == index ? "btn2" : "btn"} onClick={handleClick} key={index} data-index={index}>{language.title}</button>
                    )
                    )}
                    {languages.map((language, index) => (
                        <div className={active == index ? "card" : "hide"}>
                            <h3 className="card-title">{language.title}</h3>
                            <div className="card-description">{language.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </main >
    )
}