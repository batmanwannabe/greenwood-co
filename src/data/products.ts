export type Product = {
  id: string
  name: string
  era: string
  style: string
  price: number
  description: string
  details: string
  image: string
  category: 'chair' | 'table' | 'cabinet' | 'mirror' | 'desk' | 'bench'
}

export const products: Product[] = [
  {
    id: 'windsor-armchair',
    name: 'Windsor Comb-Back Armchair',
    era: 'c. 1780–1820',
    style: 'English Vernacular',
    price: 1850,
    category: 'chair',
    description:
      'Hand-turned spindles and a continuous arm bow — a chair that has already outlived three centuries of fashion.',
    details:
      'Elm seat with ash spindles and oak arm bow. Soft wear to the arms from generations of use. Structurally sound; recent wax finish. Origin: Buckinghamshire workshop tradition.',
    image:
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'refectory-table',
    name: 'Oak Refectory Table',
    era: 'c. 1680',
    style: 'English Country',
    price: 6200,
    category: 'table',
    description:
      'A long board already seasoned by centuries. No new harvest required — only care and a place to gather.',
    details:
      'Single-plank oak top on trestle base with stretcher. Honest shrinkage cracks filled historically. Seats eight with ease. Provenance: West Country farmhouse collection.',
    image:
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'walnut-bureau',
    name: 'Walnut Fall-Front Bureau',
    era: 'c. 1740',
    style: 'Georgian',
    price: 4800,
    category: 'desk',
    description:
      'Writing surface and pigeonholes behind a fall front — timber cut long before electricity lit a desk.',
    details:
      'Figured walnut veneers over oak carcass. Original brass escutcheons and working lock. Interior fitted with small drawers. Restored hinges; original feet.',
    image:
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'gilt-mirror',
    name: 'Carved Giltwood Mirror',
    era: 'c. 1825',
    style: 'Regency',
    price: 2400,
    category: 'mirror',
    description:
      'Soft gilt and soft glass — a looking glass that has already reflected a hundred rooms.',
    details:
      'Carved pine frame with water-gilded finish, gently worn. Original mercury plate with characteristic spotting. Ready to hang. Height 112 cm.',
    image:
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'mahogany-sideboard',
    name: 'Mahogany Sideboard',
    era: 'c. 1810',
    style: 'Regency',
    price: 5400,
    category: 'cabinet',
    description:
      'Serpentine front and aged brass — storage that already exists, rather than another new cabinet made.',
    details:
      'Cuban mahogany with satinwood stringing. Cellarette drawer and cupboard doors. Brass lion-mask handles. Conserved finish; drawers run true.',
    image:
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ladderback-pair',
    name: 'Pair of Ladderback Chairs',
    era: 'c. 1860',
    style: 'Shaker-influenced',
    price: 920,
    category: 'chair',
    description:
      'Rush seats and clean lines — quiet furniture that asks nothing of a living forest.',
    details:
      'Maple frames with newly woven rush (traditional method). Soft wear to crest rails. Sold as a matched pair. Ideal for kitchen or study.',
    image:
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'pine-settle',
    name: 'Painted Pine Settle',
    era: 'c. 1790',
    style: 'Provincial',
    price: 3100,
    category: 'bench',
    description:
      'A high-back settle with original paint remnants — timber already cut, character already earned.',
    details:
      'Softwood carcass with boarded back and lift-lid seat. Traces of historic blue-grey paint over earlier layers. Structurally sound; suitable as hallway seating.',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'library-table',
    name: 'Leather-Top Library Table',
    era: 'c. 1885',
    style: 'Victorian',
    price: 3900,
    category: 'table',
    description:
      'Green morocco and deep mahogany — a working surface that has already served one century of readers.',
    details:
      'Solid mahogany base with turned legs and brass casters. Replaced leather top in period-correct green. Drawers to either side. Ideal partner desk.',
    image:
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'display-cabinet',
    name: 'Glazed Display Cabinet',
    era: 'c. 1900',
    style: 'Edwardian',
    price: 2750,
    category: 'cabinet',
    description:
      'Astragal glazing and soft shelves — a home for objects already owned, not newly manufactured.',
    details:
      'Mahogany with bevelled glass and adjustable shelves. Original key. Light fading to one side from historic window light. Width 92 cm.',
    image: '/products/glazed-display-cabinet.jpg',
  },
  {
    id: 'campaign-chest',
    name: 'Campaign Chest of Drawers',
    era: 'c. 1855',
    style: 'Military / Colonial',
    price: 4200,
    category: 'cabinet',
    description:
      'Brass-bound and built to travel — furniture that has already crossed oceans without a new tree falling.',
    details:
      'Teak carcass with flush brass handles and removable feet for packing. Two-part construction. Honest wear to binding. Exceptionally practical storage.',
    image:
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'rosewood-dressing-chest',
    name: 'Rosewood Bow-Front Dressing Chest',
    era: 'c. 1890–1910',
    style: 'Late Victorian / Edwardian',
    price: 4650,
    category: 'cabinet',
    description:
      'Marble top, swirling rosewood grain, almond pulls, and a tall looking glass — a dressing chest that has already served a century of mornings.',
    details:
      'Bow-front chest with mottled marble top, attached mirror, and flanking jewellery drawers; 2-over-3 drawer layout with carved wooden pulls and brass escutcheons. Rich figured hardwood with a soft aged polish. Structurally sound; drawers run true. A piece already made — no new harvest required.',
    image: '/products/rosewood-dressing-chest.jpg',
  },
]

export function formatPrice(centsOrDollars: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(centsOrDollars)
}

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}
