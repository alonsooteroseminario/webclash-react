import React, { useState } from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';

function ItemList ({ home }) {


    const { categoriaID } = useParams();

    const Resultado = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Se ejecuto la funcion');
            setUsers( [
              {
                categoriaId: "frutas",
                id: 1,
                title: "naranja",
                price: 20,
                pictureUrl: "http://www.azspagirls.com/files/2010/09/orange.jpg",
                description: "fsdfsfsd",
              },
              {
                categoriaId: "frutas",
                id: 2,
                title: "platano",
                price: 32,
                pictureUrl: "http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg",
                description: "fsdfsfsd",
              },      {
                categoriaId: "frutas",
                id: 3,
                title: "limón",
                price: 51,
                pictureUrl: "https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg",
                description: "fsdfsfsd",
              },
              {
                categoriaId: "zapatillas",
                id: 4,
                title: "Zapas Nike",
                price: 20,
                pictureUrl: "http://www.azspagirls.com/files/2010/09/orange.jpg",
                description: "fsdfsfsd",
              },
              {
                categoriaId: "zapatillas",
                id: 5,
                title: "Zapas Adidas",
                price: 32,
                pictureUrl: "http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg",
                description: "fsdfsfsd",
              },      
              {
                categoriaId: "zapatillas",
                id: 6,
                title: "Zapas Adidas limón",
                price: 51,
                pictureUrl: "https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg",
                description: "fsdfsfsd",
              },
            ] );
        }, 3000);

    })

    Resultado.then( e => {
        console.log(e);
        
    })


    const [users, setUsers] = useState([]);
    const [Home] = useState({home});
    console.log(Home.home);

    return (
        <div className="container">
          <div className="row">
            <div className="col">
                {users.map( el => {
                  if (el.categoriaId.toString() === categoriaID) {
                      return (
                        <Item id={el.id} title={el.title} price={el.price} pictureUrl={el.pictureUrl} />
                      );
                    }
                    else {
                      if (Home.home === true) {
                        return (
                          <Item id={el.id} title={el.title} price={el.price} pictureUrl={el.pictureUrl} />
                        );
                      }
                      else {
                        return null;
                      }
                    }
                  }
                )}
            </div>
          </div>
      </div>
    )
}



export default ItemList;