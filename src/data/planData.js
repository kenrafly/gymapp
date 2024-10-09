import heartPlan from "../assets/heartPlan.svg";
import crownPlan from "../assets/crownPlan.svg";
import barbellPlan from "../assets/barbellPlan.svg";

const planData = [
  {
    icon: heartPlan,
    name: "BASIC PLAN",
    price: "$25",
    features: [
      "2 hours of excercises",
      "Free consultaion to coaches",
      "Access to The Community",
    ],
  },
  {
    icon: crownPlan,
    name: "PREMIUM PLAN",
    price: "$30",
    features: [
      "5 hour of excercises",
      "Free consultaion of Coaches",
      "Access to minibar",
    ],
  },
  {
    icon: barbellPlan,
    name: "PRO PLAN",
    price: "$45",
    features: [
      "8 hours of excercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];

export default planData;
