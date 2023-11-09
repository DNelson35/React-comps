import Dropdown from "../components/Dropdown"
import { useState } from "react"

function DropDownPage() {
    const [selected, setSelected] = useState(null)

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Blue', value: 'blue'},
        {label: 'Green', value: 'green'},
    ]

   const handleSelect = (option) => {
        setSelected(option)
   }
    
   
    return (
        <div className="flex">
            <Dropdown options={options} onSelect={handleSelect} selected={selected} /> 
        </div>
    )
}

export default DropDownPage