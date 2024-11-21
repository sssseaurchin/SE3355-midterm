
function validatePhone() {
    var phoneInput = document.getElementById('phone').value;
    var phonePattern = /^\+90\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;

    if (!phonePattern.test(phoneInput)) {
        alert('Please enter a valid Turkish phone number in the format: +90 555 123 45 67');
    }
}

function closeAd() {
    document.getElementById('ad').style.display = 'none';
}
