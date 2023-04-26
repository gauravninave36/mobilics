const express = require('express')
const cors = require('cors')
const fs = require('fs')
const sampleData = require('./sample_data.json')
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args))
const app = express()
app.use(express.json())
app.use(cors('*'))
app.use(express.urlencoded({ extended: true }))
const db = require('./models')
const carUserDetails = db.carsUserDetails
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to database')
  })
  .catch((err) => {
    console.log('cannot connect to the database ', err)
    process.exit()
  })

let carUserDetailsdata = []
const updateData = async () => {
  carUserDetailsdata = await fs.promises.readFile('./sample_data.json', 'utf-8')
  carUserDetailsdata = JSON.parse(carUserDetailsdata)
  carUserDetailsdata.forEach((e) => {
    const carsUserDetail = new carUserDetails({
      id: e.id,
      first_name: e.first_name,
      last_name: e.last_name,
      email: e.email,
      gender: e.gender,
      income: e.income,
      city: e.city,
      car: e.car,
      quote: e.quote,
      phone_price: e.phone_price,
    })
    carsUserDetail.save()
  })
}
const dataEnterCheck = async () => {
  let recievedData
  await fetch('http://localhost:4000/home/TotalEntries')
    .then((r) => r.json())
    .then((data) => (recievedData = data))
  if (recievedData.length === 0) {
    console.log('yeah')
    updateData()
  }
}
dataEnterCheck()
// const homeRouter = require('./routes/home')
// app.use('./home', homeRouter)
require('./routes/home')(app)

app.listen(process.env.PORT || 4000, '0.0.0.0', () => {
  console.log('server started at port 4000')
})
