import carlosOliveraImg from "@/assets/board/carlos-olivera.jpg";
import rashidLopezImg from "@/assets/board/rashid-lopez.jpg";
import fernandoAlemImg from "@/assets/board/fernando-alem.jpg";
import cristhianVargasImg from "@/assets/board/cristhian-vargas.jpg";
import dannaToledoImg from "@/assets/board/danna-toledo.jpg";

export interface BoardMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "Carlos Andrés Olivera Caballero",
    role: "Founder & President",
    bio: "Youth Ambassador alumnus, UNESCO delegate, and the youngest Honorable Son of Santa Cruz in 200 years. Carlos founded Bookcubers in 2019 after returning from the U.S. Embassy's Youth Ambassadors Program, driven by a vision to empower Bolivian youth through education and leadership.",
    image: carlosOliveraImg
  },
  {
    id: 2,
    name: "Fernando Alem Chajtur",
    role: "First Vice President",
    bio: "President of the Departmental Youth Council and former president of Rotaract Urbari, District 4690. Fernando brings extensive leadership experience in youth civic engagement and community service.",
    image: fernandoAlemImg
  },
  {
    id: 3,
    name: "Danna Valentina Toledo Arias",
    role: "General Secretary",
    bio: "Worthy Advisor to the Beauty and Virtue Assembly of the International Paramasonic Order of Girls, Rainbow. Danna is dedicated to youth empowerment and organizational excellence.",
    image: dannaToledoImg
  },
  {
    id: 4,
    name: "Cristhian Mathías Vargas Menacho",
    role: "Treasurer",
    bio: "Former Bolivian Ambassador to the United States through the Youth Ambassadors Program. Cristhian ensures transparent and efficient management of all organizational resources.",
    image: cristhianVargasImg
  },
  {
    id: 5,
    name: "Rashid López Nieme",
    role: "Recording Secretary",
    bio: "Former president of a student obstetrics league at the University of the Valley of Santa Cruz, Bolivia. Rashid oversees documentation and organizational records.",
    image: rashidLopezImg
  }
];
