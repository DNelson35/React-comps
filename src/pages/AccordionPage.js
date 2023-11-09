import React from 'react'
import Accordion from '../components/Accordion'

function AccordionPage() {

    const items =[
        {
            label: 'can i use react on a project',
            content: 'you can use react on any project you want you can use react on any project you want you can use react on any project you want you can use react on any project you want',
            id: '1vjk', 

        },
        {
            label: 'can i use Javascript on a project',
            content: 'you can use react on any project you want you can use react on any project you want you can use react on any project you want you can use react on any project you want',
            id: 'waka43',
        },
        {
            label: 'can i use Css on a project',
            content: 'you can use react on any project you want you can use react on any project you want you can use react on any project you want you can use react on any project you want',
            id: 'nann34', 
        },
    ]

  return (
    <Accordion items={items}/>
  )
}

export default AccordionPage