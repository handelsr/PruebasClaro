import React from 'react';
import { TableHeadRow } from './TableHeadRow';
import { TableBodyRow } from './TableBodyRow';

export const Table = ({ HeadCells, BodyRows, setshowEstudiantes }) => {
  return (
    <div className='table-responsive'>
        <table className='table table-striped table-hover'>
            <thead>
                <TableHeadRow cells={HeadCells}/>
            </thead>
            <tbody>
                {
                    BodyRows.map((cells, index) => {
                        return (
                            <TableBodyRow cells={cells} key={index} setshowEstudiantes={setshowEstudiantes}/>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
