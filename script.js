function checkPassword() {

    var password = document.getElementById("password").value;

    if (password === "Lisbeth") {

        document.getElementById("login").style.display = "none";

        document.getElementById("flower").style.display = "block";

    } else {

        alert("Contraseña incorrecta. Intenta de nuevo Jasmin.");

        document.getElementById("password-hint").style.display = "block";
    }
}

function logout() {

    document.getElementById("flower").style.display = "none";

    document.getElementById("login").style.display = "block";

    document.getElementById("password").value = ""; 
    
}

