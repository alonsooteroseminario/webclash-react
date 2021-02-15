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
                setUsers([              
                    {
                      categoriaId: "frutas",
                      id: 1,
                      title: "naranja",
                      price: 20,
                      pictureUrl: "http://www.azspagirls.com/files/2010/09/orange.jpg",
                      description: "La naranja es un fruto hesperidio (pulpa carnosa entre el endocarpio y las semillas en forma de gajos llenos de zumo), de corteza lisa y más o menos endurecida con vesículas oleosas. Tiene sabor dulce o ligeramente agrio, dependiendo de la variedad.",
                    },
                    {
                      categoriaId: "frutas",
                      id: 2,
                      title: "platano",
                      price: 32,
                      pictureUrl: "http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg",
                      description: "Plátano - Información general. El plátano o banano es una fruta amarilla, de forma alargada, que encontramos en el mercado en grupos de tres a veinte, de forma similar a un pepino triangular, oblongo y normalmente de color amarillo. ... El plátano es rico en fibra, potasio y algunas vitaminas beneficiosas para la salud.",
                    },      {
                      categoriaId: "frutas",
                      id: 3,
                      title: "limón",
                      price: 51,
                      pictureUrl: "https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg",
                      description: "El limón es redondo y ligeramente alargado, pertenece a la familia de los agrios y por tanto comparte muchas de las características de otras especies de cítricos, como es tener una piel gruesa. La pulpa es color amarillo pálido, jugosa y de sabor ácido dividida en gajos.",
                    },
                    {
                      categoriaId: "zapatillas",
                      id: 4,
                      title: "Zapatillas Nike",
                      price: 20,
                      pictureUrl: "https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000200436036_01_ab.jpg",
                      description: "Estamos realizando entregas con normalidad, pero tene presente que MercadoEnvíos puede registrar algunas demoras ya que las logísticas tienen como prioridad la entrega de material esencial. Esta batalla la ganamos entre todos!",
                    },
                    {
                      categoriaId: "zapatillas",
                      id: 5,
                      title: "Zapatillass Adidas",
                      price: 32,
                      pictureUrl: "https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000199041327_pepe-pls30500_245_zo_00.jpg",
                      description: "Todo el instinto del diseño de adidas para las canchas, ahora adaptado a las calles. Dejá de perseguir y tomá el control con las zapatillas Predator Mutator 20.3. Está mutación para las calles de los icónicos botines tiene un exterior de corte bajo que sujeta el pie. La mediasuela con amortiguación hace más cómodos y receptivos tus pasos.",
                    },      
                    {
                      categoriaId: "zapatillas",
                      id: 6,
                      title: "Zapatillas Rebook",
                      price: 51,
                      pictureUrl: "https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000206955159_1_.jpg",
                      description: "Vive una experiecia única con lo nuevo en zapatillas que trae la exclusiva marca Adidas. Sentirás comodidad y flexibilidad a la hora de caminar o entrenar; ya que estas zapatillas están elaboradas con los mejores materiales y tecnología de punta.Estás a un solo click de tu par favorito.",
                    },]
                )
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
            <ItemCount initial="0" stock="5" />
            <ItemDetail id={user.id} description={user.description} title={user.title} price={user.price} pictureUrl={user.pictureUrl} />
        </div>
        )



}

export default ItemDetailContainer;