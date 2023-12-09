import { useEffect, useState } from 'react';
import { Header } from "./components/header"
import { BackgroundSection } from "./components/background"
import { PersonsList } from "./components/persons-list"

import { api } from "./API/index"

function App() {

    const [data, setData ] = useState([])

    const fetchData = async (url) =>{
      try{
        setData(await api(url));
      } catch(e){
        console.log(e)
      }
    }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Header/>
      <BackgroundSection />
      <PersonsList data={data}/>
    </>
  )
}

export default App;
