const e = require('express')
const db = require('../models')
const carUserDetails = db.carsUserDetails

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'content cant be displayed' })
    return
  }
  const carUserDetail = new db.carsUserDetails({
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    income: req.body.income,
    city: req.body.city,
    car: req.body.car,
    quote: req.body.quote,
    phone_price: req.body.phone_price,
  })
  carUserDetails
    .save(carUserDetail)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'some error occured while creating tutorial',
      })
    })
}

exports.findAllByIncomeAndCarsBmwNdMer = async (req, res) => {
  let condition = {
    $expr: {
      $lte: [
        { $toDouble: { $ltrim: { input: '$income', chars: '\\$' } } },
        5.0,
      ],
    },
    car: { $in: ['BMW', 'Mercedes-Benz'] },
  }
  let data = await carUserDetails.find(condition).exec()
  res.status(200).send(data)
}

exports.findByIncomeGretertenthousand = async (req, res) => {
  let condition = {
    $expr: { $gt: [{ $toInt: '$phone_price' }, 10000] },
    gender: { $in: ['Male'] },
  }
  let data = await carUserDetails.find(condition).exec()
  res.status(200).send(data)
}

exports.findByLastNamePrefixMQuoteLengthGt15 = async (req, res) => {
  let condition = {
    last_name: { $regex: /^M/ },
    $expr: { $gt: [{ $strLenCP: '$quote' }, 15] },
    $expr: {
      $regexMatch: { input: '$email', regex: '$last_name', options: 'i' },
    },
  }
  let data = await carUserDetails.find(condition).exec()
  res.status(200).send(data)
}

exports.findByCarBrandEmailNotIcludeDigits = async (req, res) => {
  let condition = {
    car: { $in: ['BMW', 'Mercedes-Benz', 'Audi'] },
    $expr: { $regexMatch: { input: '$email', regex: /^([^0-9]*)$/ } },
  }
  let data = await db.carsUserDetails.find(condition).exec()
  res.status(200).send(data)
}

exports.findByToptenCitiesHiNumOfUsersAvgIncome = async (req, res) => {
  let condition = [
    {
      $group: {
        _id: '$city',
        totalperson: { $count: {} },
        avgIncome: {
          $avg: { $toDouble: { $ltrim: { input: '$income', chars: '\\$' } } },
        },
      },
    },
    { $sort: { totalperson: -1 } },
    { $limit: 10 },
  ]
  let data = await db.carsUserDetails.aggregate(condition).exec()
  res.status(200).send(data)
}

exports.findtotalNoEntrie = async (req, res) => {
  let condition = [{ $group: { _id: null, Count: { $count: {} } } }]
  let data = await db.carsUserDetails.aggregate(condition).exec()
  res.status(200).send(data)
}
