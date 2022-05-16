function addPost() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    }

    xhttp.open("POST", "/users/addpost", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify({ "title":title, "content":content }));
}

function getPosts() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var show = document.getElementById("show-all-posts");
            show.innerHTML = "";
            var posts = JSON.parse(this.responseText);
            for (let post of posts) {
                var container = document.createElement("div");
                var t = document.createElement("h2");
                var c = document.createElement("p");

                t.innerHTML = post["title"];
                c.innerHTML = post["content"]

                container.appendChild(t);
                container.appendChild(c);
                show.appendChild(container);
            }
        }
    }

    xhttp.open("GET", "/users/getposts", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}