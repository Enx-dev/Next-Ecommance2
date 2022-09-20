import User from "../../Models/user";
import data from "../../utils/data";
import db from "../../utils/db";

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await db.disconect();
  res.send({ message: "success" });
};

export default handler;
