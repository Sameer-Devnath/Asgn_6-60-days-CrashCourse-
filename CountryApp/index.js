let container = document.getElementById("container");
let selectTag = document.getElementById("select");

selectTag.addEventListener("change" , function(){
    console.log(selectTag.value);
    fetchData(selectTag.value);           //ascending or descending
})

// Asynchronus function data-Fetch
async function fetchData(order){
    let API_Link = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";

    if(order != undefined){
        API_Link += "?sort=population&order=" + order;
    }

    try {
        let res = await fetch(API_Link);
        let data = await res.json();
        console.log(data.data);
        showData(data.data);
    } catch (error) {
        console.log(error);
    }
}
fetchData();

// ShowData function, creating divs and all the elements inside
function showData(data){
    container.innerHTML = "";
    data.forEach(element => {
        let countryDiv = document.createElement("div");
        countryDiv.className = "countryDiv";

        let country = document.createElement("h3");
        country.innerHTML = element.country;

        let id = document.createElement("p");
        id.innerHTML = element.id;
        id.id = "idPtag";

        let rank = document.createElement("h4");
        rank.innerHTML = element.Rank;

        let population = document.createElement("p");
        population.innerHTML = element.population;

        countryDiv.append(rank , country , id , population);
        container.appendChild(countryDiv);
    });
}