import ChildCard from '../components/ChildCard';
import NavBar from '../components/NavBar';
import Title from '../components/Title';

const Home = (): JSX.Element => (
  <div>
    <NavBar />
    <Title />
    <ChildCard name="Peter pan" kt="11111 - 1111" />
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
