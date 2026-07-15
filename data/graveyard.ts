export interface GraveyardItem {
  id: number;
  image: string;
}

export const graveyard: GraveyardItem[] = Array.from(
  { length: 14 },
  (_, index) => ({
    id: index + 1,
    image: `/images/graveyard/${String(index + 1).padStart(2, "0")}.webp`,
  })
);
