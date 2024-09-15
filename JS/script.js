const myButton = document.getElementById("d-button");

    
    function classChange() {
    document.getElementById("label-container").classList.add('label');
    };
    myButton.addEventListener('click', classChange);