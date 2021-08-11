import { useState, useContext, createContext, FunctionComponent, useCallback, useEffect } from 'react';
import handleBoard from '../helpers/APICalls/handleBoards';
import { listBoard } from '../helpers/APICalls/listBoards';
import { Board } from '../interface/Board';

interface IBoardContext {
  board: Board;
  updateBoard: (board: Board) => void;
}

export const BoardContext = createContext<IBoardContext>({} as IBoardContext);

export const BoardProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [board, setBoard] = useState<Board>({} as Board);

  useEffect(() => {
    listBoard().then((res) => setBoards(res.board));
  }, []);

  useEffect(() => {
    setBoard(boards[0]);
  }, [boards]);

  const updateBoard = useCallback((newBoard: Board) => {
    setBoard(newBoard);
    handleBoard(newBoard.columns).then((res) => setBoard(res.board));
  }, []);

  return <BoardContext.Provider value={{ board, updateBoard }}>{children}</BoardContext.Provider>;
};

export function useBoard(): IBoardContext {
  return useContext(BoardContext);
}
