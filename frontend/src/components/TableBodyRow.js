import React from 'react'

export const TableBodyRow = ({ cells=[], setshowEstudiantes }) => {

  const handleClick = ({target}) => {
    setshowEstudiantes(true);
  }

  return (
    <>
        <tr onClick={ handleClick }>
          {
            cells.map((cell, index) => {
              return (
                <td key={index}>{cell}</td>
              )
            })
          }
        </tr>
    </>
  )
}
