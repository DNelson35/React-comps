import React, {Fragment} from 'react'

function Table({ data, config, keyFn}) {
    
    const tableRows = data.map((rowData) => {
        const cells = config.map((column) => {
            return <td className='p-2' key={column.label}>{column.render(rowData)}</td>
        })
        return (
            <tr className='border-b' key={keyFn(rowData)}>
                {cells}
            </tr>
        )
        
    })

    const tableHeaders = config.map(column => {
        if(column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        return <th key={column.label}>{column.label}</th>
    })

  return (
    <table className='table-auto border-spacing-2'>
        <thead>
            <tr className='border-b-2'>
                {tableHeaders}
            </tr>
        </thead>
        <tbody>
            {tableRows}
        </tbody>
    </table>
  )
}

export default Table