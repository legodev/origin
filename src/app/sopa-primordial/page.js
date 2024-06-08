import Image from 'next/image'
import Link from 'next/link'
import Charles from '../assets/darwin-charles.jpg'
import Stanley from '../assets/stanley-miller.jpg'

/* eslint-disable jsx-quotes */
export default function SopaPrimordial () {
  return (
    <section className="main">
      <h2 className="main__title">Teoría de la sopa primordial</h2>
      <div className="main__home">
        <div className="main__soup-container">
          <article className="main__divisor">
            <p className="main__paragraph">
              Una de las teorías más aceptadas sobre el origen de la vida es la
              teoría de la sopa primordial.
            </p>
            <p className="main__paragraph">
              En 1871, Charles Darwin escribió una carta en la que describía una
              pequeña charca tibia repleta de las sustancias apropiadas para
              generar vida.
            </p>
            <p className="main__paragraph">
              Medio siglo después, en la década del 1920 el bioquímico ruso
              Alexander Oparin expandió las ideas de Darwin. En su libro “El
              origen de la vida”, teorizó sobre el caldo primordial y la
              progresión gradual desde compuestos químicos simples a una célula
              viva.
            </p>
            <p className="main__paragraph">
              En 1952, la hipótesis fué puesta a prueba por Stanley Miller y
              Harold Urey, el primero siendo un estudiante de posgrado de la
              Universidad de Chicago, el cual se propuso a determinar si
              realmente se podían producir los componentes de la vida a partir
              de sustancias químicas simples.
            </p>
          </article>
          <figure className="main__soup-figure">
            <Image
              src={Charles}
              alt="Charles Darwin"
              title="Charles Darwin"
              className="main__soup-img charles zoom"
            />
          </figure>
        </div>
        <div className="main__soup-container">
          <article className='main__divisor'>
            <p className="main__paragraph">
              Miller construyó un sistema de recipientes de vidrio simulando el
              ciclo primigenio del agua e introdujo una mezcla de gases que
              pretendía imitar la atmósfera de la Tierra primitiva.
            </p>
            <p className="main__paragraph">
              Calentó los componentes, y cargó los gases con rayos y truenos,
              chispas eléctricas con el fin de desencadenar una reacción
              química. En pocos días se formó un fango parecido a la brea en el
              recipiente.
            </p>
            <p className="main__paragraph">
              Después de una semana, encontraron que se habían formado varios
              compuestos orgánicos, incluyendo aminoácidos, que son los bloques
              de construcción de las proteínas.
            </p>
          </article>
          <figure className="main__soup-figure stanley__figure">
            <Image
              src={Stanley}
              alt="Stanley Miller"
              title="Stanley Miller"
              className="main__soup-img stanley zoom"
            />
          </figure>
        </div>
        <p>
          En él, Miller identificó cuatro de los 20 aminoácidos que se
          encuentran en las proteínas, y por primera vez bajo condiciones
          supuestamente naturales, se habían generado moléculas esenciales para
          la vida a partir de materia y energía.
        </p>
        <div className="main__home-parallax bg-3" />
        <p>
          Aunque el experimento de Miller-Urey proporcionó evidencia convincente
          a favor de la Teoría de la Sopa Primordial, también ha sido objeto de
          críticas y debates.
        </p>
        <p>
          Por ejemplo, algunos científicos cuestionaron si las condiciones
          simuladas en el experimento eran realmente representativas de la
          Tierra primitiva. Además, se ha descubierto que otros procesos, como
          la actividad hidrotermal en el fondo oceánico, también podrían haber
          desempeñado un papel importante en el origen de la vida.
        </p>
        <p>
          Más tarde se demostró que el experimento de Miller estaba
          profundamente equivocado porque no había usado los gases correctos,
          ignorando el nitrógeno, el dióxido de carbono y el oxígeno, que
          habrían destruido las moléculas necesarias para la vida en la Tierra
          primitiva.
        </p>
      </div>
      <div className="main__navigation-links">
        <Link href="/" className="main__link">
          Anterior
        </Link>
        <Link href="/arcillas" className="main__link">
          Siguiente
        </Link>
      </div>
    </section>
  )
}
