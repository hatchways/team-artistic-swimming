import { Board } from './Board';

export interface BoardWithoutNestedChildren {
  _id: string;
  columns: string[];
  name: string;
  lastViewed: boolean;
}

export interface BoardResponse extends Board {
  lastViewed: boolean;
  user: string;
}

export interface BoardApiData {
  error?: string;
  board?: Board;
}

export interface AllBoardResponse extends Omit<Board, 'columns'> {
  columns: string[];
  lastViewed: boolean;
  user: string;
}

export interface AllBoardApiData {
  error?: string;
  boards?: BoardWithoutNestedChildren[];
}

export interface CreateBoardSuccess {
  message: string;
  board: AllBoardResponse;
}

export interface CreateBoardApiData {
  error?: string;
  success?: CreateBoardSuccess;
}

export interface HandleBoardApiData {
  error?: string;
  board?: Board;
}
