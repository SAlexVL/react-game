import Header from "./components/Header/index.js";
import Layout from "./components/Layout/index.js";
import Footer from "./components/Footer/index.js";

const App = () => {
  return (
    <>
      <Header />
      <Layout hideBackground />
      <Layout />
      <Layout hideBackground />
      <Footer />
    </>
  );
}

export default App;