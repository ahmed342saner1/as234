function checkPassword() {
    var ahmed_degree_prep1 = document.getElementById("passwordInput").value;
    var ali = document.getElementById("passwordInput").value;
    var abdo = document.getElementById("passwordInput").value;
    var omer = document.getElementById("passwordInput").value;
    var mona = document.getElementById("passwordInput").value;
    var sanaa = document.getElementById("passwordInput").value;
    var samer = document.getElementById("passwordInput").value;
    var osama = document.getElementById("passwordInput").value;
    var adam = document.getElementById("passwordInput").value;
    var adiham = document.getElementById("passwordInput").value;
    var shahd = document.getElementById("passwordInput").value;
    var abdullha = document.getElementById("passwordInput").value;
    var selectValue = document.getElementById("mySelect").value;
    // قم بتغيير كلمة المرور و الصف و الرابط حسب احتياجاتك
    if (ahmed_degree_prep1 === "35e" && selectValue === "perp1") {
        document.getElementById("linkOutput").innerHTML = "<a href='ndex' class='a-2'><h2>الرابط</h2></a>";
    } else if (abdo === "24w" && selectValue === "perp1") {
        document.getElementById("linkOutput").innerHTML = "<a href='abdo_degree_prep1.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (ali === "79y" && selectValue === "perp2") {
        document.getElementById("linkOutput").innerHTML = "<a href='ali_degree_prep2.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (omer === "57t" && selectValue === "perp2") {
        document.getElementById("linkOutput").innerHTML = "<a href='omer_degree_prep2.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (mona === "46r" && selectValue === "perp3") {
        document.getElementById("linkOutput").innerHTML = "<a href='mona_degree_perp3.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (sanaa === "35q" && selectValue === "perp3") {
        document.getElementById("linkOutput").innerHTML = "<a href='sanaa_degree_perp3.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (samer === "88i" && selectValue === "sec1") {
        document.getElementById("linkOutput").innerHTML = "<a href='samer_degree_sec1.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (osama === "65u" && selectValue === "sec1") {
        document.getElementById("linkOutput").innerHTML = "<a href='osama_degree_sec1.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (adam === "77f" && selectValue === "sec2") {
        document.getElementById("linkOutput").innerHTML = "<a href='adam_degree_ssec2.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (adiham === "99o" && selectValue === "sec2") {
        document.getElementById("linkOutput").innerHTML = "<a href='adiham_degree_sec2.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (shahd === "33w" && selectValue === "sec3") {
        document.getElementById("linkOutput").innerHTML = "<a href='shahd_degree_sec3.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (abdullha === "11a" && selectValue === "sec3") {
        document.getElementById("linkOutput").innerHTML = "<a href='abdullah_dehree_sec3.html' class='a-2'><h2>الرابط</h2></a>";
    }
    else {
        document.getElementById("linkOutput").innerHTML = "<h2 class='a-2' >كلمة المرور غير صحيحة.</h2>";
    }
}