import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

import ChildCard from './ChildCard';

const useStyles = makeStyles(() => ({
  list: {
    display: 'flex',
    flexFlow: 'wrap',
  },
}));

export default (): JSX.Element => {
  const classes = useStyles();
  const kids = [
    { name: 'peter pan', kt: '111111 - 1111' },
    { name: 'Tootles ', kt: '111111 - 1111' },
    { name: 'Nibs', kt: '111111 - 1111' },
    { name: 'Slightly ', kt: '111111 - 1111' },
  ];
  return (
    <List dense className={classes.list}>
      {kids.map((lostBoy): JSX.Element => (
        <ChildCard
          key={lostBoy.name}
          name={lostBoy.name}
          kt={lostBoy.kt}
        />
      ))}
    </List>
  );
};
