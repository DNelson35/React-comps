import React, { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from 'react-icons/go'
import Panel from './Panel'

function Dropdown({ options, onSelect, selected }) {
    const [isOpen, setIsOpen] = useState(false)

    const divEl = useRef()

    useEffect(() =>{
        const handler = (e) => {
            if(!divEl.current){
                return 
            }
            
            if(!divEl.current.contains(e.target)){
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler)
        }
    },[])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onSelect(option)
    }

    const renderedOptions = options.map(option =>
        <div className='hover:bg-sky-100 rounded cursor-pointer p-1 ' key={option.value} onClick={() => handleOptionClick(option)}>
            {option.label}
        </div>
    )

  return (
    <div ref={divEl} className='w-48 relative'>
        <Panel className='flex justify-between items-center cursor-pointer' onClick={handleClick}>
            { selected?.label || 'Select...'}
            <GoChevronDown className='text-lg'/>
        </Panel>
        {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown