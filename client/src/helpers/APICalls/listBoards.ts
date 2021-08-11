import { ListBoardApiData } from '../../interface/Board';
import { FetchOptions } from '../../interface/FetchOptions';

export async function listBoard(): Promise<ListBoardApiData> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/board/list`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
