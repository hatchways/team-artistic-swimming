export interface Card {
  _id?: string;
  name: string;
  colorCode: ColorTags;
  deadline?: string;
  attachments?: string[];
  tags?: string[];
}
export interface Column {
  cards: Card[];
  _id?: string;
  name: string;
}

export type ColorTags = 'red' | 'blue' | 'yellow' | 'green' | '';
