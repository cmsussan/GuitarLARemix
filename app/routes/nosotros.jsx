import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';

export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música'
  }
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href: styles
    },
    {
      rel:'preload',
      href:imagen,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
            Aliquam viverra luctus eros eu pellentesque. Praesent ultrices lectus vel justo pellentesque, volutpat cursus nulla laoreet. Nam sed mi sed erat rutrum suscipit quis sit amet sapien. Phasellus tincidunt tristique mauris non varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce suscipit neque vitae lobortis suscipit.
          </p>
          <p>
            Aliquam viverra luctus eros eu pellentesque. Praesent ultrices lectus vel justo pellentesque, volutpat cursus nulla laoreet. Nam sed mi sed erat rutrum suscipit quis sit amet sapien. Phasellus tincidunt tristique mauris non varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce suscipit neque vitae lobortis suscipit.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros