/* eslint-disable jsx-quotes */
import Link from 'next/link'

export default function Home () {
  return (
    <section className="main">
      <h2 className="main__title">Origen de la vida</h2>
      <div className="main__home">
        <p>
          La Tierra, nuestro hogar en el vasto universo, alberga un enigma que
          ha desconcertado a científicos y curiosos durante siglos: ¿cómo surgió
          la vida en este planeta?
        </p>
        <div className='main__home-parallax bg-1' />

        <p>
          Aunque aún no tenemos todas las respuestas, las investigaciones
          científicas han proporcionado valiosas teorías que nos ayudan a
          comprender este fascinante proceso.
        </p>
        <p>
          Para entender los orígenes de la vida en la Tierra, es necesario
          retroceder en el tiempo, hasta hace unos 4.500 millones de años.
        </p>
        <p>
          En aquel entonces, nuestro planeta era un lugar inhóspito, con océanos
          de magma y una atmósfera cargada de gases tóxicos. Sin embargo, en
          medio de este ambiente hostil, surgieron las primeras moléculas
          orgánicas, los bloques fundamentales de la vida.
        </p>
        <div className='main__home-parallax bg-2' />
        <h4 className='main__subtitle'>Uno de los mayores retos a los que se ha enfrentado la ciencia:</h4>
        <p>
          ¿Cuáles eran las probabilidades de que la vida surgiera en el tercer
          planeta de un sol que orbita dentro de uno de los brazos espirales de
          la Vía Láctea?
        </p>
        <p>
          ¿Cómo surgió la vida en un tiempo en el que no existía vida de ningún
          tipo?
        </p>
        <p>
          Dado a que no hay una respuesta en concreto, a continuación verán las
          diversas teorías sobre cómo surgió la vida en la tierra.
        </p>
        <div className="main__home-container">
          <Link href="sopa-primordial" className="main__link">
            Siguiente
          </Link>
        </div>
      </div>
    </section>
  )
}
