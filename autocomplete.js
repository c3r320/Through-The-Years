/*for options*/
function closeOptions() {
    $('#optionsTable').collapse('hide');
}

/*for reviews*/
document.addEventListener("DOMContentLoaded", function () {
    const reviewsContainer = document.querySelector(".reviews-container");
    const reviews = document.querySelectorAll(".review");
    const arrowLeft = document.querySelector(".arrow.left");
    const arrowRight = document.querySelector(".arrow.right");
  
    let currentIndex = 0;
    const maxIndex = Math.ceil(reviews.length / 3) - 1;
  
    function updateReviews() {
      const containerWidth = reviewsContainer.offsetWidth;
      const reviewWidth = containerWidth / 3;
  
      reviews.forEach((review, index) => {
        if (index >= currentIndex * 3 && index < (currentIndex + 1) * 3) {
          review.style.display = "block";
          review.style.width = reviewWidth + "px";
        } else {
          review.style.display = "none";
        }
      });
    }
    arrowLeft.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateReviews();
      }
    });
  
    arrowRight.addEventListener("click", function () {
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateReviews();
      }
    });
  
    updateReviews();
  });
  
  
  /*for login*/
      window.addEventListener('scroll', function() {
    var logo = document.querySelector('.logo');
    var loginIcon = document.querySelector('.login i');
    if (window.scrollY > 0) {
      logo.style.opacity = '0';
      loginIcon.style.opacity = '0';
    } else {
      logo.style.opacity = '1';
      loginIcon.style.opacity = '1';
    }
  });
  
  /*for search bar*/
let availableKeywords = [
    'Templates',
    'Videos',
    'Contacts',
    'Photos',
    'Where to find other templates',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = []
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display (result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join ('') + "</ul>"
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
function selectInput(keyword){
    const selectedKeyword = keyword.innerHTML;
    switch(selectedKeyword) {
        case 'Templates':
            window.location.href = 'blank.html';
            break;
        case 'Videos':
            window.location.href = 'videos.html';
            break;
        case 'Contacts':
            window.location.href = 'contacts.html';
            break;
        case 'Photos':
            window.location.href = 'photos.html';
            break;
        case 'Where to find other templates':
            window.location.href = 'where_to_find_templates.html';
            break;
        default:
            break;
    }
}
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}
