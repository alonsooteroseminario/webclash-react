import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFirestore } from '../firebase';

const ItemDetailContainer = (props) => {

    const { ID } = useParams();

    const [users, setUsers] = useState([]);

    const [user, getUser] = useState('');

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

        // eslint-disable-next-line no-unused-vars
        let productosAMostrar = users.map( le => {
            if((le.id.toString() === ID) && (le.categoriaId.toString() === "frutas")){
                return getUser(le)
            }else if ((le.id.toString() === ID) && (le.categoriaId.toString() === "zapatillas")) {
                return getUser(le)
            }
            else{
                return null;
            }
              })
        
      })
    },[ID, users])

    useEffect( () => {

      let productosAMostrar = users.map( le => {
        if((le.id.toString() === ID) && (le.categoriaId.toString() === "frutas")){
          return getUser(le)
        }else if ((le.id.toString() === ID) && (le.categoriaId.toString() === "zapatillas")) {
          return getUser(le)
        }
        else{
          return null;
        }
      })

      console.log(productosAMostrar)
      return () => {
        
      }
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ID]);


        return (
        <div style={{ background: 'white' }}>
            <h3>{props.greeting}</h3>
            <ItemDetail id={user.id} description={user.description} title={user.title} price={user.price} pictureUrl={user.pictureUrl} />
        </div>
        )



}

export default ItemDetailContainer;