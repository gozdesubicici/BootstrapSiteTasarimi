var form = document.querySelector("form");
var ad = form.elements.txtAdSoyad;
var mail = form.elements.txtEposta;
var message = form.elements.txtMesaj;

function validateForm() {

    var hataSayaci = 0;
    if (ad.value == "") {
        document.getElementsByName("txtAdSoyad").innerHTML = "Lütfen isim giriniz.";
        hataSayaci++;
    }
    if (mail.value == "") {
        document.getElementsByName("txtEposta").innerHTML = "Lütfen eposta giriniz.";
        hataSayaci++;
    }
    if (message.value == "") {
        document.getElementsByName("txtMesaj").innerHTML = "Lütfen mesajınızı giriniz.";
        hataSayaci++;
    }   
    else {
        return true;

    }
        
}