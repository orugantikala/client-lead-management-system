function addLead() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let status = document.getElementById("status").value;

    let li = document.createElement("li");
    li.innerText = name + " - " + email + " - Status: " + status;

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.onclick = function() {
        li.remove();
    }
    li.appendChild(btn);

    document.getElementById("leadList").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}