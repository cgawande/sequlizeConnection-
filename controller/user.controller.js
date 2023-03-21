const User = require("../model/user.model");
const Posts=require("../model/blog.model")

const signUp = async (req, res) => {
  try {
    const isUserExist = await User.findOne({
      where: { email: req.body.email },
    });
    console.log(isUserExist);
    if (isUserExist) {
      res.status(409).json({
        message: false,
        message: "User is already exist",
      });
    } else {
      const userDeta = await User.create(req.body);
      res.status(201).json({
        message: true,
        message: "User created successfully",
        user: userDeta,
      });
    }
  } catch (err) {
    res.status(400).json({
      message: false,
      message: "Error occured " + err.message,
    });
  }
};

module.exports={signUp}
// const user = await User.findOne({ where: { id: 1 } });
// const posts = await user.getPosts();
// console.log(posts);
