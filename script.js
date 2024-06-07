document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dob = document.getElementById('dob').value;
    if (dob) {
        const age = calculateAge(new Date(dob));
        document.getElementById('result').textContent = `Your age is ${age} years.`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid date of birth.';
    }
});

function calculateAge(dob) {
    const diffMs = Date.now() - dob.getTime();
    const ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
}
