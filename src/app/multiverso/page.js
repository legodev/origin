/* eslint-disable jsx-quotes */
import Image from 'next/image'
import Link from 'next/link'
import Multiverse from '../assets/multiverso-desktop.jpg'

export default function Multiverso () {
  return (
    <section className="main">
      <h2 className="main__title">Teoría del multiverso</h2>
      <div className="main__home">
        <p>
          La teoría del multiverso abarca diversas interpretaciones y modelos
          dentro de la física teórica y la cosmología. Uno de los conceptos más
          intrigantes es el multiverso inflacionario, que surge de la teoría de
          la inflación cósmica, una propuesta para explicar ciertas
          características observadas en el universo temprano.
        </p>
        <div className="main__home-parallax bg-8" />
        <p>
          Según la teoría inflacionaria, poco después del Big Bang, el universo
          experimentó una fase de expansión extremadamente rápida y uniforme.
          Esta expansión inflacionaria pudo haber sido impulsada por un campo de
          energía desconocido, que habría hecho que el espacio-tiempo se
          expandiera exponencialmente en un período de tiempo extremadamente
          breve.
        </p>
        <p>
          Durante esta inflación, pequeñas fluctuaciones cuánticas en el campo
          inflacionario podrían haber dado lugar a la formación de regiones con
          densidades ligeramente diferentes, creando así las semillas de las
          estructuras que eventualmente se convertirían en galaxias y cúmulos de
          galaxias.
        </p>
        <div className="main__home-parallax bg-9" />
        <p>
          La teoría del multiverso inflacionario sugiere que este proceso de
          inflación cósmica puede no haber sido un evento único, sino que podría
          estar ocurriendo continuamente en diferentes partes del
          espacio-tiempo. Como resultado, podrían formarse múltiples "burbujas"
          de espacio-tiempo, cada una con sus propias leyes físicas y
          condiciones iniciales.
        </p>
        <p>
          Dentro de estas burbujas, las leyes de la física podrían variar de una
          a otra, lo que significa que las constantes fundamentales y las
          fuerzas que conocemos en nuestro propio universo podrían ser
          diferentes en otros universos. Esto lleva a la idea de que podría
          haber universos donde las condiciones son adecuadas para el
          surgimiento de la vida tal como la conocemos, así como universos donde
          las condiciones son radicalmente diferentes.
        </p>
        <p>
          Algunos científicos han sugerido que si existen múltiples universos
          con diferentes condiciones, es posible que en algunos de ellos las
          condiciones sean propicias para el surgimiento de la vida. Por
          ejemplo, podrían existir universos donde las fuerzas fundamentales
          tienen valores diferentes, lo que podría permitir la formación de
          átomos, moléculas y estructuras biológicas de maneras completamente
          diferentes a las que observamos en nuestro propio universo.
        </p>
        <figure className='main__soup-figure'>
          <Image
            className="main__multiverse-img zoom"
            src={Multiverse}
            alt="Multiverse"
            title="Multiverse"
            width={300}
          />
        </figure>
        <p>
          Además teniendo en cuenta la teoría de las posibilidades, la cual era
          inviable por sus probabilidades tan absurdas. Al haber universos
          infinitos, las posibilidades dejarian de ser algo finito. Dándole
          posibilidad a esa hipotesis.
        </p>
        <p>
          Sin embargo, es importante tener en cuenta que la teoría del
          multiverso es altamente especulativa y aún no cuenta con evidencia
          experimental directa que la respalde. La exploración y el desarrollo
          de estas ideas están en curso, y los científicos continúan buscando
          formas de poner a prueba estas hipótesis utilizando observaciones
          astronómicas, modelos teóricos y experimentos de laboratorio.
        </p>
        <Link href="/fuentes-hidrotermales" className="main__link last">
          Anterior
        </Link>
      </div>
    </section>
  )
}
