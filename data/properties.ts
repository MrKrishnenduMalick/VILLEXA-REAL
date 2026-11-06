export interface Property {
  id: string;
  name: string;
  tagline: string;
  category: 'Apartments' | 'Villas' | 'Penthouses';
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  features: { label: string; value: string }[];
  featured?: boolean;
}

export const sampleProperties: Property[] = [
  {
    id: 'aurelia-villas',
    name: 'Aurelia Villas',
    tagline: 'Private & Serene Living',
    category: 'Villas',
    price: '$12,500,000',
    location: 'Emerald Bay Enclave, Horizon Coast',
    bedrooms: 5,
    bathrooms: 6,
    area: '7,850 sq.ft',
    image: '/images/property-exterior-pool-landscape.webp',
    gallery: [
      '/images/property-exterior-pool-landscape.webp',
      '/images/property-exterior-approach.webp',
      '/images/property-interior-living-salon.webp',
      '/images/property-interior-dining-terrace.webp',
      '/images/property-interior-spa-bathroom.webp',
    ],
    description:
      'A masterpiece of contemporary residential architecture, Aurelia Villas blend organic travertine stone, warm architectural timber, and floor-to-ceiling minimal glazing. Featuring a 25-meter cantilevered infinity pool, private wellness pavilion, and uninterrupted twilight views across the water.',
    amenities: [
      'Private 25m Infinity Pool',
      'Subterranean Wine Cellar',
      'Smart Home Automation',
      'Private Wellness Spa & Sauna',
      'Triple-Vehicle Climate Garage',
      'Dedicated Butler Quarters',
    ],
    features: [
      { label: 'Architectural Style', value: 'Contemporary Organic Minimalist' },
      { label: 'Ceiling Height', value: '3.8m to 6.2m Double Atrium' },
      { label: 'Outdoor Living', value: '2,400 sq.ft Sunken Lounge & Deck' },
      { label: 'Security', value: 'Biometric Access & 24/7 Concierge' },
    ],
    featured: true,
  },
  {
    id: 'aurelia-apartments',
    name: 'Aurelia Apartments',
    tagline: 'Urban Luxury & Architectural Grace',
    category: 'Apartments',
    price: '$4,850,000',
    location: 'Prime Avenue, Financial District',
    bedrooms: 3,
    bathrooms: 3.5,
    area: '3,250 sq.ft',
    image: '/images/property-architectural-entrance.webp',
    gallery: [
      '/images/property-architectural-entrance.webp',
      '/images/property-interior-kitchen.webp',
      '/images/property-interior-living-salon.webp',
      '/images/property-gallery-atrium.webp',
    ],
    description:
      'Ascending above the vibrant city lights, Aurelia Apartments redefine metropolitan elegance. Designed with acoustic architectural glass, bespoke Italian kitchen joinery, and expansive corner terraces capturing golden hour city panoramas.',
    amenities: [
      'Sky Lounge & Private Dining',
      'Valet & Chauffeur Services',
      'Indoor Lap Pool & Hammam',
      'Private Sommelier Tasting Room',
      'Executive Boardroom & Coworking',
      'EV Charging Stations',
    ],
    features: [
      { label: 'Tower Elevation', value: 'Levels 24 through 48' },
      { label: 'Kitchen Finishes', value: 'Calacatta Gold & Miele MasterCool' },
      { label: 'Terrace', value: 'Wraparound Deep Balcony' },
      { label: 'Floor Heating', value: 'Radiant Stone Throughout' },
    ],
    featured: true,
  },
  {
    id: 'aurelia-penthouses',
    name: 'Aurelia Penthouses',
    tagline: 'Skyline Exclusivity & Crown Living',
    category: 'Penthouses',
    price: '$16,200,000',
    location: 'Crown Summit, Aurelia Tower Level 52',
    bedrooms: 4,
    bathrooms: 5.5,
    area: '6,450 sq.ft',
    image: '/images/property-gallery-atrium.webp',
    gallery: [
      '/images/property-gallery-atrium.webp',
      '/images/property-interior-master-bedroom.webp',
      '/images/property-gallery-wine-vault.webp',
      '/images/property-interior-dining-terrace.webp',
    ],
    description:
      'Perched atop the architectural summit, the Aurelia Penthouse Collection represents the pinnacle of international luxury. Boasting a 360-degree panoramic terrace, private heated rooftop plunge pool, double-height art gallery atrium, and direct private elevator landing.',
    amenities: [
      'Direct Key-Card High-Speed Lift',
      'Private Rooftop Plunge Pool',
      'Sky Garden & Outdoor Firepit',
      'Bespoke Italian Dressing Suites',
      'Temperature-Controlled Wine Vault',
      'Dedicated 24/7 Lifestyle Butler',
    ],
    features: [
      { label: 'View Angle', value: '360° Skyline & Waterfront Vista' },
      { label: 'Primary Suite', value: '1,400 sq.ft with Dual Bathrooms' },
      { label: 'Atrium Height', value: '7.2m Glazed Cathedral Volume' },
      { label: 'Acoustic Rating', value: 'Studio-Grade Sound Isolation' },
    ],
    featured: true,
  },
  {
    id: 'the-sanctuary-estate',
    name: 'The Sanctuary Villa',
    tagline: 'Secluded Architectural Sanctuary',
    category: 'Villas',
    price: 'Price on Request',
    location: 'The Ridge, Whispering Pines',
    bedrooms: 6,
    bathrooms: 7,
    area: '9,800 sq.ft',
    image: '/images/section-sanctuary-bg.webp',
    gallery: [
      '/images/section-sanctuary-bg.webp',
      '/images/property-exterior-approach.webp',
      '/images/property-interior-spa-bathroom.webp',
      '/images/property-gallery-materiality.webp',
    ],
    description:
      'An estate carved into serene terraced landscapes. Featuring dramatic floating cantilevers, Japanese zen reflection gardens, an outdoor glass cinema pavillion, and infinity water features echoing the surrounding pine groves.',
    amenities: [
      'Zen Reflection Courtyard',
      'Open-Air Starlight Cinema',
      'Private Helipad Access Option',
      'Commercial Grade Chef Scullery',
      'Sub-Level Art & Auto Showroom',
      'Geothermal Climate System',
    ],
    features: [
      { label: 'Site Footprint', value: '1.2 Private Acres' },
      { label: 'Sustainability', value: 'LEED Platinum Net-Zero Target' },
      { label: 'Water Features', value: 'Heated Cascading Pools' },
      { label: 'Interior Designer', value: 'Studio Aurelia Bespoke' },
    ],
  },
  {
    id: 'the-celestial-triplex',
    name: 'Celestial Triplex Penthouse',
    tagline: 'Architectural Triumph Above the Clouds',
    category: 'Penthouses',
    price: '$21,500,000',
    location: 'Pinnacle Level 58-60, Sovereign Tower',
    bedrooms: 5,
    bathrooms: 6.5,
    area: '8,900 sq.ft',
    image: '/images/hero-final-frame.webp',
    gallery: [
      '/images/hero-final-frame.webp',
      '/images/property-gallery-atrium.webp',
      '/images/property-interior-master-bedroom.webp',
      '/images/property-gallery-wine-vault.webp',
    ],
    description:
      'Spanning three magnificent levels interconnected by a sculptural bronze spiral staircase and private glass pneumatic elevator. Features an illuminated outdoor sky deck, formal banquet dining for twenty-four, and glass-bottom cantilevered jacuzzi.',
    amenities: [
      'Pneumatic Glass Internal Elevator',
      'Sculptural Bronze Spiral Staircase',
      'Glass-Bottom Cantilevered Spa',
      'Grand Banquet Dining Hall',
      'Private Screening Theatre',
      'Bespoke Cigar & Cognac Lounge',
    ],
    features: [
      { label: 'Levels', value: 'Triplex (Floors 58, 59 & 60)' },
      { label: 'Glazing', value: 'Low-Iron Crystal Curtain Wall' },
      { label: 'Art Walls', value: 'Museum-Spec Accent Illumination' },
      { label: 'Staff Accommodations', value: 'Separate Staff Quarters & Service Entry' },
    ],
  },
  {
    id: 'the-horizon-residences',
    name: 'Horizon Garden Apartment',
    tagline: 'Terraced Verdant Luxury Living',
    category: 'Apartments',
    price: '$5,400,000',
    location: 'Aurelia Parkside, Promenade West',
    bedrooms: 3,
    bathrooms: 3.5,
    area: '3,800 sq.ft',
    image: '/images/property-interior-dining-terrace.webp',
    gallery: [
      '/images/property-interior-dining-terrace.webp',
      '/images/property-interior-living-salon.webp',
      '/images/property-interior-kitchen.webp',
      '/images/property-architectural-entrance.webp',
    ],
    description:
      'Seamlessly blending indoor grandeur with landscaped outdoor loggias. Designed for collectors of light and tranquility, featuring private botanical planters, bronze sun louvers, and expansive master suites with bespoke walk-in dressing rooms.',
    amenities: [
      'Private 800 sq.ft Landscaped Loggia',
      'Custom Outdoor BBQ & Dining Kitchen',
      'Integrated Sonos Architectural Audio',
      'Dornbracht Platinum Matte Fixtures',
      'Pet Concierge & Grooming Salon',
      'Secure Storage Vault',
    ],
    features: [
      { label: 'Outdoor Living', value: 'Private Loggia with Irrigation' },
      { label: 'Flooring', value: 'French Chevron Oak & Honed Marble' },
      { label: 'Appliances', value: 'Gaggenau 400 Series Induction & Wine' },
      { label: 'Ceilings', value: 'Recessed Architectural Cove Light' },
    ],
  },
];
