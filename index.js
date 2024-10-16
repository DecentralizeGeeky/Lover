let yes = document.getElementById('yes_btn');
let no = document.getElementById('no_btn');
let display = 0;

yes.onclick = function() {
    alert('I Love You Already !!! ');
}

no.addEventListener ('mouseover', no_f);

function no_f() {
    if (display == 0) {
        no.style.position = 'relative';
        no.style.left = '-187px';
        no.style.top = '50px';
        display = 1;
    }
    else if (display == 1) {
        no.style.position = 'relative';
        no.style.left = '0px';
        no.style.top = '100px';
        display = 2;
    }
    else if (display == 2) {
        no.style.position = 'relative';
        no.style.left = '-187px';
        no.style.top = '150px';
        display = 3;
    }
    else if (display == 3) {
        no.style.position = 'relative';
        no.style.left = '0px';
        no.style.top = '200px';
        display = 4;
    }
    else if (display == 4 ) {
        no.style.position = 'relative';
        no.style.left = '-187px';
        no.style.top = '250px';
        display = 5;
    }
    else if (display == 5) {
        no.style.position = 'relative';
        no.style.top = display = 0;
        no.style.left = display = 0;
        display = 0;
    } 
}