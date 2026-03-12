export interface Person {
  id: number;
  name: string;
  role: string;
  affiliation: string;
  initials: string;
}

export const PEOPLE: Person[] = [
  {
    id: 1,
    name: "Dr. Azka Maulana",
    role: "Principal Investigator",
    affiliation: "Universitas Gadjah Mada",
    initials: "AM",
  },
  {
    id: 2,
    name: "Rizky Pratama",
    role: "PhD Researcher",
    affiliation: "Computer Science Dept.",
    initials: "RP",
  },
  {
    id: 3,
    name: "Siti Nurhaliza",
    role: "PhD Researcher",
    affiliation: "Electrical Engineering Dept.",
    initials: "SN",
  },
  {
    id: 4,
    name: "Ahmad Fauzi",
    role: "Research Engineer",
    affiliation: "IoT & Embedded Systems",
    initials: "AF",
  },
  {
    id: 5,
    name: "Dewi Rahayu",
    role: "MSc Student",
    affiliation: "Computer Networks",
    initials: "DR",
  },
  {
    id: 6,
    name: "Budi Santoso",
    role: "MSc Student",
    affiliation: "Signal Processing",
    initials: "BS",
  },
  {
    id: 7,
    name: "Nurul Hidayah",
    role: "Research Assistant",
    affiliation: "Data Science Lab",
    initials: "NH",
  },
  {
    id: 8,
    name: "Fajar Wibianto",
    role: "Research Assistant",
    affiliation: "Wireless Communications",
    initials: "FW",
  },
];
