import { Column } from './Column';

export interface Board {
  columns: Column[];
  _id?: string;
}

export interface ListBoardApiData {
  board: Board[];
}

export interface HandleBoardApiResponse {
  board: Board;
}
