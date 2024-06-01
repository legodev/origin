/* eslint-disable jsx-quotes */
import Link from 'next/link'

export default function Arcillas () {
  return (
    <section className="main">
      <h2 className="main__title">Teoría de la arcilla</h2>
      <div className="main__home">
        <p>
          La teoría de las plantillas de arcilla sugiere que las arcillas
          podrían haber desempeñado un papel crucial en el origen de la vida en
          la Tierra al proporcionar un entorno favorable para la formación y
          concentración de moléculas orgánicas complejas.
        </p>
        <p>
          Se cree que las arcillas tienen una estructura cristalina que puede
          actuar como un molde o una superficie catalítica para la síntesis de
          moléculas orgánicas a partir de precursores simples presentes en la
          Tierra primitiva, como agua, dióxido de carbono, amoníaco y otros
          compuestos químicos.
        </p>
        <div className="main__home-parallax bg-4" />
        <p>
          Una de las características importantes de las arcillas es su capacidad
          para adsorber moléculas orgánicas en su superficie. Esto significa que
          las moléculas orgánicas podrían haberse adherido a las partículas de
          arcilla, lo que facilitaría la concentración y la interacción entre
          ellas.
        </p>
        <p>
          Además, las arcillas podrían haber proporcionado un ambiente protegido
          donde estas moléculas pudieran estar más estables y protegidas de las
          condiciones ambientales adversas, como la radiación ultravioleta.
        </p>
        <div className="main__home-parallax bg-5" />
        <p>
          Se han realizado experimentos que respaldan parcialmente esta teoría,
          demostrando que las arcillas pueden catalizar la formación de
          moléculas orgánicas simples, como los aminoácidos, en condiciones
          similares a las que se cree que existían en la Tierra primitiva.
          Además, se ha encontrado evidencia de la presencia de arcillas en
          lugares donde se cree que ocurrieron reacciones prebióticas
          importantes, como en meteoritos y en entornos volcánicos submarinos.
        </p>
        <div className="main__navigation-links">
          <Link href="/sopa-primordial" className="main__link">
            Anterior
          </Link>
          <Link href="/fuentes-hidrotermales" className="main__link">
            Siguiente
          </Link>
        </div>
      </div>
    </section>
  )
}
