import { CSSProperties, useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';

// #region styles
export const ValitorColor = '#FCBD12';

const arrowIconStyle: CSSProperties = {
  color: ValitorColor,
  transitionDuration: '20s',
};

const useStyles = makeStyles(() => ({
  paper: {
    margin: '40px 10px 0px 10px',
    position: 'relative',
    maxWidth: 500,
  },
  button: {
    margin: 10,
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    border: 'none',
    background: 'none',
  },
  container: {
    display: 'flex',
  },
  price: {
    width: '50%',
    margin: '10px 15px',
    display: 'flex',
    flexDirection: 'column',
  },
  childContainer: {
    margin: '0px 10px',
    padding: '10px 0px',
  },
  headImage: {
    position: 'absolute',
    height: '150px',
    top: '-60px',
    margin: '0px',
    padding: '0px',
    left: '-20px',
  },
  hr: {
    margin: 0,
    border: '1px solid rgba(132, 127, 127, 0.28)',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  nameStyle: {
    marginTop: 0,
  },
  priceStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 15,
  },
  totalPrice: {
    display: 'flex',
    alignItems: 'center',
  },
}));

// #endregion

interface Props {
  name: string;
  kt: string;
}

export default ({ name, kt }: Props): JSX.Element => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <img src="./childIcon-1.svg" alt="child" className={classes.headImage} />
      <div className={classes.childContainer}>
        <div className={classes.titleContainer}>
          <Typography variant="body1" style={{ marginTop: 40 }}>
            {kt}
          </Typography>
          <Switch
            color="default"
            style={{ color: ValitorColor }}
          />
        </div>
        <Typography variant="h5" className={classes.nameStyle}>
          {name}
        </Typography>
      </div>
      <hr className={classes.hr} />
      <div className={classes.container}>
        <div className={classes.price}>
          <p>bótafarhæð</p>
          <h3 className={classes.nameStyle}>35.000.000 kr.</h3>
          <button type="button" onClick={(): void => setOpen(!open)} className={classes.button}>
            <ArrowForwardIosIcon style={{ ...arrowIconStyle, transform: `rotate(${Number(open) * 90}deg)` }} />
            Breyta
          </button>
        </div>
        <hr className={classes.hr} />
        <div className={classes.price}>
          <p>tegund</p>
          <h3 className={classes.nameStyle}>Barnatrygging 1</h3>
          <button type="button" className={classes.button}>
            <ArrowForwardIosIcon style={arrowIconStyle} />
            Nánar
          </button>
        </div>
      </div>
      <hr className={classes.hr} />
      <div className={classes.priceStyle}>
        <Typography>
          iðgjöld
        </Typography>
        <Typography variant="h6" className={classes.totalPrice}>
          {'1.038 kr '}
          <Typography>
            {' / mán'}
          </Typography>
        </Typography>
      </div>
    </Paper>
  );
};
