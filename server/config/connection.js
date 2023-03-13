const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://chefkeii:pw1234@classwork.2owxzzx.mongodb.net",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
