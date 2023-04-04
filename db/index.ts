import mongoose, { ConnectOptions } from "mongoose";
const connectDB = async () => {
  await mongoose
      .connect(process.env.MONGO_URI_DOCKER,{
          useNewUrlParser: true,
          // useUnifiedTopology: true,
          // useCreateIndex: true,
          // useFindAndModify: false,
          // poolSize: 5,
          } as ConnectOptions)
      .then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(err));
};

module.exports = connectDB;
