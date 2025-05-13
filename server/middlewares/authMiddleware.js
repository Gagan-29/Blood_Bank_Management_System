//middle ware is to protect the routes like API calls or login route or register route etc
import JWT from "jsonwebtoken";
export default async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      //decode contains the user
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth failed",
        });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(401).send({
      success: false,
      err,
      message: "Auth failed",
    });
  }
};
