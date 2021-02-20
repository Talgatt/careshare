import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    university: { type: String, required: true },
    relationship: { type: String, required: true },
    addressStreetName: { type: String, required: true },
    addressStreetNumber: { type: String, required: true },
    addressApt: { type: String, required: true },
    addressCountry: { type: String, required: true },
    addressPO: { type: String, required: true },
    phone: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    emergencyPhone: { type: String, required: true },
    emergencyRelation: { type: String, required: true },
    childFirstName: { type: String, required: true },
    childLastName: { type: String, required: true },
    childGender: { type: String, required: true },
    childAge: { type: Number, required: true },
    childAllergies: { type: String, required: true, default: "N/A" },
    childDietaryRestrictions: { type: String, required: true, default: "N/A" },
    childAdditionalInformation: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
