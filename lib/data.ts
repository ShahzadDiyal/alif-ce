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
  night: img("photo-1487958449943-2429e8be8625", 1800),
  crane: img("photo-1504307651254-35680f356dfd", 1000),
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

export type ServicePhase = { title: string; intro: string; points: string[]; metric: string };
export type Service = {
  slug: string; pillar: string; title: string; short: string; description: string;
  image: string; includes: string[]; exploreLabel: string;
  standards: string[];
  lifecycle: ServicePhase[];
  matrix: { category: string; spec: string; body: string }[];
};

const LIFECYCLE_TAIL: ServicePhase = {
  title: "Testing, Commissioning & Handover",
  intro: "Meticulous verification of structural integrity, integrated MEP operations, envelope water-tightness, and statutory occupation certifications.",
  points: [
    "Independent third-party QA/QC auditing with UET & NESPAK lab tests",
    "Integrated building automation & life-safety fire system commissioning",
    "Comprehensive As-Built BIM models paired with digital asset registers",
    "Post-occupancy warranty backing & dedicated 12-month DLP engineering team",
  ],
  metric: "Zero Unresolved Punch-List Handover",
};

export const SERVICES: Service[] = [
  { slug: "turnkey-epc-general-contracting", pillar: "01", title: "Turnkey EPC & General Contracting",
    short: "Single-source contractual accountability from initial engineering feasibility through to commissioning and statutory sign-offs.",
    description: "End-to-end design-build and single-point construction management for Pakistan's most demanding architectural, commercial, and industrial landmarks. We integrate deep structural foundations, core-wall slip-forming, and high-performance building skins into a coordinated CPM delivery framework.",
    image: IMAGES.hero, exploreLabel: "Explore EPC Discipline",
    includes: [
      "Full lifecycle EPC lump-sum & GMP contract models",
      "Integrated BIM 4D schedule simulation & clash elimination",
      "Statutory liaison with CDA, LDA, KDA, and cantonment boards",
    ],
    standards: [
      "Fast-Track CPM Delivery: Primavera P6 baseline logic with zero float creep.",
      "In-House Engineering & BIM: Parametric 5D clash detection prior to site mobilization.",
      "Substructure to Penthouse: Integrated diaphragm piling, dewatering, and tower core delivery.",
      "Tier-1 QA Guarantee: In-situ test labs + UET & NESPAK validation certificates.",
    ],
    lifecycle: [
      { title: "Pre-Construction & Value Engineering",
        intro: "Rigorous front-end engineering design (FEED), geotechnical feasibility modeling, and supply chain hedging before cast-in-place works begin.",
        points: [
          "Deep geotechnical risk assessment & dewatering strata modeling",
          "Parametric 5D BIM constructability reviews & clash elimination",
          "Value engineering matrices for steel tonnages & post-tensioning",
          "Critical path method (CPM) baseline scheduling in Primavera P6",
        ],
        metric: "Up to 14% Capex Optimization" },
      { title: "Turnkey Site Execution & Structural Mastery",
        intro: "Precision substructure execution and rapid vertical structural advancement utilizing modern climbing formwork and certified batch plant networks.",
        points: [
          "Core-wall hydraulic slip-forming & jump-form automated staging",
          "Post-tensioned (PT) beam and slab systems for column-free expanses",
          "Specialized C70/C80 high-strength concrete delivery & pumping",
          "Synchronized tower crane logistics and multi-tier material hoisting",
        ],
        metric: "5-Day Floor Cycle Benchmark" },
      LIFECYCLE_TAIL,
    ],
    matrix: [
      { category: "Regulatory Licensing", spec: "Category CA (No-Limit) Certified. Qualified for infrastructure and multi-storey builds of infinite financial scope.", body: "Pakistan Engineering Council (PEC)" },
      { category: "Structural Design Codes", spec: "Strict compliance with ACI 318-19 (Reinforced Concrete), UBC-97 Seismic Provisions, IBC 2021, and ASTM Standards.", body: "American Concrete Institute / ICC" },
      { category: "High-Strength Concrete Mixes", spec: "C50, C60, C70, and C80 (up to 11,600 PSI) with micro-silica, polypropylene fiber admixtures, and controlled heat of hydration.", body: "ASTM C39 / BS EN 206" },
      { category: "Steel Reinforcement", spec: "Grade 60 and Grade 80 deformed high-yield rebar with ultrasonic non-destructive testing (NDT) on all coupler joints.", body: "ASTM A615 / A706 Seismic" },
      { category: "Project Controls & BIM", spec: "Cloud-integrated Oracle Primavera P6 Enterprise scheduling, Autodesk Revit LOD 400 BIM models, and BIM 360 Field logging.", body: "ISO 19650 Information Management" },
      { category: "QA/QC Testing Protocols", spec: "On-site calibrated compression testing, core drilling tests, slump & flow tables, rebar tensile elongation tests, and moisture profiling.", body: "UET Lahore & NESPAK Validation" },
    ] },
  { slug: "geotechnical-deep-foundations", pillar: "02", title: "Geotechnical & Deep Foundations",
    short: "Pioneering subterranean engineering for heavy civil loads, complex subterranean hydrogeology, and precarious urban site perimeters.",
    description: "Subterranean engineering for heavy civil loads and difficult ground: bored secant piling in active water tables, diaphragm cutoff walls, contiguous shoring and dewatering systems that hold neighbouring ground movement below 1.5mm — the discipline ALIF was founded on in 1987.",
    image: IMAGES.steel, exploreLabel: "Explore Subterranean",
    includes: [
      "Bored secant piling up to 40m depth in active water tables",
      "Reinforced diaphragm cutoff walls & contiguous shoring",
      "Dynamic vibro-compaction & micro-piling underpinning",
    ],
    standards: [
      "Ground-First Risk Modeling: stratigraphy and hydrogeology modeled before excavation.",
      "Zero-Subsidence Shoring: secant and diaphragm walls with computerized anchor tie-backs.",
      "Instrumented Excavations: movement monitored against 1.5mm neighbour tolerance.",
      "Tier-1 QA Guarantee: pile integrity and load testing on every foundation system.",
    ],
    lifecycle: [
      { title: "Investigation & Ground Modeling",
        intro: "Deep geotechnical risk assessment, borehole stratigraphy and dewatering modeling before a single pile is bored.",
        points: [
          "Borehole investigation & laboratory soil classification",
          "Groundwater and dewatering strata modeling",
          "Neighbouring-structure condition surveys",
          "Foundation scheme appraisal: piles, diaphragm walls, rafts",
        ],
        metric: "Zero-Subsidence Design Target" },
      { title: "Piling, Shoring & Dewatering Execution",
        intro: "Bauer and Casagrande rotary rigs, interlocking secant walls and automated recharge-well grids executed by our in-house geotechnical fleet.",
        points: [
          "Bored cast-in-place secant piles up to 40m in active water tables",
          "Reinforced diaphragm cutoff walls & contiguous shoring",
          "Multi-tier deep-well vacuum dewatering with recharge wells",
          "Ground anchors, strutting & micro-piling underpinning",
        ],
        metric: "Neighbour Movement Held Below 1.5mm" },
      LIFECYCLE_TAIL,
    ],
    matrix: [
      { category: "Piling Systems", spec: "Bored cast-in-place and secant piles, 1,200mm diameter, to 40m depth in rock, gravel and marine silt.", body: "BS EN 1536 / ASTM D1143 Load Testing" },
      { category: "Retaining Systems", spec: "Reinforced diaphragm cutoff walls and contiguous pile walls with computerized ground anchor tie-backs.", body: "BS 5975 Temporary Works" },
      { category: "Dewatering", spec: "Multi-tier deep-well vacuum grids with automated recharge wells for saturated alluvial strata.", body: "CIRIA Groundwater Control" },
      { category: "Ground Improvement", spec: "Dynamic vibro-compaction and heavy dynamic compaction models for weak or reclaimed ground.", body: "BS EN 14731" },
      { category: "Monitoring", spec: "Total-station and inclinometer monitoring of neighbouring structures throughout excavation.", body: "ISO 9001:2015 QA/QC Protocols" },
    ] },
  { slug: "superstructures-high-rise", pillar: "03", title: "Superstructures & High-Rise",
    short: "Advanced vertical construction capabilities for 40+ storey towers using high-strength composite systems and automated climbing formwork.",
    description: "Vertical construction for towers of 40+ storeys: high-strength C70/C80 composite systems, hydraulic jump-form and slip-form cores, and unbonded post-tensioned floor slabs delivering expansive column-free spans on a 5-day floor cycle benchmark.",
    image: IMAGES.tower, exploreLabel: "Explore High-Rise",
    includes: [
      "High-performance concrete up to C70/C80 mix formulations",
      "Hydraulic jump-form and slip-form shear core systems",
      "Unbonded post-tensioned floor slabs for expansive column spans",
    ],
    standards: [
      "5-Day Floor Cycles: hydraulic self-climbing formwork on vertical cores.",
      "Sub-Millimeter Tolerances: total-station laser deflection tracking at every level.",
      "High-Strength Mixes: C70/C80 with micro-silica and controlled heat of hydration.",
      "Tier-1 QA Guarantee: 28-day cylinder compliance audited by UET Lahore.",
    ],
    lifecycle: [
      { title: "Structural Design & Value Engineering",
        intro: "Lateral-system appraisal, wind and seismic modeling, and PT slab optimization before vertical works begin.",
        points: [
          "Dual-system lateral design: RC core + perimeter frames / diagrids",
          "Post-tensioning layouts for 14m+ column-free spans",
          "Constructability reviews for craneage and hoisting logistics",
          "Primavera P6 vertical-cycle baseline scheduling",
        ],
        metric: "Up to 14% Capex Optimization" },
      { title: "Vertical Execution & Structural Mastery",
        intro: "Slip-formed cores, composite perimeter framing and synchronized crane logistics rising on audited floor cycles.",
        points: [
          "Core-wall hydraulic slip-forming & jump-form automated staging",
          "Post-tensioned beam and slab stressing with digital elongation checks",
          "C70/C80 high-strength concrete delivery & 250m vertical pumping",
          "Twin luffing-jib tower crane synchronization",
        ],
        metric: "5-Day Floor Cycle Benchmark" },
      LIFECYCLE_TAIL,
    ],
    matrix: [
      { category: "Structural Systems", spec: "RC shear cores, composite steel-concrete frames and exterior diagrid envelopes for towers of 40+ storeys.", body: "ACI 318-19 / UBC-97 Seismic" },
      { category: "Concrete Grades", spec: "C50–C80 high-strength mixes (up to 11,600 PSI) with silica fume and fiber admixtures.", body: "ASTM C39 / BS EN 206" },
      { category: "Post-Tensioning", spec: "Unbonded mono-strand PT flat slabs delivering 14.2m continuous column-free spans at 225mm slab depth.", body: "PTI / BS EN 1992" },
      { category: "Formwork Systems", spec: "DOKA hydraulic self-climbing core formwork and automated jump-form staging.", body: "BS 5975 Temporary Works" },
      { category: "QA/QC Testing", spec: "4,200+ audited 28-day concrete cylinder crush tests achieving 99.4% strength compliance.", body: "UET Lahore Validation" },
    ] },
  { slug: "commercial-facades-envelopes", pillar: "04", title: "Commercial Façades & Envelopes",
    short: "Engineered thermal-envelope performance, double-skin solar shading, and blast-resistant high-spec unitized curtain wall installations.",
    description: "High-performance building skins: thermally broken unitized curtain walling with argon-filled double glazing (U-value 1.4 W/m²K), double-skin ventilated cavities, and wind-tunnel-tested seismic anchor systems — engineered, fabricated and installed as one envelope package.",
    image: IMAGES.facade, exploreLabel: "Explore Envelopes",
    includes: [
      "Thermally broken factory-unitized structural glazed façades",
      "Double-skin ventilated cavities with active louvre controls",
      "Blast mitigation, wind tunnel tested seismic anchor brackets",
    ],
    standards: [
      "Thermal Performance: U-value 1.4 W/m²K, SHGC 0.22 unitized glazing.",
      "Factory Unitization: panels glazed and sealed under controlled conditions.",
      "Wind & Seismic Tested: boundary-layer wind testing at 160 km/h design velocity.",
      "Water-Tightness Verified: envelope hose and chamber testing before handover.",
    ],
    lifecycle: [
      { title: "Envelope Design & Engineering",
        intro: "Thermal, acoustic and structural envelope engineering coordinated with the frame through BIM before fabrication.",
        points: [
          "Unitized panel engineering & thermal-break detailing",
          "Wind-load and seismic anchor design",
          "Solar shading and double-skin cavity strategy",
          "Full-scale visual and performance mock-ups",
        ],
        metric: "U-Value 1.4 W/m²K Glazing" },
      { title: "Fabrication & Installation",
        intro: "Factory-unitized panels installed by synchronized craneage with laser-tracked bracket tolerances.",
        points: [
          "Factory glazing & sealing of unitized panels",
          "Laser-tracked anchor bracket installation",
          "Floor-by-floor panel erection sequenced with frame cycle",
          "Perimeter fire-stopping & acoustic sealing",
        ],
        metric: "Sub-Millimeter Joint Tolerances" },
      LIFECYCLE_TAIL,
    ],
    matrix: [
      { category: "Glazing Systems", spec: "Thermally broken, argon-filled double-glazed unitized curtain wall with acoustic dampening interlayers.", body: "ASTM E2190 / EN 13830" },
      { category: "Thermal Performance", spec: "U-value 1.4 W/m²K and SHGC 0.22, targeting USGBC LEED Gold envelope performance.", body: "ASHRAE 90.1 / LEED" },
      { category: "Anchor Systems", spec: "Wind tunnel tested seismic anchor brackets with blast-mitigation detailing for institutional clients.", body: "ASTM E330 Structural Testing" },
      { category: "Envelope Area Delivered", spec: "34,000 m² of glazing envelope delivered on the Alif Horizon Commercial Tower alone.", body: "ALIF Project Record — Q4 2024" },
    ] },
  { slug: "integrated-mep-hvac-bms", pillar: "05", title: "Integrated MEP, HVAC & BMS",
    short: "Complex mechanical, electrical distribution, and centralized automated climate infrastructure engineered for Tier-3 uptime and efficiency.",
    description: "Complete mechanical, electrical and plumbing delivery engineered for Tier-3 uptime: 11kV substations with N+1 redundancy, central water-cooled chillers, cleanroom AHUs and SCADA/BACnet building management — coordinated clash-free through BIM before first fix.",
    image: IMAGES.engineer, exploreLabel: "Explore MEP Systems",
    includes: [
      "11kV heavy substations, busbar trunking & backup sync systems",
      "Central water-cooled centrifugal chillers & cleanroom AHUs",
      "SCADA and BACnet-integrated Building Management Systems",
    ],
    standards: [
      "Tier-3 Uptime Design: dual 11kV feeds with 100% N+1 generator redundancy.",
      "Clash-Free First Fix: parametric 5D BIM coordination before mobilization.",
      "Cleanroom Certified: ISO 14644-1 air filtration for healthcare and pharma.",
      "Integrated Commissioning: full-load thermal and life-safety system testing.",
    ],
    lifecycle: [
      { title: "MEP Design & BIM Coordination",
        intro: "Load modeling, plant sizing and 5D clash detection across structure, architecture and services before site works.",
        points: [
          "Electrical load & HVAC thermal modeling",
          "Plant, riser and substation space planning",
          "Parametric 5D BIM clash elimination",
          "Equipment procurement with mill and factory test certs",
        ],
        metric: "Zero-Clash First Fix Target" },
      { title: "Installation & Systems Integration",
        intro: "First-fix to plant installation by in-house MEP teams, integrated with BMS and life-safety systems as one network.",
        points: [
          "11kV substations, busbar trunking & generator synchronization",
          "Centrifugal chillers, AHUs & cleanroom filtration installation",
          "Fire-fighting, detection & life-safety system installation",
          "SCADA / BACnet BMS integration & metering",
        ],
        metric: "100% N+1 Power Redundancy" },
      LIFECYCLE_TAIL,
    ],
    matrix: [
      { category: "Power Distribution", spec: "Dual 11kV substations, busbar trunking and diesel generator synchronization with 100% N+1 redundancy.", body: "IEC 61439 / NFPA 110" },
      { category: "HVAC Systems", spec: "Central water-cooled centrifugal (magnetic) chillers and cleanroom AHUs with HEPA positive-pressure filtration.", body: "ASHRAE / ISO 14644-1" },
      { category: "Vertical Transit", spec: "High-speed destination-dispatch elevators up to 4.0 m/s, integrated with access control and BMS.", body: "EN 81 / ASME A17.1" },
      { category: "Building Automation", spec: "SCADA and BACnet-integrated BMS with automated solar-tracking blinds and energy metering.", body: "ISO 16484 / BACnet" },
      { category: "Energy Performance", spec: "-28% Energy Utilization Index achieved on Alif Horizon through magnetic chillers and automated shading.", body: "USGBC LEED Gold Target" },
    ] },
  { slug: "industrial-infrastructure", pillar: "06", title: "Industrial & Infrastructure",
    short: "Heavy industrial civil works, pre-engineered steel frames, high-load transit slabs, and infrastructure grade road / overpass networks.",
    description: "Heavy industrial and infrastructure delivery: 60-metre clear-span pre-engineered steel complexes, vibration-damped machinery plinths, SFRC industrial floors, and post-tensioned bridge and overpass structures — built with in-house plant and staged handovers.",
    image: IMAGES.modern, exploreLabel: "Explore Industrial",
    includes: [
      "Long-span Pre-Engineered Steel (PEB) logistics complexes",
      "Vibration-damped foundation plinths for high-tonnage machinery",
      "Heavy duty SFRC (Steel Fiber Reinforced) industrial floors",
    ],
    standards: [
      "60m Clear Spans: PEB structures for logistics and assembly plants.",
      "Super-Flat Floors: FM2 laser-screeded SFRC slabs for heavy axle loads.",
      "Bridge Engineering: balanced cantilever PT box girders on caisson foundations.",
      "Staged Handovers: infrastructure opened in phases while works continue.",
    ],
    lifecycle: [
      { title: "Industrial Design & Groundworks",
        intro: "Process-layout coordination, machinery load mapping and heavy groundworks before steel or concrete rises.",
        points: [
          "Machinery foundation & vibration-damping design",
          "PEB structural design coordination",
          "Heavy pavement and drainage design",
          "Phasing plans for live industrial estates",
        ],
        metric: "Heavy Axle-Load Design Basis" },
      { title: "Steel, Concrete & Infrastructure Execution",
        intro: "PEB erection, super-flat industrial floors and PT bridge construction delivered by in-house plant fleets.",
        points: [
          "Long-span PEB erection & crane gantry installation",
          "FM2 laser-screed SFRC industrial flooring",
          "Balanced cantilever PT box girder construction",
          "Deep caisson pier foundations under riverbeds",
        ],
        metric: "60-Metre Clear-Span Delivery" },
      LIFECYCLE_TAIL,
    ],
    matrix: [
      { category: "Steel Structures", spec: "Pre-engineered steel buildings with 60-metre clear spans and overhead automated crane rail gantries.", body: "AISC / BS EN 1993" },
      { category: "Industrial Floors", spec: "FM2 laser-screeded steel-fiber reinforced concrete floors rated for heavy axle loads and racking.", body: "TR34 / ACI 360" },
      { category: "Bridge Works", spec: "Cast-in-situ balanced cantilever post-tensioned box girders on deep caisson well foundations.", body: "AASHTO LRFD / UBC-97" },
      { category: "Machinery Foundations", spec: "Vibration-damped foundation plinths engineered for high-tonnage rotating and press machinery.", body: "DIN 4150 Vibration Criteria" },
    ] },
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
  { label: "Lahore Central", tag: "Principal Headquarters", address: "Alif Tower, Main Boulevard, Gulberg III, Lahore, Punjab", phone: "+92 42 3578 9000", email: "lahore@alifconstruction.pk", person: "Engr. Tariq Masood, PE", role: "Director Pre-Construction", lat: 31.5120, lng: 74.3440, mapQuery: "Main Boulevard, Gulberg III, Lahore" },
  { label: "Islamabad & KPK", tag: "Federal Directorate", address: "Executive Heights, Sector G-8/4, Blue Area Axis, Islamabad", phone: "+92 51 2890 120", email: "islamabad@alifconstruction.pk", person: "Engr. Salman Shah, M.Eng", role: "Regional VP Federal Tenders", lat: 33.6950, lng: 73.0460, mapQuery: "Sector G-8/4, Islamabad" },
  { label: "Karachi & Sindh", tag: "Maritime & Coastal Division", address: "Ocean View Tower, Block 9, Clifton Coast, Karachi, Sindh", phone: "+92 21 3584 7600", email: "karachi@alifconstruction.pk", person: "Farooq Zubair, MS Structural", role: "Chief Resident Engineer Sindh", lat: 24.8205, lng: 67.0290, mapQuery: "Block 9, Clifton, Karachi" },
  { label: "Plant & Depots", tag: "Logistics & Fleet", address: "Manga Mandi Heavy Base, Lahore \u2022 Port Qasim Depot, Karachi", phone: "+92 42 3591 4410", email: "plant@alifconstruction.pk", person: "Brig. (R) Asim Jahangir", role: "Director Heavy Machinery Fleet", lat: 31.3240, lng: 74.0570, mapQuery: "Manga Mandi, Lahore" },
];

export const SECTOR_PROJECTS: Record<string, string[]> = {
  "high-rise-buildings": ["alif-horizon-commercial-tower", "grand-crest-luxury-residences", "pearl-financial-center"],
  "commercial-complexes": ["alif-horizon-commercial-tower", "pearl-financial-center"],
  "residential-communities": ["grand-crest-luxury-residences"],
  "hospitals-pharmaceuticals": ["institute-of-medical-sciences"],
  "academic-buildings": ["faculty-of-advanced-engineering-campus"],
  "industrial-power": ["national-logistics-park"],
  "piling-shoring-dewatering": ["alif-horizon-commercial-tower", "grand-crest-luxury-residences"],
  "infrastructure-civil-works": ["chenab-river-viaduct"],
};

export function projectsForSector(slug: string): Project[] {
  const slugs = SECTOR_PROJECTS[slug] ?? [];
  return slugs
    .map((s) => PROJECTS.find((p) => p.slug === s))
    .filter((p): p is Project => Boolean(p));
}
