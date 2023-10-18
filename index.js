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

(function (m, a, z, e) {
  var s, t;
  try {
    t = m.sessionStorage.getItem('maze-us');
  } catch (err) {}

  if (!t) {
    t = new Date().getTime();
    try {
      m.sessionStorage.setItem('maze-us', t);
    } catch (err) {}
  }

  s = a.createElement('script');
  s.src = z + '?t=' + t + '&apiKey=' + e;
  s.async = true;
  a.getElementsByTagName('head')[0].appendChild(s);
  m.mazeUniversalSnippetApiKey = e;
})(window, document, 'https://snippet.maze.co/maze-universal-loader.js', '6ba0fb1e-b702-4573-b5a3-cdb571976603');
