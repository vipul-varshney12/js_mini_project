const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // Clear previous results
    results.innerHTML = '';

    // Validate height and weight inputs
    if (isNaN(height) || height <= 0) {
        results.innerHTML = 'Please give a valid height.';
        return; // Exit the function to prevent further processing
    }

    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please give a valid weight.';
        return; // Exit the function to prevent further processing
    }

    // Calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    // Show BMI result
    results.innerHTML = `<span>Your BMI: ${bmi}</span><br>`;
    
    // Determine BMI category
    if (bmi < 18.5) {
        results.innerHTML += 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        results.innerHTML += 'Normal range';
    } else {
        results.innerHTML += 'Overweight';
    }
});
