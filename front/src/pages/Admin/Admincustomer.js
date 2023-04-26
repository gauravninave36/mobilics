import styles from './AdminStyles/admin.css'
import TableCustomers from './components/tableCustomers'
import TableCustomersQue2 from './components/tableCustomersQue2'
import TableCustomersQue3 from './components/tableCustomersQue3'
import TableCustomersQue4 from './components/tableCustomersQue4'
import TableCustomersQue5 from './components/tableCustomersQue5'

const Admincustomer = function () {
  return (
    <div class='container-{breakpoint}'>
      <div class='row align-items-start justify-content-start'>
        <div class='col-xl-11 col-xxl-11 col-lg-11 col-md-11 align-self-start  '>
          <div className='d-flex' style={{ marginLeft: '30px' }}>
            <h4
              className='heading99'
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                marginLeft: '8%',
                fontSize: '1.4rem',
              }}>
              1.Users which have income lower than $5 USD and have a car of
              brand “BMW” or “Mercedes”.
            </h4>
          </div>
          <div className='d-flex justify-content-end'>
            <div
              className='d-flex'
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: '3%',
              }}></div>
          </div>
          <TableCustomers height='80vh' />
        </div>
        <div class='col-xl-11 col-xxl-11 col-lg-11 col-md-11 align-self-start  '>
          <div className='d-flex' style={{ marginLeft: '30px' }}>
            <h4
              className='heading99'
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                marginLeft: '8%',
                fontSize: '1.3rem',
              }}>
              2.Male Users which have phone price greater than 10,000.
            </h4>
          </div>
          <div className='d-flex justify-content-end'>
            <div
              className='d-flex'
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: '3%',
              }}></div>
          </div>
          <TableCustomersQue2 height='80vh' />
        </div>
        <div class='col-xl-11 col-xxl-11 col-lg-11 col-md-11 align-self-start  '>
          <div className='d-flex' style={{ marginLeft: '30px' }}>
            <h4
              className='heading99'
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                marginLeft: '8%',
                fontSize: '1.4rem',
              }}>
              3.Users whose last name starts with “M” and has a quote character
              length greater than 15 and email includes his/her last name
            </h4>
          </div>
          <div className='d-flex justify-content-end'>
            <div
              className='d-flex'
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: '3%',
              }}></div>
          </div>
          <TableCustomersQue3 height='80vh' />
        </div>
        <div class='col-xl-11 col-xxl-11 col-lg-11 col-md-11 align-self-start  '>
          <div className='d-flex' style={{ marginLeft: '30px' }}>
            <h4
              className='heading99'
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                marginLeft: '8%',
                fontSize: '1.4rem',
              }}>
              4.Users which have a car of brand “BMW”, “Mercedes” or “Audi” and
              whose email does not include any digit.
            </h4>
          </div>
          <div className='d-flex justify-content-end'>
            <div
              className='d-flex'
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: '3%',
              }}></div>
          </div>
          <TableCustomersQue4 height='80vh' />
        </div>
        <div class='col-xl-11 col-xxl-11 col-lg-11 col-md-11 align-self-start  '>
          <div className='d-flex' style={{ marginLeft: '30px' }}>
            <h4
              className='heading99'
              style={{
                marginTop: '10px',
                marginBottom: '10px',
                marginLeft: '8%',
                fontSize: '1.4rem',
              }}>
              5.Show the data of top 10 cities which have the highest number of
              users and their average income.
            </h4>
          </div>
          <div className='d-flex justify-content-end'>
            <div
              className='d-flex'
              style={{
                textDecoration: 'none',
                color: 'black',
                marginRight: '3%',
              }}></div>
          </div>
          <TableCustomersQue5 height='80vh' />
        </div>
      </div>
    </div>
  )
}

export default Admincustomer
