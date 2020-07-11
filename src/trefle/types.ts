export type AllKingdoms = Omit<Kingdom, "link">[];

export type Kingdom = {
  id: number;
  name: string;
  slug: string;
  link: string;
  subkingdoms: Omit<Subkingdom, "divisions" | "kingdom">[];
};

export type AllSubkingdoms = Omit<Subkingdom, "divisions" | "kingdom">[];

export type Subkingdom = {
  id: number;
  name: string;
  slug: string;
  link: string;
  kingdom: Kingdom;
  divisions: Omit<Division, "division_classes" | "subkingdom" | "kingdom">[];
};

export type Division = {
  id: number;
  name: string;
  slug: string;
  division_classes: DivisionClass[];
  subkingdom: Omit<Subkingdom, "divisions" | "kingdom">;
  kingdom: Omit<Kingdom, "subkingdoms">;
};

export type DivisionClass = {
  id: number;
  name: string;
  slug: string;
  link: string;
};

export type Class = {
  id: number;
  link: string;
  name: string;
  slug: string;
};

export type AllPlants = Omit<Plant, "native_status">[];

export type Plant = {
  id: number;
  complete_data: boolean;
  common_name: string;
  scientific_name: string;
  link: string;
  slug: string;
  native_status: string;
  class?: Class;
};

export type AllSpecies = Omit<Species, "native_status">[];

export type Species = {
  id: number;
  complete_data: boolean;
  common_name: string;
  scientific_name: string;
  link: string;
  slug: string;
  native_status: string;
};
