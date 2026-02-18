import bellaryImg from "@/assets/school-bellary.jpg";
import hubballiImg from "@/assets/school-hubballi.jpg";
import mangaluruImg from "@/assets/school-mangaluru.jpg";
import bagalkotImg from "@/assets/school-bagalkot.jpg";
import bhadravathiImg from "@/assets/school-bhadravathi.jpg";
import kalaburagiImg from "@/assets/school-kalaburagi.jpg";

export interface School {
  id: string;
  name: string;
  location: string;
  description: string;
  youtube: string | null;
  image: string;
  established: number;
  studentCount: number;
  courses: string[];
}

export const schools: School[] = [
  {
    id: "bellary",
    name: "Government JTS, Bellary",
    location: "Bellary, Karnataka",
    description:
      "One of Karnataka's prominent Junior Technical Schools offering vocational skill development and technical education to empower rural youth with industry-ready skills.",
    youtube: "https://www.youtube.com/embed/oHC6D-xUzRE?si=yojSpbcbRCYb9rts",
    image: bellaryImg,
    established: 1965,
    studentCount: 280,
    courses: ["Mechanical", "Electrical", "Electronics", "Computer Science"],
  },
  {
    id: "hubballi",
    name: "Government JTS, Hubballi",
    location: "Hubballi, Karnataka",
    description:
      "A well-known technical training institute in North Karnataka, providing hands-on skill-focused education with modern workshops and experienced faculty.",
    youtube: "https://www.youtube.com/embed/DOmf_Z5_2hw?si=W8bXDFWDHVLUg0Nc",
    image: hubballiImg,
    established: 1958,
    studentCount: 350,
    courses: ["Mechanical", "Electrical", "Electronics", "Fitting"],
  },
  {
    id: "mangaluru",
    name: "Government JTS, Mangaluru",
    location: "Mangaluru, Karnataka",
    description:
      "Located in the coastal city of Mangaluru, this JTS offers practical technical education with emphasis on hands-on learning and industry partnerships.",
    youtube: null,
    image: mangaluruImg,
    established: 1962,
    studentCount: 220,
    courses: ["Mechanical", "Electrical", "Carpentry", "Welding"],
  },
  {
    id: "bagalkot",
    name: "Government JTS, Bagalkot",
    location: "Bagalkot, Karnataka",
    description:
      "Serving the northern Karnataka region, this school provides career-oriented technical programs that prepare students for both higher education and direct employment.",
    youtube: null,
    image: bagalkotImg,
    established: 1970,
    studentCount: 200,
    courses: ["Mechanical", "Electrical", "Fitting", "Turning"],
  },
  {
    id: "bhadravathi",
    name: "Government JTS, Bhadravathi",
    location: "Bhadravathi, Karnataka",
    description:
      "Situated in the industrial town of Bhadravathi, this JTS benefits from proximity to major industries, providing students with real-world technical training opportunities.",
    youtube: "https://www.youtube.com/embed/jbm7lwSGpOs?si=FFfNw-SEV4c0Ci5us",
    image: bhadravathiImg,
    established: 1960,
    studentCount: 260,
    courses: ["Mechanical", "Electrical", "Electronics", "Welding"],
  },
  {
    id: "kalaburagi",
    name: "Government JTS, Kalaburagi",
    location: "Kalaburagi, Karnataka",
    description:
      "A key technical education institution in the Hyderabad-Karnataka region, providing industry-focused training to uplift youth from underserved communities.",
    youtube: "https://www.youtube.com/embed/l832UYplE54?si=0bX7TsSrMOfW-OiW",
    image: kalaburagiImg,
    established: 1968,
    studentCount: 240,
    courses: ["Mechanical", "Electrical", "Computer Science", "Fitting"],
  },
];
