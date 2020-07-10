export type Kingdom = {
  id: number;
  name: string;
  slug: string;
  link: string;
  subkingdoms: Omit<Subkingdom, "divisions" | "kingdom">[];
};

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
