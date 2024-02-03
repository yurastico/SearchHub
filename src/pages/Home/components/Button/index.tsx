import { memo } from "react"

interface ButtonProps { 

}

export const Button = memo(( { onClick }: ButtonProps) => { 
    return ( 
        <button type="button" onClick={() => {}}>
        Click me!
        </button>
    )
})
