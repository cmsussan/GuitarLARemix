import { Link } from '@remix-run/react';
import { formatearFecha } from '~/utils/helpers';

const Post = ({post}) => {
    const { contenido, titulo, imagen, url, publishedAt } = post;

  return (
    <article className="post">
        <img src={imagen.data.attributes.formats.small.url} className="imagen" alt={`imagen blog ${titulo}`} />
        <div className="contenido">
            <h1>{titulo}</h1>
            <p className="fecha" >{formatearFecha(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link 
                to={`/blog/${url}`}
                className="enlace"
            >Leer Post</Link>
        </div>
    </article>
  )
} 

export default Post