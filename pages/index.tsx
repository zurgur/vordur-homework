import NavBar from '../components/NavBar';
import Title from '../components/Title';
import ChildList from '../components/ChildList';

const Home = (): JSX.Element => (
  <div>
    <NavBar />
    <Title />
    <ChildList />
    <style jsx global>
      {`
        body {
          background: #F0F0F0;
        }
      `}
    </style>
  </div>
);

export default Home;
