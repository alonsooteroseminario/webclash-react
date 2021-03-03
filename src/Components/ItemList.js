import React, { useEffect, useState } from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';

function ItemList ({ home }) {

    const [users, setUsers] = useState([]);
    const [Home] = useState({home});
    console.log(Home.home);

    const { categoriaID } = useParams();
    const { ID } = useParams();


    useEffect( () => {
      //Conexion a la bd
      const baseDeDatos = getFirestore();

      // Guardamos la referencia de la coleccion que queremos tomar
      const itemCollection = baseDeDatos.collection('items');
      // const item = itemCollection.doc(idDocumento);
      
      // Tomando los datos
      itemCollection.get().then( (value) => {
        let aux = value.docs.map( element => { 
          return {...element.data(), id:element.id}
        })
        console.log(aux);
        setUsers(aux);
        
      })
    },[])



    useEffect( () => {
      
      // aqui va el registro de los eventos SIEMPRE

      let productosAMostrar = users.map( le => {
        if((le.id.toString() === ID) && (le.categoriaId.toString() === "frutas")){
          return setUsers(le)
        }else if ((le.id.toString() === ID) && (le.categoriaId.toString() === "zapatillas")) {
          return setUsers(le)
        }
        else{
          return null;
        }
      })

      console.log(productosAMostrar)
      return () => {
        
        // aqui se terminan o desregristran los eventos SIEMPRE

      }
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ID]);

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