import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    setIsLoading(true);
      fetch('https://ac-inw.vercel.app/novoArtistas')
      .then(res => res.json())
      .then(data => {setArtistas(data), console.log(data)})
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  },[])

  return (
    <>
      <Header/>
      <Container>
        <Sidebar/>
        <Outlet/>
      </Container>
      <Footer />
    </>
  )
}

export default App
