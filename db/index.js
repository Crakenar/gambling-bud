const mongoose = require("mongoose");
const connectDB = async () => {
  // const conn = await mongoose.connect('mongodb://mongo:27017/gambling_db', {
  const conn = await mongoose.connect('mongodb://localhost:27017/gambling_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })  .then(() => console.log(`MongoDB connected`))
      .catch(err => console.log(err));
};

module.exports = connectDB;
