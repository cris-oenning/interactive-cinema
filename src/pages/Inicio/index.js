import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import styles from './inicio.module.css'
import { useEffect, useState } from "react";


function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/cris-oenning/cinetag-api/videos')
    .then(resposta => resposta.json())
    .then(dados => {
      setVideos(dados)
    })
  }, [])

  return (
    <>

      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e vilmes!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>

    </>
  )
}

export default Inicio;