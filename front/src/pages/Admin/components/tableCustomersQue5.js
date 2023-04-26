import { useEffect } from 'react'
import { useState } from 'react'
import config from '../../../config'
import axios from 'axios'
const TableCustomersQue5 = (props) => {
  const height = props.height
  const width = props.width
  const [customerDetails, setcustomerDetails] = useState([])
  let count = 0

  const getEmployeeDetails = () => {
    axios
      .get(config.serverURL + '/top10CityHighestUserAndAvgOfIncome')
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
              <th scope='col'>City</th>
              <th scope='col'>Number Of User</th>
              <th scope='col' style={{ borderTopRightRadius: '10px' }}>
                AverageIncome
              </th>
            </tr>
          </thead>

          <tbody>
            {customerDetails.map((cust) => {
              count++
              return (
                <tr>
                  <th scope='row'>{count}</th>
                  <td>{cust._id}</td>
                  <td>{cust.totalperson}</td>
                  <td>{cust.avgIncome}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableCustomersQue5
