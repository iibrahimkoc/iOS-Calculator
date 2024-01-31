var tmp;
var islem;

document.getElementById("bataryValue").textContent = Math.floor(Math.random() * 100);
document.getElementById("boxBataryValue").style.width = parseInt(document.getElementById("bataryValue").textContent) + '%';

function AC() {
	tmp = 0;
	document.getElementById("result").textContent = 0;
	islem = "";
	document.getElementById("ekle").style.backgroundColor = "rgb(255, 149, 0)";
	document.getElementById("ekle").style.color = "white";
	document.getElementById("cikar").style.backgroundColor = "rgb(255, 149, 0)";
	document.getElementById("cikar").style.color = "white";
	document.getElementById("carp").style.backgroundColor = "rgb(255, 149, 0)";
	document.getElementById("carp").style.color = "white";
	document.getElementById("bol").style.backgroundColor = "rgb(255, 149, 0)";
	document.getElementById("bol").style.color = "white";

}
function negatifOrPozitif() {
	document.getElementById("result").textContent *= -1;
}
function ekle() {
	tmp = Number(document.getElementById("result").textContent);
	console.log(tmp);
	document.getElementById("result").textContent = "";
	islem = '+';
	document.getElementById("ekle").style.backgroundColor = "white";
	document.getElementById("ekle").style.color = "rgb(255, 149, 0)";
}
function cikar() {
	tmp = Number(document.getElementById("result").textContent);
	console.log(tmp);
	document.getElementById("result").textContent = "";
	islem = '-';
	document.getElementById("cikar").style.backgroundColor = "white";
	document.getElementById("cikar").style.color = "rgb(255, 149, 0)";
}
function carp() {
	tmp = Number(document.getElementById("result").textContent);
	console.log(tmp);
	document.getElementById("result").textContent = "";
	islem = '*';
	document.getElementById("carp").style.backgroundColor = "white";
	document.getElementById("carp").style.color = "rgb(255, 149, 0)";
}
function bol() {
	tmp = Number(document.getElementById("result").textContent);
	console.log(tmp);
	document.getElementById("result").textContent = "";
	islem = '/';
	document.getElementById("bol").style.backgroundColor = "white";
	document.getElementById("bol").style.color = "rgb(255, 149, 0)";
}
function mod() {
	tmp = Number(document.getElementById("result").textContent);
	console.log(tmp);
	document.getElementById("result").textContent = "";
	islem = '%';
}
function virgul() {

	document.getElementById("result").textContent += '.';
	console.log("virgül içindeyim");
	if (document.getElementById("result").textContent[document.getElementById("result").textContent.length] == '.') {
		console.log("selam");
	}
}
function sonuc() {
	console.log("sonuc içindeyim");
	console.log(tmp);
	switch (islem) {
		case '+':
			document.getElementById("result").textContent = Number(document.getElementById("result").textContent) + tmp;
			document.getElementById("ekle").style.backgroundColor = "rgb(255, 149, 0)";
			document.getElementById("ekle").style.color = "white";
			document.getElementById("bataryValue").textContent = parseInt(document.getElementById("bataryValue").textContent) - 1;
			break;
		case '-':
			document.getElementById("result").textContent = tmp - Number(document.getElementById("result").textContent);
			document.getElementById("cikar").style.backgroundColor = "rgb(255, 149, 0)";
			document.getElementById("cikar").style.color = "white";
			document.getElementById("bataryValue").textContent = parseInt(document.getElementById("bataryValue").textContent) - 1;
			break;
		case '*':
			document.getElementById("result").textContent = Number(document.getElementById("result").textContent) * tmp;
			document.getElementById("carp").style.backgroundColor = "rgb(255, 149, 0)";
			document.getElementById("carp").style.color = "white";
			document.getElementById("bataryValue").textContent = parseInt(document.getElementById("bataryValue").textContent) - 1;
			break;
		case '/':
			document.getElementById("result").textContent = tmp / Number(document.getElementById("result").textContent);
			document.getElementById("bol").style.backgroundColor = "rgb(255, 149, 0)";
			document.getElementById("bol").style.color = "white";
			document.getElementById("bataryValue").textContent = parseInt(document.getElementById("bataryValue").textContent) - 1;
			break;
		case '%':
			document.getElementById("result").textContent = tmp % Number(document.getElementById("result").textContent);
			document.getElementById("bataryValue").textContent = parseInt(document.getElementById("bataryValue").textContent) - 1;
			break;
		default:
			break;
	}
	if(document.getElementById("result").textContent.length > 8){
		document.getElementById("result").textContent = Number(document.getElementById("result").textContent).toFixed(6);
	}
	
	document.getElementById("boxBataryValue").style.width = parseInt(document.getElementById("bataryValue").textContent) + '%';
}



function zero() {
	if (document.getElementById("result").textContent == "") {
		document.getElementById("result").textContent = 0;
	}
	else if (document.getElementById("result").textContent == 0) {
		document.getElementById("result").textContent = 0;
	}
	else {
		document.getElementById("result").textContent += 0;
	}
}
function one() {
	if (document.getElementById("result").textContent == 0) {
		document.getElementById("result").textContent = "";
		document.getElementById("result").textContent += 1;
	}
	else {
		document.getElementById("result").textContent += 1;
	}
}
function two() {
	if (document.getElementById("result").textContent == 0) {
		document.getElementById("result").textContent = "";
		document.getElementById("result").textContent += 2;
	}
	else {
		document.getElementById("result").textContent += 2;
	}
}
function three() {
	if (document.getElementById("result").textContent == 0) {
		document.getElementById("result").textContent = "";
		document.getElementById("result").textContent += 3;
	}
	else {
		document.getElementById("result").textContent += 3;
	}
}
function four() {
	if (document.getElementById("result").textContent == 0) {
		document.getElementById("result").textContent = "";
		document.getElementById("result").textContent += 4;
	}
	else {
		document.getElementById("result").textContent += 4;
	}
}
function five() {
	if (document.getElementById("result").textContent == 0) {
		document.getElementById("result").textContent = "";
		document.getElementById("result").textContent += 5;
	}
	else {
		document.getElementById("result").textContent += 5;
	}
}
function six() {
	if (document.getElementById("result").textContent == 0) {
		document.getElementById("result").textContent = "";
		document.getElementById("result").textContent += 6;
	}
	else {
		document.getElementById("result").textContent += 6;
	}
}
function seven() {
	if (document.getElementById("result").textContent == 0) {
		document.getElementById("result").textContent = "";
		document.getElementById("result").textContent += 7;
	}
	else {
		document.getElementById("result").textContent += 7;
	}
}
function eight() {
	if (document.getElementById("result").textContent == 0) {
		document.getElementById("result").textContent = "";
		document.getElementById("result").textContent += 8;
	}
	else {
		document.getElementById("result").textContent += 8;
	}
}
function nine() {
	if (document.getElementById("result").textContent == 0) {
		document.getElementById("result").textContent = "";
		document.getElementById("result").textContent += 9;
	}
	else {
		document.getElementById("result").textContent += 9;
	}
}








function updateClock() {
	// Şu anki tarih ve saat bilgisini al
	var now = new Date();

	// Saat ve dakika bilgilerini al
	var hours = now.getHours();
	var minutes = now.getMinutes();

	// Saat ve dakika bilgilerini düzenle
	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;

	// Saat bilgisini oluştur
	var time = hours + ":" + minutes;


	// Saat elementini seç ve içeriğini güncelle
	var clockElement = document.getElementById("clock");
	if (clockElement) {
		clockElement.textContent = time;
	}


}

// Sayfa yüklendiğinde ve her saniye başında saat bilgisini güncelle
updateClock();
setInterval(updateClock, 1000);
