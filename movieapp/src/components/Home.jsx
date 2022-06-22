import { useGlobalContext } from "./Context";

const Home = () => {
  const name = useGlobalContext();
  return <div>My name is {name}</div>;
};

export default Home;
