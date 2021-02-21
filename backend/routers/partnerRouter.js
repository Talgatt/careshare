import expressAsyncHandler from "express-async-handler";
import express from "express";
import User from "../models/userModel.js";
import Partner from "../models/partnerModel.js";
import data from "../data.js";

const partnerRouter = express.Router();

partnerRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Partner.remove({});
    const createdParnters = await Partner.insertMany(data.partners);

    res.send(createdParnters);
  })
);

partnerRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const partners = await Partner.find({});

    res.send({ partners });
  })
);

partnerRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const partner = await Partner.findById({ _id: req.params.id });

    res.send(partner);
  })
);

export default partnerRouter;
