import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// #region styles
const useStyles = makeStyles(() => ({
  container: {
    height: '30vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '0px 10px',
  },
  header: {
    fontSize: '2.2rem',
    fontWeight: 600,
    marginBottom: 10,
  },
  paragraph: {
    lineHeight: 1.6,
  },
}));


// #endregion
export default (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.header}>Barnatrygging</Typography>
      <Typography variant="body1" className={classes.paragraph}>
        Barnatrygging Varðar tryggir börnin okkar fyrir hugsanlegum
        áföllum vegna slysa og veikinda sem geta haft varanlegar afleiðingar.
      </Typography>
    </div>
  );
};
