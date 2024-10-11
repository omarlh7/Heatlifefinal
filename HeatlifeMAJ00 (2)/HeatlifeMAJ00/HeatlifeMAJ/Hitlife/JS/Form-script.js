document.getElementById('appointment-form').addEventListener('submit', function(event) {
    let isValid = true;
    const formElements = this.elements;

    for (let element of formElements) {
        if (element.type !== 'submit') {
            if (element.value.trim() === '') {
                isValid = false;
                element.style.border = '2px solid red';
            } else {
                element.style.border = '1px solid #ccc';
            }
        }
    }

    if (!isValid) {
        alert('Veuillez remplir tous les champs.');
        event.preventDefault();
    }
});
