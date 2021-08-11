import { HandleBoardApiResponse } from '../../interface/Board';
import { Column } from '../../interface/Column';
import { FetchOptions } from '../../interface/FetchOptions';

const handleBoard = async (columns: Column[]): Promise<HandleBoardApiResponse> => {
  const fetchOptions: FetchOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ columns }),
    credentials: 'include',
  };
  return await fetch(`/board/handle`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: 'Unable to connect to server. Please try again',
    }));
};

export default handleBoard;
