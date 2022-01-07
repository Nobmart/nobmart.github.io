let logToggle = document.getElementById("log");
document.getElementById("acc");
logToggle.addEventListener("click", function() {
    if (document.getElementById("acc").classList.contains("account")) {
        document.getElementById("acc").classList.remove("account")
        document.getElementById("acc").classList.add("accountShow")


    } else {
        document.getElementById("acc").classList.add("account")
        document.getElementById("acc").classList.remove("accountShow")


    }
})