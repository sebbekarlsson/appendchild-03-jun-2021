const button = document.getElementById("button");
const inputField = document.getElementById("input-field");
const resultsDiv = document.getElementById("results");

// <div class="result-item">Here is some fact bla bla bla</div>
function createResultElement(fact) {
    const element = document.createElement("div");
    element.className = "result-item";
    element.innerText = fact;

    return element;
}

function whenButtonPressed() {
    const inputNumber = inputField.value;

    fetch(`http://numbersapi.com/${inputNumber}`).then(function(response){
        response.text().then(function(data){
            const element = createResultElement(data);
            resultsDiv.appendChild(element);
        })
    });
}

button.addEventListener("click", whenButtonPressed);