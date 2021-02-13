import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = (props) => {

    const { ID } = useParams();

    const getItems = () => {


        return new Promise(resolve => {
            setTimeout( () => {
                resolve('I did something')
                setUsers(
                    [{
                        id: 1,
                        title: "naranja",
                        price: 20,
                        pictureUrl: "http://www.azspagirls.com/files/2010/09/orange.jpg",
                        description: "fsdfsfsd",
                      },
                      {
                        id: 2,
                        title: "platano",
                        price: 32,
                        pictureUrl: "http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg",
                        description: "dsdffsdfsfsdf",
                      },      {
                        id: 3,
                        title: "limón",
                        price: 51,
                        pictureUrl: "https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg",
                        description: "dsfdfdfsdsfsdfsdf",
                      },]
                )
                
                
            }, 3000 )
        })


    }
    
    const [users, setUsers] = useState([]);

    const [user, getUser] = useState('');

    getItems();

    getItems().then( e => {
        console.log(e);
    })

    useEffect( () => {

      let productosAMostrar = users.map( le => {
        if(le.id.toString() === ID){
          return getUser(le)
        }else{
          return null;
        }
      })

      console.log(productosAMostrar)
      return () => {
        
      }
      
    }, [ID]);


        return (
        <div style={{ background: 'white' }}>
            <h3>{props.greeting}</h3>
            <ItemCount initial="0" stock="5" />
            <ItemDetail id={user.id} description={user.description} title={user.title} price={user.price} pictureUrl={user.pictureUrl} />
            {ID}
            {user.id}
        </div>
        )



}

export default ItemDetailContainer;