function navigateToCategory() {
    var select = document.getElementById("categorieSelect");
    var selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}

