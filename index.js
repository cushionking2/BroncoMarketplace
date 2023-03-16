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

document.querySelectorAll('.result-item.buying-item, .result-item.selling-item').forEach(function(card) {
    card.addEventListener('click', function(event) {
      const cardUrl = event.currentTarget.dataset.cardUrl;
      window.location.href = cardUrl;
    });
  });

document.querySelectorAll('.custom-bookmark').forEach(function(bookmarkIcon) {
    bookmarkIcon.addEventListener('click', function(event) {
      event.stopPropagation();
      if (event.target.classList.contains('bx-bookmark')) {
        event.target.classList.remove('bx-bookmark');
        event.target.classList.add('bx-bookmark-alt');
        event.target.style.color = 'yellow';
      } else {
        event.target.classList.remove('bx-bookmark-alt');
        event.target.classList.add('bx-bookmark');
        event.target.style.color = '';
      }
    });
  });

searchForm.addEventListener("keyup", function() {
    if (searchForm.value.length === 0){
        if (document.getElementById('color_mode').checked) {
            setToSell();
        } else {
            setToBuy();
        }
    } else {
        for (var i=0; i <searchValue.length; i++) {
            console.log(searchForm.value);

            let value = searchResultList[i].getElementsByTagName('p')[1];

            let filterValue = value.textContent || value.innerHTML;

            if (filterValue.toUpperCase().indexOf(searchForm.value.toUpperCase()) > -1) {
                searchResultList[i].style.display = "";
            } else {
                searchResultList[i].style.display = "none";
            }
        }
    }
})

checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        setToSell();
    } else {
        setToBuy();
    }
})


function resetFilter() {
    let res = document.getElementsByClassName('result-item');
    for (var i = 0; i < res.length; i++) {
        res[i].style.display = "";
     }
}



function setToBuy() {
    var s_item = document.getElementsByClassName("selling-item");
    for (var i = 0; i < s_item.length; i++) {
       s_item[i].style.display = "";
    }

    var b_item = document.getElementsByClassName("buying-item");
    for (var i = 0; i < b_item.length; i++) {
        b_item[i].style.display = "none";
     }
}


function setToSell() {
    var s_item = document.getElementsByClassName("selling-item");
    for (var i = 0; i < s_item.length; i++) {
       s_item[i].style.display = "none";
    }

    var b_item = document.getElementsByClassName("buying-item");
    for (var i = 0; i < b_item.length; i++) {
        b_item[i].style.display = "";
     }
}