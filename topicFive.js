function saveFarmAnimal() {
    var input = document.getElementById("farmAnimal");
    localStorage.setItem("farmAnimal", input.value);
}

function getFarmAnimal() {
    var pullData = localStorage.getItem("farmAnimal");
    document.getElementById("data").innerHTML = "Your favorite farm animal is: " + pullData;
}