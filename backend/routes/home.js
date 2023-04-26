module.exports = (app) => {
  const express = require('express')
  const router = express.Router()
  const home = require('../controllers/home.Controller')
  router.post('/', home.create)
  router.get('/getIncomelt5BmwMercedes', home.findAllByIncomeAndCarsBmwNdMer)
  router.get(
    '/getUserPhonePriceGtTenthousand',
    home.findByIncomeGretertenthousand
  )
  router.get(
    '/getLastNameStartMandQuoteL15',
    home.findByLastNamePrefixMQuoteLengthGt15
  )
  router.get(
    '/getByCarBrandEmailNotIncludeDigit',
    home.findByCarBrandEmailNotIcludeDigits
  )
  router.get(
    '/top10CityHighestUserAndAvgOfIncome',
    home.findByToptenCitiesHiNumOfUsersAvgIncome
  )
  router.get('/TotalEntries', home.findtotalNoEntrie)
  app.use('/home', router)
}
