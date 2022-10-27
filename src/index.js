const change = document.querySelector('.change');
const price = document.querySelectorAll('.price');
const slider = document.querySelector('.slider');
const views = document.querySelector('.views');
const duration = document.querySelectorAll('.duration');
const progressBar = document.querySelector('.progressBar');
let check;

function calculate() {
    check = document.querySelector('.for-toggle');
    if(slider.value == 1){
        progressBar.style.width = "0";
        if(check == null){
            price[0].textContent = "$8.00";
            price[1].textContent = "$8.00";
            duration[0].textContent = "/ month";
            duration[1].textContent = "/ month";
            views.textContent = "10K pageviews"
        } else {
            price[0].textContent = "$72.00";
            price[1].textContent = "$72.00";
            duration[0].textContent = "/ year";
            duration[1].textContent = "/ year"; 
            views.textContent = "10K pageviews"
        } 

    } else if(slider.value == 2){
        progressBar.style.width = "25%";
        if(check == null){
            price[0].textContent = "$12.00";
            price[1].textContent = "$12.00";
            duration[0].textContent = "/ month";
            duration[1].textContent = "/ month";
            views.textContent = "50K pageviews"
        } else {
            price[0].textContent = "$108.00";
            price[1].textContent = "$108.00";
            duration[0].textContent = "/ year";
            duration[1].textContent = "/ year"; 
            views.textContent = "50K pageviews"
        } 

    } else if(slider.value == 3){
        progressBar.style.width = "50%";
        if(check == null){
            price[0].textContent = "$16.00";
            price[1].textContent = "$16.00";
            duration[0].textContent = "/ month";
            duration[1].textContent = "/ month";
            views.textContent = "100K pageviews"
        } else {
            price[0].textContent = "$144.00";
            price[1].textContent = "$144.00";
            duration[0].textContent = "/ year";
            duration[1].textContent = "/ year"; 
            views.textContent = "100K pageviews"
        } 

    } else if(slider.value == 4){
        progressBar.style.width = "75%";
        if(check == null){
            price[0].textContent = "$24.00";
            price[1].textContent = "$24.00";
            duration[0].textContent = "/ month";
            duration[1].textContent = "/ month";
            views.textContent = "500K pageviews"
        } else {
            price[0].textContent = "$216.00";
            price[1].textContent = "$216.00";
            duration[0].textContent = "/ year";
            duration[1].textContent = "/ year"; 
            views.textContent = "500K pageviews"
        } 

    } else if(slider.value == 5){
        progressBar.style.width = "100%";
        if(check == null){
            price[0].textContent = "$36.00";
            price[1].textContent = "$36.00";
            duration[0].textContent = "/ month";
            duration[1].textContent = "/ month";
            views.textContent = "1M pageviews"
        } else {
            price[0].textContent = "$324.00";
            price[1].textContent = "$324.00";
            duration[0].textContent = "/ year";
            duration[1].textContent = "/ year"; 
            views.textContent = "1M pageviews"
        } 

    }
    
}

slider.addEventListener("change", function() {
    calculate();
});

change.addEventListener("click", function() {
    change.querySelector('.circle').classList.toggle('for-toggle');
    change.classList.toggle('for-toggle2');
    change.classList.toggle('hover\:bg-\[\#7AEADF\]');
    calculate();
})