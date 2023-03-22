export interface IBlockItem {
  id: number;
  title?: string | ArrayBuffer | null;
  name: string;
  type: string;
  icon: string;
}

export interface BlockItems {
  items: IBlockItem[];
}
