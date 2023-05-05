let speedTypingTest = document.getElementById("speedTypingTest");
let timerE1 = document.getElementById("timer");

let quoteDisplayE1 = document.getElementById("quoteDisplay");

let resultE1 = document.getElementById("result");

let textAreaE1 = document.getElementById("quoteInput");

let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

let spinnerE1 = document.getElementById("spinner");

function getQuotation() {
    spinnerE1.classList.add("d-none");
    let url = "https://apis.ccbp.in/random-quote";

    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let {
                content
            } = jsonData;
            //console.log(content);
            quoteDisplayE1.textContent = content;
        })
}
getQuotation();

let counter = 0;
let uniqueId = setInterval(function() {
    counter = counter + 1;
    timerE1.textContent = counter;
}, 1000);

resetBtn.addEventListener("click", function(event) {
    spinnerE1.classList.remove("d-none");
    let counter = 0;
    let uniqueId = setInterval(function() {
        counter = counter + 1;
        timerE1.textContent = counter;
    }, 1000);
    textAreaE1.value = "";
    getQuotation();
});


submitBtn.addEventListener("click", function(event) {
    if (textAreaE1.value === quoteDisplayE1.textContent) {
        resultE1.textContent = "You Typed in" + counter;
        clearInterval(uniqueId)
    } else {
        resultE1.textContent = "You typed incorrect sentence";
    }
})