/* eslint-disable jsx-a11y/alt-text */
import ItemCount from './ItemCount';

function ItemDetail ({ id , description, title, price, pictureUrl }) {


  const onAdd = (quantityToAdd) => {
    console.log(quantityToAdd);
  }

    return (
      <div className={'item item-' + id} key={id} >
        <img src={pictureUrl} />
        <ItemCount />
          <div className='item-details'>
            <h1 className='item-name'>
              {title}
            </h1>
            <h2 className='item-price'>
              ${Number(price)}
            </h2>
            <p className='item-desc'>
              {description}
            </p>
          </div>
          <button>
            Terminar tu compra
          </button>
      </div>
    )
}

export default ItemDetail;