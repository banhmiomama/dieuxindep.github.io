const albumID = 'jgv3Zpc';
const albumUrl = "https://api.imgur.com/3/album/" + albumID + "/images";



async function getData(url = ""){
    const rep = await fetch(url,{
        method: "GET",
        headers: {
            'Authorization': 'Client-ID 6e3e1748bacf91d'
        }
    })
    return rep.json();
}