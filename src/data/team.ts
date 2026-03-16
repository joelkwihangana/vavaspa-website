import team1 from "../assets/spa/aa.webp";
import team2 from "../assets/Last/vava4.webp";

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    id: "therapist-1",
    name: "Vava Spa",
    role: "Certified Massage",
    image: team1,
  },
  {
    id: "therapist-2",
    name: "Vava Spa",
    role: "Wellness & Body Care Specialist",
    image: team2,
  },
];
