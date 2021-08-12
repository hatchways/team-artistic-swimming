import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSocket } from '../../context/useSocketContext';
import { useHistory } from 'react-router-dom';
import Board from '../../components/Board/Board';
import { useEffect } from 'react';
import DashboardBar from '../../components/DashboardBar/DashboardBar';
import { useBoard } from '../../context/useBoardContext';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();

  const { loggedInUser } = useAuth();
  const { setInitialBoardList } = useBoard();

  const { initSocket } = useSocket();
  const history = useHistory();

  useEffect(() => {
    setInitialBoardList();
  }, [setInitialBoardList]);

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <>
      <DashboardBar user={loggedInUser} />
      <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
        <CssBaseline />
        <Board />
      </Grid>
    </>
  );
}
