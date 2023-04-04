
const your_api_key ="bdJSnlDrjaALGJmJsSta9Eb5JNbBq7cBuzCPch4S";
const locatStorage = [];

async function getText(date) {
     const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${your_api_key}`);
        const data = await response.json();
        const imageUrl = data.url;
        const head = data.title;
        const context =data.explanation;
        document.getElementById('contentId').innerHTML = `<h1>"${head}"</h1>
        <img src="${imageUrl}"/>
        <p>""${context}</p>`;

}
function getCurrentImageOfTheDay(){
    const currDate = new Date().toISOString().split("T")[0];
    getText(currDate);
}
getCurrentImageOfTheDay();

function getImageOfTheDay(){
    const date =document.getElementById("search-input").value;
    getText(date);
    saveSearch(date);
}

function saveSearch(date){
    if(date!=''){
    locatStorage.push(date);
    console.log(locatStorage);
    addSearchToHistory(date);
    }
}

function addSearchToHistory(date){
    var ul = document.getElementById("listId");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(date));
    li.addEventListener('click', function() {
        getText(date);
    });
    ul.appendChild(li);
}