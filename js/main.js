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


