const apiURL = 'https://run.mocky.io/v3/8818bd3c-d3c0-44f3-8e7a-1dd0c1cf2c2c';
// https://designer.mocky.io/manage/delete/8818bd3c-d3c0-44f3-8e7a-1dd0c1cf2c2c/mSZdUY48NbVdm5GG70rwgcyMbSmmP4cZDIfP
async function fetchData() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        const courses = data.courses;
        const cities = data.cities;

        const coursesDropdown = document.getElementById('courses');
        const citiesDropdown = document.getElementById('cities');

        let counter = 1;

        courses.forEach(course => {
            const option = document.createElement('option');
            option.value = counter;
            option.textContent = course;
            coursesDropdown.appendChild(option);

            counter++;
        });

        counter = 1;

        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = counter;
            option.textContent = city;
            citiesDropdown.appendChild(option);

            counter++;
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function validatePhone(event) {
    var phoneInput = document.getElementById('phone').value.trim().replace(/\s/g, '');

    var phonePattern = /^5[0-9]{9}$/;

    if (!phonePattern.test(phoneInput)) {
        alert('Please enter a valid Turkish phone number in the format: 5XX XXX XX XX');
        event.preventDefault();
    }
}

function validateEmail(event) {
    var emailInput = document.getElementById('email').value;
    var emailPattern = /^[a-z0-9]+@[a-z0-9-]+\.[a-z]{2,}(\.[a-z]{2,})?$/;

    if (!emailPattern.test(emailInput)) {
        alert('Please enter a valid email address');
        event.preventDefault();
    }
}
function checkDropDownSelection(event){
        const dropdown1 = document.getElementById('courses');
        const dropdown2 = document.getElementById('cities');
        const dropdown3 = document.getElementById('hours');

        if (dropdown1.value == '0' || dropdown2.value == '0' || dropdown3.value == '0') {
            alert('Please select valid options from all dropdown menus.');
            event.preventDefault();
        }
}

function closeAd() {
    document.getElementById('ad').style.display = 'none';
}
