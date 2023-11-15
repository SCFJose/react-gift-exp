export const getGifs = async (categories) =>{
    
    const endpoint = 'https://api.giphy.com/v1/gifs/search';
    const api_key= 'N7yuWrVXmPAFt02XSUmD4s1mznsqaHO3'
    const url = `${endpoint}?api_key=${api_key}&q=${categories}&limit=10`;
    const resp = await fetch(url);

    const {data} = await resp.json();
    //Toda esta info viene del endpoint
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}