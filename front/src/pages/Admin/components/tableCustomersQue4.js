import { useEffect } from 'react'
import { useState } from 'react'
import config from '../../../config'
import axios from 'axios'
const TableCustomersQue4 = (props) => {
  const height = props.height
  const width = props.width
  const [customerDetails, setcustomerDetails] = useState([])
  let count = 0

  const getEmployeeDetails = () => {
    axios
      .get(config.serverURL + '/getByCarBrandEmailNotIncludeDigit')
      .then((Response) => {
        setcustomerDetails(Response.data)
      })
  }

  useEffect(() => {
    getEmployeeDetails()
  })

  return (
    <div
      className='table1'
      style={{
        marginLeft: '11%',
        marginRight: '11%',
        marginTop: '20px',
        marginBottom: '20px',
      }}>
      <div
        className='tableg99 table-responsive'
        style={{
          border: '10px solid #cff4fc',
          borderRadius: '20px',
          width: width,
          height: height,
          overflowX: 'hidden',
          overflowY: 'auto',
        }}>
        <table className='table table-hover'>
          <thead>
            <tr className='table-info'>
              <th scope='col' style={{ borderTopLeftRadius: '10px' }}>
                #
              </th>
              <th scope='col'>FirstName</th>
              <th scope='col'>LastName</th>
              <th scope='col'>Quote</th>
              <th scope='col'>Email</th>
              <th scope='col'>PhonePrice</th>

              <th scope='col' style={{ borderTopRightRadius: '10px' }}>
                Car
              </th>
            </tr>
          </thead>

          <tbody>
            {customerDetails.map((cust) => {
              count++
              return (
                <tr>
                  <th scope='row'>{count}</th>
                  <td>{cust.first_name}</td>
                  <td>{cust.last_name}</td>
                  <td>{cust.quote}</td>
                  <td>{cust.email}</td>
                  <td>{cust.phone_price}</td>
                  <td>{cust.car}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableCustomersQue4
