import NavBar from '../components/NavBar';

const Home = (): JSX.Element => (
  <div>
    <NavBar />
    <style jsx global>
      {`
        body {
          background: #FBF9F6;
        }
      `}
    </style>
  </div>
);

export default Home;
