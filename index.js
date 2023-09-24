const search = () =>{
    const searchInput = document.getElementById("searchInput").value.toUpperCase;
    const artworkTitle = document.querySelectorAll("artworkTitle")

    for(var i=0; i < artworkTitle.length; i++){
        let match = product[i].getElementByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue().inedxOf(searchInput) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }
}

const searchBtn = document.getElementById("searchBtn")
searchBtn.addEventListener('click', event => {
    searchData();
});

document.getElementById("searchBtn").addEventListener("click", () => {
    let searchInput = document.getElementById("searchInput").value;
    let element = document.querySelectorAll(".artworkTitle", "artistName");
})

function checkNumber(event) {
    var aCode = event.which ? event.which : event.keyCode;

    if (aCode > 31 && (aCode < 48 || aCode > 57)) return false;
    return true;
}
