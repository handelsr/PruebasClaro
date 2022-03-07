import React from 'react'

export const TableHeadRow = ({ cells }) => {
  return (
    <>
        <tr className="bg-primary text-white">
          {
            cells.map((cell, index) => {
              return (
                <th key={index}>{cell}</th>
              )
            })
          }
        </tr>
    </>
  )
}
