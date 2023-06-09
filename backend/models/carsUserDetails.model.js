module.exports = (mongoose) => {
  const carsUserDetails = mongoose.model(
    'carsUserDetails',
    mongoose.Schema({
      id: Number,
      first_name: String,
      last_name: String,
      email: String,
      gender: String,
      income: String,
      city: String,
      car: String,
      quote: String,
      phone_price: String,
    })
  )
  return carsUserDetails
}
