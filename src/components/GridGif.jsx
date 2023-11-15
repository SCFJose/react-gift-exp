import React from 'react'
import { GifItem } from './GifItem';
import { useFetchGif } from '../Hooks/UseFetchGif';

export const GridGif = ({category}) => {

    /*
    const [images, setImages] = useState([]); //arreglo de imagenes obtenidos en la petición

    useEffect(() => {
        getGifs(category)
        .then(x => setImages(x));
    }, [ ]); //Cuando las dependencias están vacías, indica que solo se va a renderizar una vez (al cargar)
    */

   //Otra forma de hacer todo lo de arriba pero con mas cositas, es a traves de los custom hooks
   const {images, isLoading} = useFetchGif(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2>)
            }
            <div className='card-grid'>
                {
                        //images.map(({id, title, url}) => (
                        //<GifItem key = {id} title = {title} url = {url}/>
                        //Otra forma para enviar los elementos de image sin tener que definir un atributo para cada uno
                        //es esparciendolo
                    images.map((img) => (
                        <GifItem key = {img.id} {...img} /> //de esta forma solo obtenemos los que deseamos en el otro componente
                   )) 
                }
            </div>
        </>
    )
}
