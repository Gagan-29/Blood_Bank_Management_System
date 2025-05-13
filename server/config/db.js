import mongoose from "mongoose";
import colors from "colors";
const connect_DB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to Mongodb database ${mongoose.connection.host}`.bgYellow.red
    );
  } catch (err) {
    console.log(`Mongodb database error ${err}`.bgRed.white);
  }
};

export default connect_DB;
