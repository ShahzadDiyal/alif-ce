export const SITE = {
  name: "ALIF Engineering & Construction",
  legalName: "ALIF Engineering & Construction Pvt. Ltd.",
  tagline: "Building a Better Tomorrow",
  phone: "+92 42 3578 9000",
  phoneHref: "tel:+924235789000",
  email: "info@alifconstruction.pk",
  tenderEmail: "tender@alifconstruction.pk",
  url: "https://alifconstruction.pk",
  headOffice: "Alif Tower, Main Boulevard, Gulberg III, Lahore, Pakistan",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Sectors", href: "/sectors" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/achievements" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;

export const IMAGES = {
  hero: img("photo-1541888946425-d81bb19240f5", 1800),
  tower: img("photo-1486406146926-c627a92ad1ab"),
  building: img("photo-1503387762-592deb58ef4e"),
  facade: img("photo-1449157291145-7efd050a4d0e"),
  steel: img("photo-1504307651254-35680f356dfd"),
  engineer: img("photo-1581094794329-c8112a89af12"),
  modern: img("photo-1460574283810-2aab119d8511"),
  white: img("photo-1487958449943-2429e8be8625"),
  office: img("photo-1497366216548-37526070297c"),
};

export type Sector = {
  slug: string; title: string; short: string; description: string;
  image: string; scope: string[]; deliverables: string[];
};

export const SECTORS: Sector[] = [
  { slug: "high-rise-buildings", title: "High-Rise Buildings",
    short: "Commercial & residential high-rise towers exceeding 30+ storeys.",
    description: "Deep foundations in high water tables, high-strength RCC frames, jump-form and slip-form superstructures, and full façade and MEP integration for towers exceeding 30 storeys — engineered for wind, seismic and vertical-logistics demands.",
    image: IMAGES.tower,
    scope: ["Deep piling & raft foundations", "RCC frame & core walls", "Jump-form superstructure", "Curtain-wall façade", "High-speed vertical logistics", "Seismic & wind engineering"],
    deliverables: ["Structural frame handover", "Façade & glazing package", "MEP first-fix to commissioning", "As-built BIM model"] },
  { slug: "commercial-complexes", title: "Commercial Complexes",
    short: "Grade-A corporate headquarters, business centres, and retail plazas.",
    description: "Grade-A corporate headquarters, business centres and retail plazas built for fast-track fit-out: large-span floor plates, central plant, BMS-ready services and premium front-of-house finishes.",
    image: IMAGES.facade,
    scope: ["Large-span floor plates", "Central HVAC & plant", "Retail shell & core", "Corporate fit-out", "Parking structures", "BMS & smart systems"],
    deliverables: ["Shell & core completion", "Tenant fit-out coordination", "Plant commissioning reports", "O&M documentation"] },
  { slug: "residential-communities", title: "Residential Communities",
    short: "Master-planned luxury gated villas and multi-unit residential enclaves.",
    description: "Master-planned gated communities and multi-unit residential enclaves — villas, mid-rise blocks and shared amenities delivered phase-wise so residents can move in while later phases complete.",
    image: IMAGES.modern,
    scope: ["Villas & townhouses", "Mid-rise apartment blocks", "Roads & utilities within scheme", "Clubhouses & amenities", "Landscaping & boundary works", "Phase-wise handover"],
    deliverables: ["Phase completion certificates", "Utility connections", "Snag-free unit handover", "12-month aftercare"] },
  { slug: "hospitals-pharmaceuticals", title: "Hospitals & Pharmaceuticals",
    short: "Specialized sterile healthcare facilities, ISO-compliant pharma cleanrooms.",
    description: "Sterile healthcare facilities and ISO-compliant pharmaceutical cleanrooms: medical-gas systems, HEPA-filtered environments, radiation-shielded rooms and infection-control finishes, validated before handover.",
    image: IMAGES.white,
    scope: ["Cleanrooms (ISO 5–8)", "Medical gas systems", "Operating theatres", "Radiation shielding", "Specialized MEP", "Validation support"],
    deliverables: ["Cleanroom certification support", "Medical-gas test reports", "Specialist MEP commissioning", "Regulatory documentation pack"] },
  { slug: "academic-buildings", title: "Academic Buildings",
    short: "Modern university faculties, state-of-the-art auditoriums and research labs.",
    description: "University faculties, auditoriums, libraries and research laboratories — durable, low-maintenance buildings designed around academic calendars, with works sequenced so campuses stay operational.",
    image: IMAGES.building,
    scope: ["Lecture theatres & auditoriums", "Research laboratories", "Libraries & admin blocks", "Student facilities", "Campus infrastructure", "Live-campus phasing"],
    deliverables: ["Term-time phasing plan", "Lab services commissioning", "Acoustic treatment sign-off", "Campus utility tie-ins"] },
  { slug: "industrial-power", title: "Industrial & Power",
    short: "Heavy industrial manufacturing plants, pre-engineered buildings, power plants.",
    description: "Heavy industrial plants, pre-engineered steel buildings and power facilities: machine foundations, heavy crane gantries, utility corridors and process-area civil works built to tight shutdown windows.",
    image: IMAGES.steel,
    scope: ["Machine & turbine foundations", "Pre-engineered steel buildings", "Heavy crane gantries", "Utility & process corridors", "Substations & switchyards", "Shutdown-window works"],
    deliverables: ["Foundation tolerance reports", "Steel erection certification", "Plant utility commissioning", "Shutdown completion dossier"] },
  { slug: "piling-shoring-dewatering", title: "Piling, Shoring & Dewatering",
    short: "Specialist geotechnical works, diaphragm walls, secant piles, deep dewatering.",
    description: "Specialist geotechnical works — bored piles, diaphragm walls, secant and contiguous pile walls, ground anchors and deep dewatering systems that make difficult ground buildable and keep excavations dry and stable.",
    image: IMAGES.hero,
    scope: ["Bored & CFA piling", "Diaphragm walls", "Secant / contiguous pile walls", "Ground anchors & strutting", "Deep-well dewatering", "Instrumentation & monitoring"],
    deliverables: ["Pile load-test reports", "Monitoring data logs", "As-built pile records", "Dewatering discharge compliance"] },
  { slug: "infrastructure-civil-works", title: "Infrastructure & Civil Works",
    short: "Flyovers, access highways, extensive drainage networks, and mass earthworks.",
    description: "Flyovers, interchanges, access highways, drainage networks and mass earthworks — heavy civil engineering delivered with in-house plant, traffic management and staged handovers that keep cities moving.",
    image: IMAGES.engineer,
    scope: ["Flyovers & interchanges", "Highways & access roads", "Bridges & culverts", "Storm & sewer drainage", "Mass earthworks", "Traffic management & diversions"],
    deliverables: ["Stage-wise road opening", "Material test dossiers", "As-built survey", "Defects-liability support"] },
];

export type Service = {
  slug: string; title: string; short: string; description: string;
  image: string; includes: string[]; process: string[];
};

export const SERVICES: Service[] = [
  { slug: "general-contracting", title: "General Contracting",
    short: "Turnkey civil, structural and finishing works under one accountable contract.",
    description: "Single-contract turnkey delivery of civil, structural, architectural and finishing works. One accountable team from mobilisation to handover — no fragmented subcontractor chain between you and the builder.",
    image: IMAGES.hero,
    includes: ["Site mobilisation & enabling works", "Civil & structural works", "Architectural & finishing works", "External works & landscaping", "Testing, commissioning & handover", "Defects-liability period support"],
    process: ["Mobilise & set out", "Substructure", "Superstructure", "Finishes & external works", "Snagging & handover"] },
  { slug: "design-value-engineering", title: "Design & Value Engineering",
    short: "BOQ formulation, structural analysis and cost-optimised value engineering.",
    description: "Pre-construction engineering that protects your budget before a single excavation: rigorous BOQ formulation, structural analysis, materials planning and value engineering that cuts cost without cutting performance.",
    image: IMAGES.building,
    includes: ["Feasibility & site assessment", "BOQ & cost planning", "Structural analysis review", "Value-engineering workshops", "Materials & method planning", "Buildability reviews"],
    process: ["Site & soil study", "Cost model", "VE options appraisal", "Agreed target cost", "Construction issue pack"] },
  { slug: "civil-structural-construction", title: "Civil & Structural Construction",
    short: "Foundations, RCC frames and superstructures built to ASTM & British Standards.",
    description: "Foundations, RCC frames, post-tensioned slabs and superstructures executed with daily lab-tested concrete batches, strict cover and curing control, and independent QA/QC inspection at every pour.",
    image: IMAGES.steel,
    includes: ["Excavation & foundations", "RCC frames & core walls", "Post-tensioned slabs", "Masonry & blockwork", "Waterproofing systems", "Concrete lab testing (daily batches)"],
    process: ["Setting out", "Foundation works", "Frame cycle", "QA/QC hold points", "Structural completion certificate"] },
  { slug: "mep-engineering-installation", title: "MEP Engineering & Installation",
    short: "Mechanical, electrical & plumbing systems, installed and commissioned in-house.",
    description: "Complete MEP delivery — HVAC, electrical, plumbing, fire-fighting and ELV systems — coordinated with the structure through BIM clash detection, then tested and commissioned as one integrated system.",
    image: IMAGES.engineer,
    includes: ["HVAC supply & installation", "Electrical & ELV systems", "Plumbing & drainage", "Fire-fighting & alarms", "BIM clash coordination", "Testing & commissioning"],
    process: ["Shop drawings & BIM", "First fix", "Second fix & plant", "Integrated testing", "Commissioning & training"] },
  { slug: "finishing-fitout", title: "Finishing & Fit-Out",
    short: "Architectural finishes and corporate fit-out to handover-ready standard.",
    description: "Architectural finishes and interior fit-out for corporate, retail, hospitality and residential projects — joinery, stone, glazing and specialist finishes managed against a room-by-room snagging standard.",
    image: IMAGES.office,
    includes: ["Flooring, stone & tiling", "Ceilings & partitions", "Joinery & doors", "Glazing & façade finishes", "Paint & specialist coatings", "Room-by-room snagging"],
    process: ["Mock-up approval", "First-fix finishes", "Final finishes", "Snag list closure", "Handover-ready certification"] },
  { slug: "project-management-qaqc", title: "Project Management & QA/QC",
    short: "Primavera P6 scheduling, milestone reporting and independent quality control.",
    description: "Owner-side and contractor-side project management: Primavera P6 resource-levelled programmes, milestone and earned-value reporting, and independent QA/QC and QHSE supervision that keeps complex projects honest.",
    image: IMAGES.modern,
    includes: ["Primavera P6 programme", "Milestone & progress reporting", "Cost & variation control", "Independent QA/QC inspection", "QHSE supervision", "Client progress dashboards"],
    process: ["Baseline programme", "Weekly reporting cycle", "Hold-point inspections", "Variation control", "Completion & lessons review"] },
];

export type Project = {
  slug: string; title: string; status: "Completed" | "Ongoing"; category: string;
  location: string; scope: string; image: string; overview: string;
  facts: { label: string; value: string }[]; highlights: string[];
};

export const PROJECTS: Project[] = [
  { slug: "alif-horizon-commercial-tower", title: "Alif Horizon Commercial Tower",
    status: "Completed", category: "Commercial High-Rise", location: "Gulberg III, Lahore, Pakistan",
    scope: "Turnkey Civil, Structural & MEP Engineering",
    image: IMAGES.tower,
    overview: "A Grade-A commercial tower in Gulberg III delivered turnkey — civil, structural and MEP engineering under one contract, with deep foundations in a high water table and a high-strength RCC frame.",
    facts: [
      { label: "Scope", value: "Turnkey Civil, Structural & MEP Engineering" },
      { label: "Covered Area", value: "[XX],000 Sq. Ft" },
      { label: "Value", value: "PKR [XX] Billion" },
      { label: "Status", value: "Completed" },
      { label: "Location", value: "Gulberg III, Lahore" }],
    highlights: ["Deep foundation in high water table", "Daily lab-tested concrete batches", "Full MEP commissioning by in-house team", "Single-point turnkey accountability"] },
  { slug: "grand-crest-luxury-residences", title: "The Grand Crest Luxury Residences",
    status: "Ongoing", category: "Residential & Mixed-Use", location: "Clifton Block 4, Karachi, Pakistan",
    scope: "Deep Piling, RCC Superstructure, Architectural Façade",
    image: IMAGES.facade,
    overview: "Luxury residential towers in Clifton, Karachi — deep piling and RCC superstructure rising on a coastal site, with the architectural façade package integrated into the same programme.",
    facts: [
      { label: "Scope", value: "Deep Piling, RCC Superstructure, Architectural Façade" },
      { label: "Height", value: "[XX] Floors" },
      { label: "Value", value: "PKR [XX] Billion" },
      { label: "Status", value: "Ongoing" },
      { label: "Location", value: "Clifton Block 4, Karachi" }],
    highlights: ["Coastal deep-piling package", "Façade integrated with frame programme", "Primavera P6 milestone reporting", "Zero-harm QHSE protocol on site"] },
  { slug: "institute-of-medical-sciences", title: "Institute of Medical Sciences & Research",
    status: "Ongoing", category: "Specialized Healthcare Facility", location: "Sector H-8, Islamabad, Pakistan",
    scope: "Complete Hospital Civil Works, Specialized MEP & Cleanrooms",
    image: IMAGES.white,
    overview: "A specialized healthcare facility in Islamabad — complete hospital civil works with specialized MEP, medical systems and ISO-compliant cleanrooms, sequenced for validation-ready handover.",
    facts: [
      { label: "Scope", value: "Complete Hospital Civil Works, Specialized MEP & Cleanrooms" },
      { label: "Capacity", value: "[XX] Beds" },
      { label: "Value", value: "PKR [XX] Billion" },
      { label: "Status", value: "Ongoing" },
      { label: "Location", value: "Sector H-8, Islamabad" }],
    highlights: ["ISO-compliant cleanroom construction", "Specialized hospital MEP systems", "Infection-control finishes", "Validation-ready documentation"] },
];

export const STATS = [
  { value: "[XX]+", label: "Projects Completed" },
  { value: "[XX]+", label: "Engineers & Technical Staff" },
  { value: "[XX]", label: "Years of Engineering Excellence" },
  { value: "[XX]", label: "Ongoing Mega Projects" },
];

export const PROCESS_STEPS = [
  { title: "Enquiry & Site Visit", text: "Comprehensive site survey, soil assessment, feasibility study, and stakeholder objectives definition." },
  { title: "Design & Value Estimate", text: "Rigorous BOQ formulation, structural analysis, materials planning, and cost-optimized value engineering." },
  { title: "Construction & QA/QC", text: "Precision execution, daily lab-tested concrete batches, strict site monitoring, and milestone reports." },
  { title: "Handover & Aftercare", text: "Comprehensive snagging resolution, MEP commissioning, warranty documentation, and 12-month post-handover support." },
];

export const OFFICES = [
  { label: "Lahore Head Office", address: "Alif Tower, Main Boulevard, Gulberg III, Lahore, Pakistan" },
  { label: "Islamabad Regional Office", address: "Executive Heights, Blue Area, Islamabad, Pakistan" },
  { label: "Karachi Liaison Office", address: "Ocean Mall Tower, Block 9, Clifton, Karachi, Pakistan" },
];
