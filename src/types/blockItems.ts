import React from 'react';

export interface IBlockItem {
  name: string;
  type: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  id: number;
}

export interface BlockItems {
  items: IBlockItem[];
}
