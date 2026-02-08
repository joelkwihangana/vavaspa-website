import team1 from "../assets/real/team/vava_team.webp";
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
    name: "Vava Spa Therapist",
    role: "Certified Massage Therapist",
    image: team1,
  },
  {
    id: "therapist-2",
    name: "Vava Spa Therapist",
    role: "Wellness & Body Care Specialist",
    image: team2,
  },
];
