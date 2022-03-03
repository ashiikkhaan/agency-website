// execute script after page load
window.onload = function digital_fn() {
    //toggle button
    let toggle = document.querySelector(".nav .toggle-btn");
    let collapse = document.querySelector(".nav .collapse");

    toggle.addEventListener('click', function (event) {
        collapse.classList.toggle('active')
        // console.log(toggle)
    });
    // mansonry js
    let grid = document.querySelector("#site-main .recent-wrok-area .images-flex")

    let msnry = new Masonry(grid, {
        itemSelector: '.flex-item',
        gutter: 100,
        fltWidth: true
    })
};

// Rellax js
var rellax = new Rellax('.rellax', {
    center: true
})
// header implementation
const header = document.querySelector('.container-fluid')
fetch('/header.html')
    .then(res => res.text())
    .then(data => {
        header.innerHTML = data
    });
// // banner implement
const banner = document.querySelector('.banner-area')
fetch('/banner.html')
    .then(res => res.text())
    .then(data => {
        banner.innerHTML = data
    })
const agencyArea = document.querySelector('.agency-area')
fetch('/agency-area.html')
    .then(res => res.text())
    .then(data => {
        agencyArea.innerHTML = data
    })