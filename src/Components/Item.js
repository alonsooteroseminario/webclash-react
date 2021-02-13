/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function Item ({ id , title, price, pictureUrl }) {

    return (
        <div className="card" >
            <img src={pictureUrl} className="card-img-top" alt="Card image cap" width="25%" height="25%" />
                <div className="card-block" key={id} >
                    <h4 className="card-title">{`${title}: $${price}`}</h4>
                     {/* <input className="add-to-cart btn btn-primary" type="submit" value="Agregar" /> */}
                     <ItemCount initial="0" stock="5" />
                </div>
                {/* este tiene que ser dinamico */}
              <Link to={`/item/${id}`} >
                <div className="add-to-cart">
                   <input className="add-to-cart btn btn-primary" type="submit" value="Ir al Detalle de Producto" />
                </div>
              </Link>
        </div>
    )
}

export default Item;