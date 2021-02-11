/* eslint-disable jsx-a11y/img-redundant-alt */
  import { Link } from 'react-router-dom';

function Item ({ id , title, price, pictureUrl }) {

    return (
        <div className="card" >
            <img src={pictureUrl} className="card-img-top" alt="Card image cap" />
                <div className="card-block" key={id} >
                    <h4 className="card-title">{`${title}: $${price}`}</h4>
                     <input className="add-to-cart btn btn-primary" type="submit" value="Agregar" />
                </div>
            <li>
              <Link to={'/item'} >
                Ir al Detalle de Producto
              </Link>
            </li>
        </div>
    )
}

export default Item;