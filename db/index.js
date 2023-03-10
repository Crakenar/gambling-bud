const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose
      .connect(
         process.env.MONGO_URI_DOCKER,
          { useNewUrlParser: true }
      )
      .then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(err));
};

module.exports = connectDB;
