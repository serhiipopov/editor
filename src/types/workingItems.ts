import { IBlockItem } from './blockItems';

export interface WorkingItemsState {
  items: IBlockItem[];
  isLoading: boolean;
  error: string;
}
