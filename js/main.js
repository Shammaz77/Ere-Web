// fade in animation 
const fadeElems = document.querySelectorAll('.fade-in-element');

function checkFade() {
    fadeElems.forEach((elem) => {
        const rect = elem.getBoundingClientRect();
        const triggerPoint = window.innerHeight - elem.clientHeight / 2;

        if (rect.top < triggerPoint) {
            elem.style.opacity = 1;
            elem.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade); // For the initial check
// ========================================    ===========================================



// document.addEventListener("DOMContentLoaded", function () {
//     let upto = 0;

//     function updated() {
//         let count = document.getElementById("counter");
//         count.innerHTML = ++upto + "+";
//         if (upto === 5) {
//             clearInterval(counts);
//         }
//     }

//     // Set the interval with a delay of 40 milliseconds


// });

// document.addEventListener("DOMContentLoaded", function () {
//     let upto1 = 0;

//     function updated1() {
//         let count = document.getElementById("counter1");
//         count.innerHTML = ++upto1 + "+";
//         if (upto1 === 5) {
//             clearInterval(counts1);
//         }
//     }

//     let counts1 = setInterval(updated1, 40);

//     let upto2 = 0;

//     function updated2() {
//         let count = document.getElementById("counter2");
//         count.innerHTML = ++upto2 + "+";
//         if (upto2 === 100) {
//             clearInterval(counts2);
//         }
//     }

//     let counts2 = setInterval(updated2, 40);

//     let upto3 = 0;

//     function updated3() {
//         let count = document.getElementById("counter3");
//         count.innerHTML = ++upto3 + "+";
//         if (upto3 === 2) {
//             clearInterval(counts3);
//         }
//     }

//     let counts3 = setInterval(updated3, 40);
// });







function toggleCartt(){
    document.querySelector('.sidebar').classList.toggle('open-cart');
    }
              // Get references to the file input and button
                      const fileInput = document.getElementById('fileInput');
          const uploadButton = document.getElementById('uploadButton');
          const fileNameDisplay = document.getElementById('fileName');
  
          // Add a click event listener to the button
          uploadButton.addEventListener('click', () => {
              // Programmatically trigger a click event on the hidden file input
              fileInput.click();
          });
  
          // Add an event listener to the file input to handle file selection
          fileInput.addEventListener('change', () => {
              // Get the selected file (if any)
              const selectedFile = fileInput.files[0];
  
              // Display the selected file name
              if (selectedFile) {
                  fileNameDisplay.textContent = `Selected File: ${selectedFile.name}`;
              } else {
                  fileNameDisplay.textContent = 'No file selected';
              }
  
              // You can now send the selected file to your server using AJAX or other methods for further processing.
          });


