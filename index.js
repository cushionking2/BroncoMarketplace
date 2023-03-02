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
const checkbox = document.getElementById('color_mode')


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

checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        var s_item = document.getElementsByClassName("selling-item");
        for (var i = 0; i < s_item.length; i++) {
           s_item[i].style.display = "none";
        }

        var b_item = document.getElementsByClassName("buying-item");
        for (var i = 0; i < b_item.length; i++) {
            b_item[i].style.display = "";
         }
    } else {
        var s_item = document.getElementsByClassName("selling-item");
        for (var i = 0; i < s_item.length; i++) {
           s_item[i].style.display = "";
        }

        var b_item = document.getElementsByClassName("buying-item");
        for (var i = 0; i < b_item.length; i++) {
            b_item[i].style.display = "none";
         }
    }
})


function resetFilter() {
    let res = document.getElementsByClassName('result-item');
    for (var i = 0; i < res.length; i++) {
        res[i].style.display = "";
     }
}