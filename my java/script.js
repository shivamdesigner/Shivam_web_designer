function validation () {
    var fname = document.form1.fname.value;
    if (fname =="" || fname == null){
        document.getElementById("p1").innerHTML = "Enter Name";
        document.form1.fname.focus();
        return false;
    }
    if (
        document.form1.gen[0].checked == false &&
        document.form1.gen[1].checked == false
    ) {
        document.getElementById("p2").innerHTML = "Select Gender"
        return false;
    }
    var c1 = document.form1.c1.checked;
    var c2 = document.form1.c2.checked;
    var c3 = document.form1.c3.checked;
    if (c1 == false && c2 ==  false && c3 == false){
        document.getElementById("p3").innerHTML = "select subject";
        return false;
    }
    var city = document.form1.city.value;
    if (city == -1) {
        document.getElementById("p4").innerHTML = "select city"
        return false;
    }
}
