const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Loading Spinner Shown
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Remove Loading Spinner
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show New Quote
function newQuote() {
  loading();
  // Reset image
  refreshImage('person', "https://thispersondoesnotexist.com/image")
  setTimeout(() => {const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check Quote length to determine styling
    if (quote.text.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();},200)
  // Pick a random quote from array
  
}
function refreshImage(imgElement, imgURL){    
  // create a new timestamp 
  var timestamp = new Date().getTime();  

  var el = document.getElementById(imgElement);  

  var queryString = "?t=" + timestamp;    
 
  el.src = imgURL + queryString;    
} 
// Get Quotes From API
async function getQuotes() {
  newQuote();
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);

// On Load
getQuotes();
