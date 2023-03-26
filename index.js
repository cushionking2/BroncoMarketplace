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
      } else {
        event.target.classList.remove('bx-bookmark-alt');
        event.target.classList.add('bx-bookmark');
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


categories = ["appliances", "clothing", "electronics", "furniture"];

function filterAppliances() {
    var appliances_item = document.getElementsByClassName("appliances");
    for (var i = 0; i < appliances_item.length; i++) {
        appliances_item[i].style.display = "";
    }

    for (var i = 0; i < categories.length; i++) {
        if(categories[i] != "appliances") {
            var hide_items = document.getElementsByClassName(categories[i]);
            for (var j = 0; j < hide_items.length; j++) {
                hide_items[j].style.display = "none";
            }
        }
    }
}

function filterClothing() {
    var clothing_item = document.getElementsByClassName("clothing");
    for (var i = 0; i < clothing_item.length; i++) {
        clothing_item[i].style.display = "";
    }

    for (var i = 0; i < categories.length; i++) {
        if(categories[i] != "clothing") {
            var hide_items = document.getElementsByClassName(categories[i]);
            for (var j = 0; j < hide_items.length; j++) {
                hide_items[j].style.display = "none";
            }
        }
    }
}

function filterElectronics() {
    var electronics_item = document.getElementsByClassName("electronics");
    for (var i = 0; i < electronics_item.length; i++) {
        electronics_item[i].style.display = "";
    }

    for (var i = 0; i < categories.length; i++) {
        if(categories[i] != "electronics") {
            var hide_items = document.getElementsByClassName(categories[i]);
            for (var j = 0; j < hide_items.length; j++) {
                hide_items[j].style.display = "none";
            }
        }
    }
}

function filterFurniture() {
    var furniture_item = document.getElementsByClassName("furniture");
    for (var i = 0; i < furniture_item.length; i++) {
        furniture_item[i].style.display = "";
    }

    for (var i = 0; i < categories.length; i++) {
        if(categories[i] != "furniture") {
            var hide_items = document.getElementsByClassName(categories[i]);
            for (var j = 0; j < hide_items.length; j++) {
                hide_items[j].style.display = "none";
            }
        }
    }
}