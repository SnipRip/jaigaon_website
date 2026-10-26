// Product categories on the home page. Names, items and photos are from the
// company brochure. Photo sizes are the files' real pixel sizes.
export interface ProductCategory {
  name: string;
  items: string;
  image: { src: string; alt: string; width: number; height: number };
}

export const productCategories: ProductCategory[] = [
  {
    name: "Iron & steel",
    items:
      "TMT bar FE 600 in 8 to 25 mm, MS angle, channel, flat, plate, round and square pipe, beams, binding wire, GI wire, nails, nuts and bolts.",
    image: { src: "/images/cat-iron-steel.jpg", alt: "Bundles of TMT steel bars", width: 512, height: 288 },
  },
  {
    name: "Bricks & AAC blocks",
    items: "Fly ash AAC blocks 600 × 200 mm in 125, 150, 200 and 250 mm thickness. First and second class red bricks.",
    image: { src: "/images/cat-aac-blocks.jpg", alt: "AAC blocks stacked on site", width: 640, height: 362 },
  },
  {
    name: "Hardware & plywood",
    items: "Plywood, PPGI and GC sheets, HDPE pipes, screws, door fittings, tarpaulin, ropes, wheelbarrows and safety equipment.",
    image: { src: "/images/cat-hardware.png", alt: "Hand tools on a wooden board", width: 615, height: 410 },
  },
  {
    name: "Flooring & stone chips",
    items: "Black and white mosaic stone, dolomite powder, granite, marble and tiles in a range of sizes and colours.",
    image: { src: "/images/cat-flooring.jpg", alt: "Polished stone flooring in a hall", width: 1131, height: 800 },
  },
  {
    name: "Crusher parts",
    items: "Jaw plates, spring steel screens, conveyor belts, V-belts, crusher bearings and coil springs.",
    image: { src: "/images/cat-crusher.png", alt: "A stone crusher plant in the hills", width: 615, height: 410 },
  },
  {
    name: "Electricals",
    items: "Ask us for the current range and brands.",
    image: { src: "/images/cat-electricals.jpg", alt: "An electrician checking a panel", width: 500, height: 334 },
  },
  {
    name: "Sanitary",
    items: "Ask us for the current range and brands.",
    image: { src: "/images/cat-sanitary.jpg", alt: "A modern bathroom with a freestanding bath", width: 544, height: 308 },
  },
];
