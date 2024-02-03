import { useState } from "react"



function Home() { 
    const [name,setName] = useState<String>("")
    function handleName() { 
        setName("tu tu ruuuu")
    }

    return ( 
        <div>
        <h1>YURASTICO</h1>
        <span>{name}</span>
        <button type="button" onClick={handleName}>Click me!</button>
        </div>
    )
}

export { Home }