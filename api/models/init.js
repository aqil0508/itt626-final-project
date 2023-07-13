const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect("mongodb+srv://aqil0508:muhd0508@cluster0.k7jpxh4.mongodb.net/?retryWrites=true&w=majority", )
  .then(() =>
    console.log(
      `Successfully Connected To MongoDB`
    )
  )
  .catch(error => {
    console.error(`Database Connection Error: ${error}`)
    process.exit(1)
  })

module.exports = mongoose
