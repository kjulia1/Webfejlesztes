document.getElementById("bekuldes").addEventListener("click", pontszam);

function pontszam() {
    const a = document.getElementById("felmero12").checked
    const b = document.getElementById("felmero23").checked
    const c = document.getElementById("felmero34").checked
    const d = document.getElementById("felmero43").checked
    const e = document.getElementById("felmero53").checked
    const f = document.getElementById("felmero63").checked
    const g = document.getElementById("felmero72").checked
    const h = document.getElementById("felmero81").checked
    const i = document.getElementById("felmero94").checked
    const j = document.getElementById("felmero103").checked
    let osszeg = a + b + c + d + e + f + g + h + i + j;
    
    const link = document.createElement("a");
    link.href = "tanfolyamok.html";
    link.textContent = "Megnézem";
    mysection=document.getElementById("eredmeny")

    if (osszeg < 4) {
        document.getElementById("eredmeny").innerHTML = "A pontszámod: " + String(osszeg) + "<br>Lesz ez még jobb is!" + "<br>Csatlakozz kezdő kurzusunkhoz, hogy seperc alatt elsajátítsd a spanyol nyelv fortélyait!<br>";
        mysection.appendChild(link);
        
    }
    if (osszeg >= 4 && osszeg <= 7) {
        document.getElementById("eredmeny").innerHTML = "A pontszámod: " + String(osszeg) + "<br>Egész jó eredmény, de még van hova fejlődnöd!" + "<br>Csatlakozz középhaladó kurzusunkhoz, és hamarosan könnyedén kommunikálhatsz anyanyelvi beszélőkkel is!<br>";
        mysection.appendChild(link);
    }
    if (osszeg > 7) {
        document.getElementById("eredmeny").innerHTML = "A pontszámod: " + String(osszeg) + "<br>Nagyon jó, gratulálunk!" + "<br>Csatlakozz haladó kurzusunkhoz, hogy igazán magas szintre emeld spanyol tudásodat!<br>";
        mysection.appendChild(link);
    }
    document.getElementById("1jo").style.color = "green";
    document.getElementById("1jo").style.fontWeight = "bold";
    document.getElementById("2jo").style.color = "green";
    document.getElementById("2jo").style.fontWeight = "bold";
    document.getElementById("3jo").style.color = "green";
    document.getElementById("3jo").style.fontWeight = "bold";
    document.getElementById("4jo").style.color = "green";
    document.getElementById("4jo").style.fontWeight = "bold";
    document.getElementById("5jo").style.color = "green";
    document.getElementById("5jo").style.fontWeight = "bold";
    document.getElementById("6jo").style.color = "green";
    document.getElementById("6jo").style.fontWeight = "bold";
    document.getElementById("7jo").style.color = "green";
    document.getElementById("7jo").style.fontWeight = "bold";
    document.getElementById("8jo").style.color = "green";
    document.getElementById("8jo").style.fontWeight = "bold";
    document.getElementById("9jo").style.color = "green";
    document.getElementById("9jo").style.fontWeight = "bold";
    document.getElementById("10jo").style.color = "green";
    document.getElementById("10jo").style.fontWeight = "bold";
}