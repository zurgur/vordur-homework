import List from '@material-ui/core/List';
import ChildCard from './ChildCard';

export default (): JSX.Element => {
  const kids = [
    { name: 'peter pan', kt: '111111 - 1111' },
    { name: 'Tootles ', kt: '111111 - 1111' },
    { name: 'Nibs', kt: '111111 - 1111' },
    { name: 'Slightly ', kt: '111111 - 1111' },
  ];
  return (
    <List dense>
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
