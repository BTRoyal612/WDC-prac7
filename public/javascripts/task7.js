function makePost() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var changeColor = this.responseText;
            var heading = document.getElementById("color-head");
            heading.innerHTML = changeColor;
            heading.style.color = changeColor;
        }
    }

    xhttp.open("GET", "/color.txt", true);

    xhttp.send();
}

function showAllPost() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var changeColor = this.responseText;
            var heading = document.getElementById("color-head");
            heading.innerHTML = changeColor;
            heading.style.color = changeColor;
        }
    }

    xhttp.open("GET", "/color.txt", true);

    xhttp.send();
}