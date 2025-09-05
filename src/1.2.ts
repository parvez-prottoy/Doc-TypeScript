/* Type Annotation */
const firstName: string = "Parvez";
const lastName: string = "Prottoy";
console.log(`I am ${firstName} ${lastName}`);
/* Type Annotation With Object */
let person: {
  name: string;
  skill: string[];
  gitHub: string;
  portfolio?: string;
  address: {
    location: string;
    phoneNumber?: number;
  };
};

person = {
  name: "Parvez",
  skill: ["HTML", "CSS", "JS"],
  gitHub: "",
  address: {
    location: "",
  },
};
