export interface WorkItem {
  id: number;
  category:
    | "Packaging"
    | "Brand Identity"
    | "Events & Activations"
    | "Campaigns"
    | "Corporate Collateral";
  image: string;
}

const campaigns: WorkItem[] = Array.from({ length: 14 }, (_, index) => ({
  id: index + 1,
  category: "Campaigns",
  image: `/images/work/campaign/${String(index + 1).padStart(2, "0")}.webp`,
}));

const events: WorkItem[] = Array.from({ length: 12 }, (_, index) => ({
  id: campaigns.length + index + 1,
  category: "Events & Activations",
  image: `/images/work/events/${String(index + 1).padStart(2, "0")}.webp`,
}));

const packaging: WorkItem[] = Array.from({ length: 20 }, (_, index) => ({
  id: campaigns.length + events.length + index + 1,
  category: "Packaging",
  image: `/images/work/packaging/${String(index + 1).padStart(2, "0")}.webp`,
}));

const collateral: WorkItem[] = Array.from({ length: 5 }, (_, index) => ({
  id: campaigns.length + events.length + packaging.length + index + 1,
  category: "Corporate Collateral",
  image: `/images/work/collateral/${String(index + 1).padStart(2, "0")}.webp`,
}));

const identity: WorkItem[] = Array.from({ length: 6 }, (_, index) => ({
  id:
    campaigns.length +
    events.length +
    packaging.length +
    collateral.length +
    index +
    1,
  category: "Brand Identity",
  image: `/images/work/identity/${String(index + 1).padStart(2, "0")}.webp`,
}));
export const work: WorkItem[] = [
  ...campaigns,
  ...events,
  ...packaging,
  ...collateral,
  ...identity,
];
