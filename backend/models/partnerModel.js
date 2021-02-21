import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },

    university: { type: String, required: true },
    relationship: { type: String, required: true },
    addressStreetName: { type: String, required: true },

    addressCountry: { type: String, required: true },
    addressPO: { type: String, required: true },
    phone: { type: String, required: true },

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

const Partner = mongoose.model("Partner", partnerSchema);

export default Partner;
