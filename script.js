var wholeDoc = document.querySelector(".gridContainer")
var wholePopup = document.querySelector(".sectionPopUp")
var theItems = document.querySelectorAll(".item1")
var cancelButton = document.querySelector(".popUpCancel")

// FOR THE FIRST ITEM
theItems[0].addEventListener("click", function () {
    theItems[0].style.visibility = "hidden"
    wholePopup.style.display = "block"
}
)

cancelButton.addEventListener("click", function () {
    theItems[0].style.visibility = "visible"
    wholePopup.style.display = "none";
})

// FOR THE SECOND ITEM
theItems[1].addEventListener("click", function () {
    theItems[1].style.visibility = "hidden"
    wholePopup.style.display = "block"
}
)

cancelButton.addEventListener("click", function () {
    theItems[1].style.visibility = "visible"
    wholePopup.style.display = "none";
})

// var wholePopup = document.querySelector(".sectionPopUp")
// wholePopup.style.display = "block"
// console.log(wholePopup)