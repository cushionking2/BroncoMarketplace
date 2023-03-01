// let data = [
//     "clothes hangers",
//     "heater",
//     "bedside table",
//     "monitor",
//     "advanced calculus textbook"
// ];

let searchForm = document.getElementById('search-form');
let searchResultList = document.querySelectorAll('.result-item');
let result = document.getElementById('search-results');
let searchValue=result.getElementsByTagName("p");

searchForm.addEventListener("keyup", function() {
    for (var i=0; i <searchValue.length; i++) {
        console.log(searchForm.value);

        let value = searchResultList[i].getElementsByTagName('p')[0];

        let filterValue = value.textContent || value.innerHTML;

        if (filterValue.toUpperCase().indexOf(searchForm.value.toUpperCase()) > -1) {
            searchResultList[i].style.display = "";
        } else {
            searchResultList[i].style.display = "none";
        }

    }
})





