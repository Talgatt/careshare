import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      firstName: "Talgat",
      lastName: "Tul",
      email: "tal@ualberta.ca",
      image: "/images/p1.jpg",
      password: bcrypt.hashSync("123", 7),
      isAdmin: false,
      university: "University of Alberta",
      relationship: "mother",
      addressStreetName: "Robson Street",
      addressStreetNumber: "11",
      addressApt: "213",
      addressCountry: "Canada",
      addressPO: "V6Y 1J3",
      phone: "7802323232",
      emergencyContact: "Rob",
      emergencyPhone: "7804545434",
      emergencyRelation: "friend",
      childFirstName: "Diana",
      childLastName: "Tul",
      childGender: "female",
      childAge: 5,
      childAllergies: "none",
      childDietaryRestrictions: "none",
      childAdditionalInformation: "like to play soccer",
    },
    {
      firstName: "Timur ",
      lastName: "Kanes",
      email: "kanes@gmail.com",
      image: "/images/p2.jpg",
      password: bcrypt.hashSync("123", 7),
      isAdmin: false,
      university: "University of Alberta",
      relationship: "mother",
      addressStreetName: "Gibson street",
      addressStreetNumber: "99",
      addressApt: "123",
      addressCountry: "Canada",
      addressPO: "V7W 2V3",
      phone: "780343433",
      emergencyContact: "Dilya",
      emergencyPhone: "943343434",
      emergencyRelation: "grandmother",
      childFirstName: "Diana",
      childLastName: "Tul",
      childGender: "female",
      childAge: 7,
      childAllergies: "sun",
      childDietaryRestrictions: "peenuts",
      childAdditionalInformation: "likes to sing and swim",
    },
  ],
};

export default data;