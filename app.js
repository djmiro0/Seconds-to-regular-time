function formatDuration(seconds) {
    if (seconds === 0) return "now";
    
    const units = {
    year: 365 * 24 * 3600,
    day: 24 * 3600,
    hour: 3600,
    minute: 60,
    second: 1
    };
    
    const parts = [];
    
    for (const [unit, value] of Object.entries(units)) {
    const unitAmount = Math.floor(seconds / value);
    if (unitAmount > 0) {
    parts.push(unitAmount + " " + unit + (unitAmount > 1 ? "s" : ""));
    seconds -= unitAmount * value;
    }
    }
    
    if (parts.length === 1) {
    return parts[0];
    } else if (parts.length === 2) {
    return parts.join(" and ");
    } else {
    return parts.slice(0, -1).join(", ") + " and " + parts.slice(-1);
    }
    }
    
    document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    const inputSeconds = document.getElementById('fileToUpload').value;
    const resultText = formatDuration(parseInt(inputSeconds));
    
    // Create a new h3 element to display the result
    const resultElement = document.createElement('h3');
    resultElement.textContent = resultText;
    
    // Append the result to the div with id "result"
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ''; // Clear previous result
    resultContainer.appendChild(resultElement);
    });