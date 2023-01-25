let basicPrice = document.getElementById('basicPrice');
let professionalPrice = document.getElementById('professionalPrice');
let masterPrice = document.getElementById('masterPrice');
let x = 0;

function myFunction() {
    if(x == 0) {
        basicPrice.innerText = '$19.99';
        professionalPrice.innerText = '$24.99';
        masterPrice.innerText = '$39.99';
        x = 1;
    } else {
        basicPrice.innerText = '$199.99';
        professionalPrice.innerText = '$249.99';
        masterPrice.innerText = '$399.99';
        x = 0;
    }
}