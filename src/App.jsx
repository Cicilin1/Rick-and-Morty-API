import { useEffect, useState } from 'react';
import { Header } from "./components/header"
import { BackgroundSection } from "./components/background"
import { PersonsList } from "./components/persons-list"
import { Footer } from './components/footer';

import { api } from "./API/index"

function App() {

  const [data, setData] = useState([])

  const fetchData = async (url) => {
    try {
      setData(await api(url));
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  const fecthNextPage = async (url) => {
    fetchData(url)
  }

  const fecthPreiousPage = async (url) => {
    fetchData(url)
  }

  return (
    <>
      <Header />
      <BackgroundSection />
      <PersonsList data={data}
        fecthNextPage={(url) => fecthNextPage(url)}
        fecthPreiousPage={(url) => fecthPreiousPage(url)}
      />
      <Footer/>
    </>
  )
}

export default App;
