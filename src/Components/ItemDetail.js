/* eslint-disable jsx-a11y/alt-text */
function ItemDetail ({ id , description, title, price, pictureUrl }) {

    return (
      <div className={'item item-' + id} key={id} >
        <img src={pictureUrl} />
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
      </div>
    )
}

export default ItemDetail;