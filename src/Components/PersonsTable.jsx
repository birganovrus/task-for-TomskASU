import React from 'react'

import Person from './PersonRow'
import { Link } from 'react-router-dom'

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const PersonsTable = () => {
  return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>
            <div className='table-buttons'>
              <Link to='/addPerson'>
                <Button variant='outline-primary'>Добавить сотрудника</Button>
              </Link>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <Person />
      </tbody>
    </Table>
  )
}

export default PersonsTable
