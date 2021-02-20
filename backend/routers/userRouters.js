import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const userRouter = express.Router();

// userRouter.get(
//   "/seed",
//   expressAsyncHandler(async (req, res) => {
//     //await User.remove({});
//     const user = await User.insertMany(data.user);

//     res.send({ user });
//   })
// );

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const user = await User.insertMany(data.users);

    res.send({ user });
  })
);

export default userRouter;

userRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});

    res.send({ users });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,

          password: bcrypt.hashSync(user.password, 7),
          isAdmin: false,
          university: user.university,
          relationship: user.relationship,
          addressStreetName: user.addressStreetName,
          addressStreetNumber: user.addressStreetNumber,
          addressApt: user.addressApt,
          addressCountry: user.addressCountry,
          addressPO: user.addressPO,
          phone: user.phone,
          emergencyContact: user.emergencyContact,
          emergencyPhone: user.emergencyPhone,
          emergencyRelation: user.emergencyRelation,
          childFirstName: user.childFirstName,
          childLastName: user.childLastName,
          childGender: user.childGender,
          childAge: user.age,
          childAllergies: user.childAllergies,
          childDietaryRestrictions: user.childDietaryRestrictions,
          childAdditionalInformation: user.childAdditionalInformation,
          token: "token",
        });
      }
    } else {
      res.status(401).send({ message: "User Not Found" });
    }
  })
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,

      password: bcrypt.hashSync(req.body.password, 7),
      isAdmin: false,
      university: req.body.university,
      relationship: req.body.relationship,
      addressStreetName: req.body.addressStreetName,
      addressStreetNumber: req.body.addressStreetNumber,
      addressApt: req.body.addressApt,
      addressCountry: req.body.addressCountry,
      addressPO: req.body.addressPO,
      phone: req.body.phone,
      emergencyContact: req.body.emergencyContact,
      emergencyPhone: req.body.emergencyPhone,
      emergencyRelation: req.body.emergencyRelation,
      childFirstName: req.body.childFirstName,
      childLastName: req.body.childLastName,
      childGender: req.body.childGender,
      childAge: req.body.age,
      childAllergies: req.body.childAllergies,
      childDietaryRestrictions: req.body.childDietaryRestrictions,
      childAdditionalInformation: req.body.childAdditionalInformation,
    });
    const createUser = await user.save();

    res.send({
      firstName: createUser.firstName,
      lastName: createUser.lastName,
      email: createUser.email,

      password: bcrypt.hashSync(createUser.password, 7),
      isAdmin: false,
      university: createUser.university,
      relationship: createUser.relationship,
      addressStreetName: createUser.addressStreetName,
      addressStreetNumber: createUser.addressStreetNumber,
      addressApt: createUser.addressApt,
      addressCountry: createUser.addressCountry,
      addressPO: createUser.addressPO,
      phone: createUser.phone,
      emergencyContact: createUser.emergencyContact,
      emergencyPhone: createUser.emergencyPhone,
      emergencyRelation: createUser.emergencyRelation,
      childFirstName: createUser.childFirstName,
      childLastName: createUser.childLastName,
      childGender: createUser.childGender,
      childAge: createUser.age,
      childAllergies: createUser.childAllergies,
      childDietaryRestrictions: createUser.childDietaryRestrictions,
      childAdditionalInformation: createUser.childAdditionalInformation,
      token: "token",
    });
  })
);
