/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
import Link from "next/link"

export default function FuentesHidrotermales () {
  return (
    <section className="main">
      <h2 className="main__title">Teoría de fuentes hidrotermales</h2>
      <div className="main__home">
        <p>
          La teoría de las fuentes hidrotermales submarinas es una hipótesis
          fascinante que sugiere que las condiciones extremas en el fondo del
          océano podrían haber proporcionado el entorno ideal para el origen de
          la vida en la Tierra. Estas fuentes hidrotermales son aberturas en el
          fondo del mar donde el agua caliente, rica en minerales, emerge de la
          corteza terrestre.
        </p>
        <div className="main__home-parallax bg-6" />
        <p>
          A diferencia de la luz solar, que no penetra profundamente en el
          océano, estas fuentes son autónomas en términos de energía, lo que las
          convierte en lugares intrigantes para la investigación sobre el origen
          de la vida.
        </p>
        <p>
          Las fuentes hidrotermales submarinas presentan una variedad de
          condiciones extremas que podrían haber sido cruciales para la síntesis
          de los componentes básicos de la vida. Por ejemplo, las temperaturas
          en estas fuentes pueden alcanzar varios cientos de grados Celsius,
          mientras que la presión es extremadamente alta debido a la profundidad
          del océano. Además, el agua que emana de estas fuentes contiene una
          variedad de compuestos químicos, incluyendo metales y sulfuros, que
          podrían haber servido como catalizadores para reacciones químicas
          importantes en la formación de moléculas orgánicas.
        </p>
        <div className="main__home-parallax bg-7" />
        <p>
          Una de las características más intrigantes de las fuentes
          hidrotermales submarinas es su capacidad para generar gradientes
          químicos y de temperatura en un entorno muy reducido. Estos gradientes
          podrían haber proporcionado las condiciones necesarias para la
          formación de moléculas orgánicas complejas, como aminoácidos,
          nucleótidos y lípidos, que son los bloques de construcción de la vida
          tal como la conocemos.
        </p>
        <p>
          Además, las estructuras minerales presentes en las fuentes
          hidrotermales, como los sulfuros metálicos, podrían haber
          proporcionado superficies catalíticas donde estas moléculas orgánicas
          pudieran ensamblarse y formar estructuras más complejas. Se ha
          demostrado en experimentos de laboratorio que ciertos minerales pueden
          catalizar la formación de enlaces químicos esenciales para la vida.
        </p>
        <div className="main__navigation-links">
          <Link href="/arcillas" className="main__link">
            Anterior
          </Link>
          <Link href="/multiverso" className="main__link">
            Siguiente
          </Link>
        </div>
      </div>
    </section>
  )
}
