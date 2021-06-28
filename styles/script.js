let imageHover = document.querySelectorAll("img")[3];

imageHover.addEventListener("mouseover", function (event) {
    event.target.setAttribute("src", "images/swagjutsu.jpg");
    document.querySelector("span").innerHTML = " No More";
});

imageHover.addEventListener("mouseout", revertImage);

function revertImage() {
    document.querySelectorAll("img")[3].setAttribute("src", "images/image-victor.jpg");
    document.querySelector("span").innerHTML = " 26";
}



