import { makeStyles } from '@material-ui/core/styles';
// #region styles

const useStyles = makeStyles(() => ({
  navBar: {
    display: 'flex',
    backgroundColor: '#011627',
    height: '70px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    margin: 0,
  },
  root: {
    lineHeight: 1,
    width: '100%',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    margin: 14,
  },
  links: {
    width: 150,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  hamburger: {
    width: 48,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  longLine: {
    height: '3px',
    width: '30px',
    backgroundColor: '#fff',
    borderRadius: '6px',
  },
  shortLine: {
    height: '3px',
    width: '22px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    marginTop: 5,
    marginBottom: 5,
  },
}));

// #endregion

export default (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.navBar}>
      <div className={classes.root}>
        <img src="./vordurIcon.svg" alt="about" />
        <div className={classes.links}>
          <img src="./userIcon.svg" alt="about" className={classes.icon} />
          <img src="./searchIcon.svg" alt="about" className={classes.icon} />
          <span className={classes.hamburger}>
            <span className={classes.longLine} />
            <span className={classes.shortLine} />
            <span className={classes.longLine} />
          </span>
        </div>
      </div>
    </div>
  );
};
