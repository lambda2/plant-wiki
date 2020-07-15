export type Collection<T> = {
  data: T[],
  links: {
    first?: string
    prev?: string
    last?: string
    next?: string
    self?: string
  }
  meta: {
    total: number
  }
};

export type Resource<T> = {
  data: T,
  meta: {
    last_modified?: string
  }
};

export type AllKingdoms = Collection<Omit<Kingdom, "link">>;

export type Kingdom = {
  id: number;
  name: string;
  slug: string;
  link: string;
  subkingdoms: Omit<Subkingdom, "divisions" | "kingdom">[];
};

export type AllSubkingdoms = Collection<Omit<Subkingdom, "divisions" | "kingdom">>;

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

export type AllPlants = Collection<Omit<Plant, "native_status">>;

export type AllPlantsParams = {
  q?: string;
};

export type Plant = {
  id: number;
  complete_data: boolean;
  common_name: string;
  scientific_name: string;
  link: string;
  slug: string;
  native_status: string;
  images: { url: string }[];
  class?: Class;
};

export type AllSpecies = Collection<Omit<Species, "native_status">>;

export type Species = {
  id: number;
  complete_data: boolean;
  common_name: string;
  scientific_name: string;
  link: string;
  slug: string;
  native_status: string;
};
