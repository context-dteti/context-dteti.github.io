import {
  Database,
  CloudRain,
  Wifi,
  Map,
  FlaskConical,
  Radio,
  Users,
  Layers,
  type LucideIcon,
} from "lucide-react";

export interface Person {
  id: number;
  name: string;
  role: string;
  affiliation: string;
  initials: string;
}

export interface Project {
  id: number;
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  icon: LucideIcon;
  videoUrl: string;
  people: number[];
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

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "hyperbase",
    name: "Hyperbase",
    shortDesc:
      "A high-performance, distributed database engine designed for real-time context-aware applications and IoT environments.",
    fullDesc:
      "Hyperbase is a next-generation distributed database engine specifically optimized for context-aware computing workloads. Built on a novel indexing architecture that partitions data by spatial and temporal context, it achieves sub-millisecond query latency even under high-throughput IoT data ingestion. The system supports edge-to-cloud data federation, enabling seamless query execution across resource-constrained edge nodes and centralized cloud clusters. Key innovations include a context-adaptive query planner that dynamically reroutes queries based on data locality, and a lightweight replication protocol that minimizes bandwidth usage in intermittent connectivity scenarios common in developing regions.",
    tags: ["Database", "Distributed Systems", "IoT"],
    icon: Database,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    people: [1, 2, 4],
  },
  {
    id: 2,
    slug: "inspirasi-disaster",
    name: "INSPIRASI Project: Disaster",
    shortDesc:
      "An intelligent sensor-based platform for real-time disaster prediction and early warning systems using multimodal sensing.",
    fullDesc:
      "The INSPIRASI (Intelligent Sensor Platform for Indonesian Risk Assessment and Safety Infrastructure) project addresses Indonesia's critical need for robust, low-cost disaster early warning systems. The platform fuses data from heterogeneous sensor networks — including seismometers, rain gauges, tilt sensors, and soil moisture probes — with satellite imagery and social media signals to build real-time risk models for landslides, floods, and volcanic activity. At its core, the system employs an ensemble of machine learning models trained on historical disaster events across the Indonesian archipelago, achieving prediction lead times of 30–120 minutes for landslide events. The platform has been deployed in pilot communities in Central Java and Yogyakarta.",
    tags: ["Disaster Management", "Sensing", "Machine Learning"],
    icon: CloudRain,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    people: [1, 3, 5, 7],
  },
  {
    id: 3,
    slug: "miniweather-station",
    name: "MiniWeather Station",
    shortDesc:
      "A compact, low-cost, solar-powered weather monitoring node deployable at scale for hyperlocal meteorological data.",
    fullDesc:
      "MiniWeather Station is an ultra-compact, solar-powered environmental monitoring device designed for mass deployment across urban and rural landscapes. Each node integrates temperature, humidity, barometric pressure, wind speed, UV index, and particulate matter sensors into a weatherproof enclosure smaller than a standard lunchbox. The nodes communicate via LoRaWAN mesh networking, achieving coverage up to 15 km in rural areas with minimal infrastructure. Data streams are processed by a cloud-based analytics pipeline that generates hyperlocal weather forecasts with 500-meter spatial resolution. The project has delivered actionable insights for precision agriculture in Central Java and air quality monitoring in Yogyakarta's urban corridors.",
    tags: ["IoT", "Weather", "Embedded Systems"],
    icon: Wifi,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    people: [1, 4, 6],
  },
  {
    id: 4,
    slug: "borobudur-navigation",
    name: "Borobudur Navigation App",
    shortDesc:
      "A context-aware indoor/outdoor navigation system for the Borobudur heritage site with AR-based cultural overlays.",
    fullDesc:
      "The Borobudur Navigation App is a context-aware mobile application that transforms the visitor experience at Indonesia's iconic Borobudur Temple. Combining BLE beacon-based indoor positioning with GPS outdoor tracking, the app provides seamless wayfinding across the temple's nine stacked platforms and 504 Buddha statues. The AR module overlays historical narratives, relief panel translations, and 3D reconstructions onto the visitor's camera feed, creating an immersive educational experience. A machine learning component analyzes crowd density patterns to suggest optimal visiting routes that minimize congestion and maximize cultural engagement. The project is developed in collaboration with the Borobudur Conservation Office and has been tested with over 500 visitors during pilot deployments.",
    tags: ["Navigation", "Heritage", "Augmented Reality"],
    icon: Map,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    people: [1, 2, 5, 8],
  },
  {
    id: 5,
    slug: "smarlab",
    name: "SmarLab",
    shortDesc:
      "A smart laboratory management ecosystem with real-time monitoring, energy optimization, and predictive maintenance.",
    fullDesc:
      "SmarLab is an integrated smart laboratory management platform that transforms traditional research spaces into intelligent, self-optimizing environments. The system deploys a network of IoT sensors that continuously monitor temperature, humidity, air quality, light levels, occupancy, and equipment vibration across laboratory spaces. A digital twin of the laboratory environment enables simulation-based optimization of HVAC scheduling, lighting automation, and equipment duty cycles, reducing energy consumption by up to 35% in pilot deployments. The predictive maintenance module analyzes equipment sensor telemetry to forecast failures 2–4 weeks in advance, preventing costly downtime. An intuitive web dashboard provides lab managers with real-time visibility into space utilization, environmental compliance, and resource allocation.",
    tags: ["Smart Building", "IoT", "Energy Efficiency"],
    icon: FlaskConical,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    people: [1, 4, 7],
  },
  {
    id: 6,
    slug: "uwb-indoor-localization",
    name: "UWB Indoor Localization",
    shortDesc:
      "Ultra-Wideband centimeter-accurate indoor positioning for asset tracking, robot navigation, and personnel safety.",
    fullDesc:
      "This project develops a centimeter-accurate indoor positioning system based on Ultra-Wideband (UWB) radio technology. Unlike Wi-Fi or BLE-based approaches that achieve meter-level accuracy at best, our UWB system consistently delivers 5–15 cm positioning accuracy in real-world environments including hospitals, warehouses, and manufacturing floors. The system architecture comprises compact UWB anchor nodes installed at fixed positions and lightweight tags attached to assets or personnel. A novel multipath mitigation algorithm based on channel impulse response analysis enables robust positioning even in dense, cluttered indoor environments. Current research directions include sensor fusion with IMU data for dead-reckoning during brief UWB signal outages, and cooperative localization protocols for autonomous mobile robot fleets.",
    tags: ["UWB", "Localization", "RTLS"],
    icon: Radio,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    people: [1, 2, 6, 8],
  },
  {
    id: 7,
    slug: "csi-context-aware",
    name: "CSI Context-Aware",
    shortDesc:
      "Leveraging Wi-Fi Channel State Information for passive human activity recognition and contextual sensing without cameras.",
    fullDesc:
      "This research investigates Wi-Fi Channel State Information (CSI) as a ubiquitous, privacy-preserving sensing modality for human activity recognition and environmental context inference. By analyzing the fine-grained amplitude and phase distortions that human motion imparts on Wi-Fi signals passing through a space, our system can detect presence, recognize activities (walking, sitting, falling, sleeping), estimate respiration rate, and even identify individuals — all without cameras, wearable sensors, or user cooperation. Our processing pipeline extracts Doppler-frequency features from CSI time series and feeds them into a lightweight convolutional neural network optimized for edge deployment on commodity Wi-Fi routers. Current accuracy exceeds 92% for six-class activity recognition in controlled environments, with ongoing work on domain adaptation techniques to generalize across different room geometries and furniture layouts.",
    tags: ["Wi-Fi Sensing", "CSI", "Activity Recognition"],
    icon: Layers,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    people: [1, 3, 7],
  },
  {
    id: 8,
    slug: "people-mobility",
    name: "People Mobility",
    shortDesc:
      "Crowd dynamics and human mobility analysis using GPS, Wi-Fi probes, and social signals for smarter urban planning.",
    fullDesc:
      "The People Mobility project develops computational methods and tools for understanding human movement patterns in urban environments. By fusing anonymized GPS trajectory data, Wi-Fi probe request logs from public access points, transit smart card records, and geo-tagged social media posts, the platform constructs rich spatio-temporal models of how people move through cities. Key analytical capabilities include origin-destination matrix estimation, anomaly detection for unusual crowd gatherings, pedestrian flow simulation for event planning, and accessibility gap analysis for public transit. The system has been applied to study commuter patterns in the Yogyakarta metropolitan area and to model pedestrian evacuation dynamics around Merapi volcano's exclusion zone. Privacy is ensured through differential privacy mechanisms applied at the data ingestion layer.",
    tags: ["Mobility", "Urban Computing", "Analytics"],
    icon: Users,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    people: [1, 5, 6, 8],
  },
];

export function getPeopleForProject(project: Project): Person[] {
  return project.people
    .map((id) => PEOPLE.find((p) => p.id === id))
    .filter(Boolean) as Person[];
}
