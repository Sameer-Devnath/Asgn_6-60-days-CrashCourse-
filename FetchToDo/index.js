let container = document.getElementById("container");

async function fetchTodo(){
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos");
        let data = await res.json();
        console.log(data);
        showData(data);
    } catch (error) {
        console.log(error);
    }
}
// fetchTodo();

function showData(data){
    data.forEach(element => {
        let divs = document.createElement("div");
        divs.className = "divs";
        
        let title = document.createElement("h2");
        title.innerHTML = element.title;

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type" , "checkbox");
        checkbox.checked = element.completed;

        divs.append(title , checkbox);
        container.appendChild(divs);
    });
}