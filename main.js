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


function renderImageAPI(id,data){
    if(data != undefined && data.length != 0){
        let result = data.map((val, i, arr) => {
             return  `
             <div class="category__item">
                    <img src="${val.link}" alt="" class="category__image">
                    <h3 class="category__name">DieuXinhDep</h3>
                    <a href="#" class="category__link">
                            CC Certified
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a> 
            </div>
             `
         } )
         document.getElementById(id).innerHTML  = result.join('');
         return false;
    }
}