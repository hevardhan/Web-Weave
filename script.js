// Get the div element
var divElement = document.getElementById("logo-left");
var divElement1 = document.getElementById("logo-right");
var divElement2 = document.getElementById("intro");

// Add the CSS class with transition properties
divElement.classList.add("transition");
divElement1.classList.add("transition");

// Modify the CSS properties you want to animate
// divElement.style.opacity = "0";
divElement.style.transform = "translateX(-1000px)"; // Example translation
divElement1.style.transform = "translateX(1000px)"; // Example translation
// divElement2.style.transform = "translateX(1000px)"; // Example translation

setTimeout(function() {
    // Delete the div after 3 seconds
    divElement2.remove();
    divElement.remove();
    divElement1.remove();
}, 1500); 

window.onload = function() {
    document.getElementById('searchbar').focus();
}
document.addEventListener("DOMContentLoaded", function() {
    var searchBar = document.getElementById("searchbar");
    var sentences = [
        "What is GDSC ?",
        "GDSC में लोग क्या करते हैं ?",
        "What is the benefit of being GDSC Member ?",
        "How to join GDSC ?",
        "Who is the Lead of this club ?",
        // Add more sentences as needed
    ];

    var index = 0;
    var typingSpeed = 100; // Speed at which characters are typed (milliseconds)
    var deletingSpeed = 50; // Speed at which characters are deleted (milliseconds)
    var sentenceDisplayTime = 1000; // Time to display each sentence (milliseconds)

    // Function to update the search bar with the next sentence
    function updateSearchBar() {
        var sentence = sentences[index];
        var currentText = "";

        // Typing animation
        var typingInterval = setInterval(function() {
            if (currentText.length < sentence.length) {
                currentText += sentence.charAt(currentText.length);
                searchBar.value = currentText;
            } else {
                clearInterval(typingInterval);

                // Wait for sentence display time
                setTimeout(function() {
                    // Deleting animation
                    var deletingInterval = setInterval(function() {
                        if (currentText.length > 0) {
                            currentText = currentText.slice(0, -1);
                            searchBar.value = currentText;
                        } else {
                            clearInterval(deletingInterval);

                            // Move to the next sentence
                            index = (index + 1) % sentences.length;

                            // Schedule next update after 1 second
                            setTimeout(updateSearchBar, 1000);
                        }
                    }, deletingSpeed);
                }, sentenceDisplayTime);
            }
        }, typingSpeed);
    }

    // Update the search bar initially
    updateSearchBar();
});

window.addEventListener('scroll',function(){
    var nav = document.getElementById("hamburger-nav")
    nav.classList.toggle("sticky",window.scrollY > 0);
})
window.addEventListener('scroll',function(){
    var nav = document.querySelector('nav')
    nav.classList.toggle("sticky",window.scrollY > 0);
})


let cards = document.querySelectorAll(".card-element");
let stackArea = document.querySelector(".stack-area");
// let cardPhoto = document.querySelectorAll(".card-photo");

function rotateCards() {
  let angle = 0;
  cards.forEach((card) => {
    if (card.classList.contains("active")) {
      card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
      card.style.opacity = 0
    } else {
      card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      card.style.opacity = 100
      angle = angle - 10;
    }
  });
}

// function checkMediaQuery() {
//   if (window.matchMedia("(max-width: 600px)").matches) {
//       // If true, execute the function
//       rotateCards();
//   } else {
//       // If false, do nothing (or handle differently if needed)
//       console.log("Function disabled for this media query.");
//   }
// }

// checkMediaQuery();

rotateCards();

// if (window.matchMedia("(min-width: 600px)").matches){
  window.addEventListener("scroll", () => {
    let proportion =
      stackArea.getBoundingClientRect().top / window.innerHeight;
    if (proportion <= 0) {
      let n = cards.length;
      let index = Math.ceil((proportion * n) / 2);
      index = Math.abs(index) - 1;
      for (let i = 0; i < n; i++) {
        if (i <= index) {
          cards[i].classList.add("active");
        } else {
          cards[i].classList.remove("active");
        }
      }
      // checkMediaQuery();
      rotateCards();
    }
  });
// }

//Code for responsiveness

function adjust() {
  let windowWidth = window.innerWidth;
  let left = document.querySelector(".left");
  left.remove();
  if (windowWidth < 800) {
    stackArea.insertAdjacentElement("beforebegin", left);
  } else {
    stackArea.insertAdjacentElement("afterbegin", left);
  }
}
adjust();

//detect Resize

window.addEventListener("resize", adjust);

let scrollArea = document.querySelector('row1');

window.addEventListener("scroll", () => {
  let proportion =
    scrollArea.getBoundingClientRect().top / window.innerHeight;
  if (proportion <= 0) {
    let n = cards.length;
    let index = Math.ceil((proportion * n) / 2);
    index = Math.abs(index) - 1;
    for (let i = 0; i < n; i++) {
      if (i <= index) {
        cards[i].classList.add("active");
      } else {
        cards[i].classList.remove("active");
      }
    }
    rotateCards();
  }
});

function togglemenu(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}

