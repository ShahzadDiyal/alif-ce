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
  slug: string; id: string; title: string; status: "Completed" | "Ongoing";
  statusLabel: string; category: string; filters: string[]; region: string;
  location: string; scope: string; image: string; overview: string;
  cardText: string;
  metrics: { label: string; value: string }[];
  facts: { label: string; value: string }[]; highlights: string[];
  caseStudy?: {
    intro: string;
    narrative: string[];
    specs: { label: string; value: string }[];
    specNote: string;
    challengesIntro: string;
    challenges: { title: string; problem: string; solution: string }[];
    phases: { phase: string; meta: string; title: string; text: string; image: string }[];
    galleryStat: { label: string; value: string };
    safety: { value: string; title: string; text: string }[];
    safetyIntro: string;
    quote: { text: string; name: string; role: string };
    cadre: { name: string; role: string; area: string }[];
    heroStats: { label: string; value: string; sub: string }[];
    handoverNote: string;
  };
};

export const PROJECTS: Project[] = [
  { slug: "alif-horizon-commercial-tower", id: "ALIF-PRJ-001", title: "Alif Horizon Commercial Tower",
    status: "Completed", statusLabel: "Completed & Handed Over", category: "Commercial High-Rise",
    filters: ["high-rise", "commercial"], region: "Lahore",
    location: "Gulberg III, Main Boulevard, Lahore",
    scope: "Turnkey Civil, Deep Shoring, Structural Core, Facade & MEP",
    image: IMAGES.tower,
    overview: "A 32-storey diagrid-reinforced corporate icon redefining Gulberg's business core through turnkey geotechnical dewatering, post-tensioned wide-span superstructures, and unitized high-thermal curtain glazing.",
    cardText: "An iconic 32-storey corporate monument redefining Lahore's central business skyline. Fabricated with diamond-braced structural steel diagrid elements and high-performance reflective curtain glazing.",
    metrics: [
      { label: "Covered Footprint", value: "520,000 Sq.Ft" },
      { label: "Elevation / Height", value: "32 Structural Floors" }],
    facts: [
      { label: "Covered Area", value: "520,000 Gross Sq. Ft" },
      { label: "Elevation Profile", value: "138 m — 32 Floors + 3 Basements" },
      { label: "Piling Depth", value: "38.5 m — Bored Secant Scheme" },
      { label: "Concrete Volume", value: "36,400 C60/70 Cu. Metres" },
      { label: "Contract Value", value: "PKR 8.4B — Turnkey Civil & MEP" },
      { label: "Handover", value: "Q4 2024 — 60 days ahead of baseline CPM schedule" }],
    highlights: ["Deep raft foundation with 3 basements in a high-water-table zone", "Secant pile cut-off walls and post-tensioned beam slabs", "Delivered 60 days ahead of baseline CPM schedule", "1.85M LTI-free safe man-hours"],
    caseStudy: {
      intro: "Flagship Commercial Monument — Lahore, Pakistan",
      narrative: [
        "Commissioned as a tier-1 financial and corporate headquarters, the Alif Horizon Commercial Tower presented formidable technical requirements: executing three subterranean parking levels within 8 meters of dense traffic arteries along Main Boulevard Gulberg, while delivering vast, column-free office floorplates engineered to resist Zone 2B seismic acceleration.",
        "ALIF's engineering core implemented a hybrid structural topology: a cast-in-place central reinforced shear core managing primary lateral seismic shear, combined with an exterior diagrid steel-concrete composite envelope that redistributes perimeter gravity loads and dampens vortex shedding.",
      ],
      specs: [
        { label: "Foundation Scheme", value: "1,200 mm bored cast-in-place secant piles to 38.5 m depth, capped by a 3,200 mm solid raft foundation with silica-fume mix." },
        { label: "Lateral Load System", value: "Dual structural system: central high-density RC core wall coupled with exterior perimeter structural steel diagrid frames." },
        { label: "Floor Plate Technology", value: "Post-tensioned unbonded mono-strand flat slab system delivering 14.2 m continuous column-free spans." },
        { label: "Facade Engineering", value: "Thermally broken, argon-filled double-glazed unitized curtain wall (U-value 1.4 W/m²K, SHGC 0.22) with acoustic dampening interlayers." },
        { label: "Basement Geotechnics", value: "3 subterranean levels with contiguous interlocking secant piling and multi-tier deep-well vacuum dewatering grid." },
        { label: "MEP & Vertical Transit", value: "8 high-speed destination-dispatch elevators (4.0 m/s), dual 11 kV substations with 100% N+1 diesel generator redundancy." },
      ],
      specNote: "Seismic Design Code: UBC-97 / ACI 318-19 · Design Wind Velocity: 160 km/h (Boundary Layer Tested)",
      challengesIntro: "Subsurface alluvial saturation, tight urban perimeter tolerances, and structural steel rigging under aggressive seasonal monsoons required surgical civil planning.",
      challenges: [
        { title: "Subterranean Dewatering in High Water-Table",
          problem: "Excavating 14 meters down for triple basements within saturated Ravi-basin alluvial strata threatened hydrodynamic ground settlement of neighboring arterial roadways.",
          solution: "Deployed a closed-perimeter interlocking secant pile cutoff wall paired with 24 automated recharge wells, holding neighboring ground movement below 1.5mm." },
        { title: "14-Metre Column-Free Floor Spans",
          problem: "Institutional corporate tenants demanded unobstructed floor layouts without intermediate structural columns, exceeding standard reinforced concrete deflection limits.",
          solution: "Engineered banded mono-strand post-tensioning tendons spanning 14.2 meters, reducing overall slab thickness to 225mm and cutting floor dead-weight by 22%." },
        { title: "High-Altitude Diagrid Assembly",
          problem: "Rigging 8-tonne structural nodal steel members beyond 100 meters elevation while subjected to unpredictable thermal expansion and seasonal wind shear.",
          solution: "Synchronized twin internal luffing-jib tower cranes with total station laser deflection tracking, achieving sub-millimeter joint pin tolerances at all 32 levels." },
      ],
      phases: [
        { phase: "Phase 02 · Core Superstructure", meta: "Month 14 Milestone — Level 22 Core Cast", title: "Automated Slip-Forming & Steel Framing", text: "Utilized hydraulic self-climbing formwork executing 4-day floor cycles for the internal vertical transit core, complemented by perimeter composite steel framing.", image: IMAGES.hero },
        { phase: "Phase 03 · Quality Assurance", meta: "Third-Party Audited — NESPAK / ALIF Joint QA", title: "Structural Tolerance & PT Stressing", text: "Engineers conducting digital elongation verification during multi-strand tendon post-tensioning, cross-verifying hydraulic jack pressure with calibrated load cells.", image: IMAGES.engineer },
        { phase: "Phase 04 · Commissioning & Handover", meta: "Architectural Glazing & Public Realm", title: "Architectural Glazing & Public Realm", text: "The 18-meter cantilevered structural glass portal links the corporate lobby seamlessly to Main Boulevard. Integrated perimeter infinity water features function as natural thermal sinks while visually grounding the tower's diagrid geometry.", image: IMAGES.facade },
      ],
      galleryStat: { label: "Glazing Envelope", value: "34,000 m²" },
      safetyIntro: "Through all 36 months of high-risk deep excavation, tower crane operations, and facade rigging, ALIF maintained an unblemished safety culture adhering strictly to OSHA and British Standards.",
      safety: [
        { value: "1.85M", title: "LTI-Free Man-Hours", text: "Zero Lost Time Injuries across 850+ site operatives over 3 consecutive years." },
        { value: "99.4%", title: "Strength Compliance", text: "Derived from 4,200+ 28-day concrete cylinder crush tests audited by UET Lahore." },
        { value: "-28%", title: "Energy Utilization Index", text: "Targeting USGBC LEED Gold via magnetic chillers and automated solar tracking blinds." },
        { value: "Triple", title: "ISO Accreditation", text: "Fully certified: ISO 9001 (Quality), ISO 14001 (Environment), ISO 45001 (Safety)." },
      ],
      quote: {
        text: "Alif Horizon was not simply about stacking thirty-two slabs in the air. It was a rigorous masterclass in deep urban geotechnics and tight structural tolerances. Delivering this monument sixty days early along Lahore's busiest arterial spine affirms what PEC Category CA engineering can accomplish when technical discipline meets institutional pride.",
        name: "Engr. Muhammad Salman, PE",
        role: "Principal Project Director · Fellow, Institution of Engineers Pakistan",
      },
      cadre: [
        { name: "Tariq Mahmood, M.Sc.", role: "Chief Geotechnical Engineer", area: "Piling & Shoring" },
        { name: "Kamran Rashid, PE", role: "Lead Structural QA/QC Manager", area: "PT & Concrete" },
        { name: "Farooq Aslam, B.Sc.", role: "Head of MEP Commissioning", area: "HVAC & 11kV" },
        { name: "Hamza Nadeem, CSP", role: "Senior HSE Lead Manager", area: "OSHA / 45001" },
      ],
      heroStats: [
        { label: "Covered Area", value: "520,000", sub: "Gross Sq. Ft." },
        { label: "Elevation Profile", value: "138 m", sub: "32 Floors + 3 Basements" },
        { label: "Piling Depth", value: "38.5 m", sub: "Bored Secant Scheme" },
        { label: "Safety Record", value: "1.85M", sub: "LTI-Free Safe Hours" },
        { label: "Concrete Volume", value: "36,400", sub: "C60/70 Cu. Metres" },
        { label: "Contract Value", value: "PKR 8.4B", sub: "Turnkey Civil & MEP" },
      ],
      handoverNote: "Delivered 60 Days Ahead of Baseline CPM Schedule",
    } },
  { slug: "grand-crest-luxury-residences", id: "ALIF-PRJ-002", title: "The Grand Crest Luxury Residences",
    status: "Ongoing", statusLabel: "Ongoing Execution", category: "High-Rise Residential",
    filters: ["high-rise", "residential"], region: "Karachi",
    location: "Clifton Block 4, Karachi",
    scope: "Deep Piling, RCC Superstructure, Architectural Façade",
    image: IMAGES.facade,
    overview: "Twin 28-storey coastal residential towers featuring marine-grade concrete chemistry and subterranean diaphragm wall technology.",
    cardText: "Cast-in-situ reinforced concrete shear-wall tower engineered to withstand coastal seismic conditions. Features high-load bored piling, 4 multi-tier underground podiums, and insulated double-glazed unitized curtain wall.",
    metrics: [
      { label: "Covered Area", value: "680,000 Sq.Ft" },
      { label: "Foundation Type", value: "1,200mm Bored Piles" }],
    facts: [
      { label: "Scope", value: "Deep Piling, RCC Superstructure, Architectural Façade" },
      { label: "Configuration", value: "Twin 28-Storey Towers" },
      { label: "Covered Area", value: "680,000 Sq.Ft" },
      { label: "Foundation", value: "1,200mm Bored Piles" },
      { label: "Status", value: "Ongoing Execution" },
      { label: "Location", value: "Clifton Block 4, Karachi" }],
    highlights: ["Marine-grade concrete for coastal exposure", "4 multi-tier underground podiums", "Insulated double-glazed unitized curtain wall", "Coastal seismic shear-wall system"] },
  { slug: "institute-of-medical-sciences", id: "ALIF-PRJ-003", title: "Institute of Medical Sciences & Research",
    status: "Completed", statusLabel: "Completed", category: "Specialized Healthcare",
    filters: ["healthcare"], region: "Islamabad",
    location: "Sector H-8, Islamabad",
    scope: "Complete Hospital Civil Works, Specialized MEP & Cleanrooms",
    image: IMAGES.white,
    overview: "State-of-the-art tertiary hospital incorporating ISO cleanrooms, anti-radiation bunker shielding and unified central medical gas networks.",
    cardText: "State-of-the-art tertiary hospital incorporating ISO cleanrooms, anti-radiation bunker shielding for linear accelerators, vibration-damped diagnostic basements, and unified central medical gas pipeline networks.",
    metrics: [
      { label: "Facility Type", value: "Tertiary Hospital" },
      { label: "HVAC Classification", value: "HEPA Positive Pressure" }],
    facts: [
      { label: "Scope", value: "Complete Hospital Civil Works, Specialized MEP & Cleanrooms" },
      { label: "Cleanrooms", value: "ISO-Compliant, HEPA Positive Pressure" },
      { label: "Specialist Works", value: "Anti-Radiation Bunker Shielding, Medical Gas Networks" },
      { label: "Status", value: "Completed" },
      { label: "Location", value: "Sector H-8, Islamabad" }],
    highlights: ["ISO-compliant cleanroom construction", "Anti-radiation bunker shielding for linear accelerators", "Vibration-damped diagnostic basements", "Unified central medical gas pipeline network"] },
  { slug: "national-logistics-park", id: "ALIF-PRJ-004", title: "National Logistics Park & Assembly Plant",
    status: "Completed", statusLabel: "Completed", category: "Industrial & Logistics",
    filters: ["industrial"], region: "Lahore",
    location: "Sundar Industrial Estate, Lahore",
    scope: "Pre-Engineered Steel Structures, Industrial Flooring, Crane Gantries",
    image: IMAGES.steel,
    overview: "Mega heavy-industrial facility with 60-metre clear-span pre-engineered steel structures and FM2 laser-screeded industrial flooring.",
    cardText: "Mega heavy-industrial facility featuring 60-meter clear-span pre-engineered steel structures (PEB), FM2 laser-screed industrial flooring with heavy axle-load tolerance, and overhead automated crane rail gantries.",
    metrics: [
      { label: "Clear Span", value: "60 m PEB Structures" },
      { label: "Flooring", value: "FM2 Laser-Screed" }],
    facts: [
      { label: "Scope", value: "PEB Structures, Industrial Flooring, Crane Rail Gantries" },
      { label: "Structure", value: "60-Metre Clear-Span Pre-Engineered Steel" },
      { label: "Flooring", value: "FM2 Laser-Screed, Heavy Axle-Load Tolerance" },
      { label: "Status", value: "Completed" },
      { label: "Location", value: "Sundar Industrial Estate, Lahore" }],
    highlights: ["60-metre clear-span PEB structures", "FM2 super-flat industrial flooring", "Overhead automated crane rail gantries", "Heavy axle-load pavement design"] },
  { slug: "pearl-financial-center", id: "ALIF-PRJ-005", title: "Pearl Financial Center",
    status: "Completed", statusLabel: "Completed", category: "Commercial Headquarters",
    filters: ["high-rise", "commercial"], region: "Karachi",
    location: "I.I. Chundrigar Road, Karachi",
    scope: "Seismic Superstructure, BMS & Smart Systems, Destination-Dispatch Elevators",
    image: IMAGES.modern,
    overview: "A 26-storey grade-A corporate banking high-rise with dedicated seismic damping systems and dual-redundant data hubs.",
    cardText: "Constructed in Pakistan's primary financial corridor, this 26-storey monument features seismic design parameters, automated building management systems (BMS), high-speed destination dispatch elevators, and smart facade shading.",
    metrics: [
      { label: "Covered Area", value: "410,000 Sq.Ft" },
      { label: "Smart Controls", value: "Tier-3 Data & BMS" }],
    facts: [
      { label: "Scope", value: "Turnkey Civil, Structural, Façade & Smart Systems" },
      { label: "Configuration", value: "26-Storey Grade-A Banking Tower" },
      { label: "Covered Area", value: "410,000 Sq.Ft" },
      { label: "Systems", value: "Tier-3 Data Hubs, BMS, Destination-Dispatch Elevators" },
      { label: "Status", value: "Completed" },
      { label: "Location", value: "I.I. Chundrigar Road, Karachi" }],
    highlights: ["Seismic damping tuned-mass systems", "Dual-redundant Tier-3 data hubs", "Smart façade shading", "High-speed destination-dispatch elevators"] },
  { slug: "faculty-of-advanced-engineering-campus", id: "ALIF-PRJ-006", title: "Faculty of Advanced Engineering Campus",
    status: "Ongoing", statusLabel: "Ongoing Execution", category: "Institutional & Academic",
    filters: ["institutional"], region: "Islamabad",
    location: "Chak Shahzad, Islamabad",
    scope: "Fair-Face Architectural Concrete, Amphitheater, Research Centres",
    image: IMAGES.building,
    overview: "Masterplanned academic campus in fair-face exposed architectural concrete with a 1,200-seat acoustically engineered amphitheater.",
    cardText: "Masterplanned academic campus executed in pristine fair-face fair-form exposed architectural concrete, featuring an acoustically engineered 1,200-seat amphitheater, robotics research centers, and hyper-insulated thermal envelopes.",
    metrics: [
      { label: "Amphitheater", value: "1,200 Seats" },
      { label: "Architectural Finish", value: "Exposed Monolithic Concrete" }],
    facts: [
      { label: "Scope", value: "Campus Civil Works, Amphitheater, Research Centres" },
      { label: "Amphitheater", value: "1,200 Seats, Acoustically Engineered" },
      { label: "Finish", value: "Fair-Face Exposed Architectural Concrete" },
      { label: "Status", value: "Ongoing Execution" },
      { label: "Location", value: "Chak Shahzad, Islamabad" }],
    highlights: ["Fair-face monolithic concrete finish", "1,200-seat acoustic amphitheater", "Robotics research centres", "Hyper-insulated thermal envelopes"] },
  { slug: "chenab-river-viaduct", id: "ALIF-PRJ-007", title: "Chenab River Viaduct & Bridge Overpass",
    status: "Completed", statusLabel: "Completed", category: "Piling & Infrastructure",
    filters: ["infrastructure"], region: "Punjab",
    location: "Punjab Highway Network",
    scope: "Balanced Cantilever Box Girders, Caisson Foundations, Seismic Bearings",
    image: IMAGES.engineer,
    overview: "Strategic transport corridor bridge with cast-in-situ balanced cantilever post-tensioned box girders and deep caisson pier foundations.",
    cardText: "Strategic transport corridor bridge comprising cast-in-situ balanced cantilever post-tensioned box girders, deep caisson pier well foundations sunk under riverbeds, and heavy-duty seismic elastomeric bridge bearing assemblies.",
    metrics: [
      { label: "Structural Scheme", value: "Post-Tensioned Cantilever" },
      { label: "Foundations", value: "Deep Caisson Piers" }],
    facts: [
      { label: "Scope", value: "Box Girders, Caisson Foundations, Bridge Bearings" },
      { label: "Structural Scheme", value: "Balanced Cantilever Post-Tensioned Box Girders" },
      { label: "Bearings", value: "Heavy-Duty Seismic Elastomeric Assemblies" },
      { label: "Status", value: "Completed" },
      { label: "Location", value: "Punjab Highway Network" }],
    highlights: ["Balanced cantilever PT box girders", "Deep caisson wells under the riverbed", "Seismic elastomeric bearing assemblies", "Staged construction over live waterway"] },
];

export const PROJECT_FILTERS = [
  { key: "all", label: "All Projects" },
  { key: "high-rise", label: "High-Rise & Towers" },
  { key: "commercial", label: "Commercial Complexes" },
  { key: "residential", label: "Residential" },
  { key: "healthcare", label: "Healthcare" },
  { key: "industrial", label: "Industrial" },
  { key: "institutional", label: "Institutional" },
  { key: "infrastructure", label: "Infrastructure" },
];

export const PORTFOLIO_COUNTS = {
  total: PROJECTS.length,
  completed: PROJECTS.filter((p) => p.status === "Completed").length,
  ongoing: PROJECTS.filter((p) => p.status === "Ongoing").length,
};

export const STATS = [
  { value: "5", label: "Projects Completed & Handed Over" },
  { value: "2", label: "Ongoing Mega Projects" },
  { value: "8", label: "Specialized Contracting Sectors" },
  { value: "6", label: "Core Construction Services" },
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
