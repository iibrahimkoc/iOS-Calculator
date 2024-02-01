var tmp;
var islem;
const resultElement = document.getElementById("result");
var bataryValue = document.getElementById("bataryValue");
var boxBataryValue = document.getElementById("boxBataryValue");
var fontSizeValue = 0;

/*----------------------------------------------------------
Sorun-1: Eşittire basmadan 3 işlemi yapamıyoruz.
Sorun-2: Ort. 9 sayıdan fazlasını yazdırmaması gerekiyor.
Sorun-3: Sorun-1 de ki hatayı düzeltirken renk ayarını düzelmesi gerekiyor
Sorun-4: "." dan sonraki cevabı olan değerlerde fazladan sıfırların kalkması gerekiyor.
Sorun-5: Her 3 sayıdan sonra nokta koyulmasını istiyorum.
------------------------------------------------------------*/



//----SAÇMA BİR YÖNTEM ÇÜNKÜ 1 VE 7 SAYILARININ GENİŞLİKLERİ 
//----DİĞER SAYILARA GÖRE DAHA KÜÇÜK O YÜZDEN TEKRARDAN HESAP
//----YAPMAM LAZIM.---------------KISMEN DÜZELDİ------------//
function resultLenght() {
	console.log(resultElement.offsetWidth)
	if (resultElement.offsetWidth > 375) { //bu koddan devam et
		fontSizeValue++;
	}
	switch(fontSizeValue){
		case 1:
			resultElement.style.fontSize = 10 + "rem";
			break;
		case 2:
			resultElement.style.fontSize = 8.5 + "rem";
			break;
		case 3:
			resultElement.style.fontSize = 7.5 + "rem";
			break;
		case 4:
			resultElement.style.fontSize = 10 + "rem";
			break;
	}
	
	//Not: resultElement.width yerine resultElement.offsetWidth kullanmayı 
	//tercih ettim, çünkü offsetWidth özelliği, elementin görünür genişliğini 
	//verirken, width CSS özelliği her zaman gerçek render edilen genişliği temsil etmeyebilir.

}


//---------ŞARJ AYARI-----------//
bataryValue.textContent = Math.floor(Math.random() * 100);
boxBataryValue.style.width = parseInt(bataryValue.textContent) + '%';
function charge() {
	bataryValue.textContent = parseInt(bataryValue.textContent) - 1;
}

//---------RENK AYARI-----------//
function setColorstart(islemElement) {
	document.getElementById(islemElement).style.backgroundColor = "rgb(255, 149, 0)"; //orange
	document.getElementById(islemElement).style.color = "white";
}
function setColorEnd(islemElement) {
	document.getElementById(islemElement).style.backgroundColor = "white";
	document.getElementById(islemElement).style.color = "rgb(255, 149, 0)"; //orange
}

//---------VİRGÜL AYARI---------//
function virgulToNokta() {
	if (resultElement.textContent.includes(",")) {
		resultElement.textContent = resultElement.textContent.replace(",", ".");
	}
}

//---------İSLEM FONKSİYONLARI-----------//
function AC() {
	tmp = 0;
	resultElement.textContent = 0;
	resultElement.style.fontSize = 12 + "rem";
	fontSizeValue = 0;
	islem = "";
	setColorstart("ekle");
	setColorstart("cikar");
	setColorstart("carp");
	setColorstart("bol");
}
function negatifOrPozitif() {
	resultElement.textContent *= -1;
}
function ekle() {
	virgulToNokta();
	tmp = Number(resultElement.textContent);
	console.log(tmp);
	resultElement.textContent = "";
	islem = '+';
	setColorEnd("ekle");
}
function cikar() {
	virgulToNokta();
	tmp = Number(resultElement.textContent);
	console.log(tmp);
	resultElement.textContent = "";
	islem = '-';
	setColorEnd("cikar");
}
function carp() {
	virgulToNokta();
	tmp = Number(resultElement.textContent);
	console.log(tmp);
	resultElement.textContent = "";
	islem = '*';
	setColorEnd("carp");
}
function bol() {
	virgulToNokta();
	tmp = Number(resultElement.textContent);
	console.log(tmp);
	resultElement.textContent = "";
	islem = '/';
	setColorEnd("bol");
}
function mod() {
	virgulToNokta();
	tmp = Number(resultElement.textContent);
	console.log(tmp);
	resultElement.textContent = "";
	islem = '%';
}
function virgul() {
	// Eğer ekrandaki sayıda zaten bir virgül varsa, işlem yapma
	if (!resultElement.textContent.includes(',')) {
		// Eğer ekrandaki sayı boşsa veya sıfırsa, 0, şeklinde başla
		if (resultElement.textContent === '' || resultElement.textContent === '0') {
			resultElement.textContent = '0,';
		} else {
			// Eğer başka bir sayı varsa, sadece virgül ekle
			resultElement.textContent += ',';
		}
	}
}

function sonuc() {
	console.log("sonuc içindeyim");
	console.log(tmp);

	// Eğer ekrandaki sayıda virgül varsa, onu noktaya çevir
	virgulToNokta();

	// Yeni bir değişken ile ekrandaki sayıyı al
	var currentNumber = Number(resultElement.textContent);

	console.log("ilk" + tmp);
	// Eğer tmp de virgül içeriyorsa, onu noktaya çevir
	if (tmp.toString().includes(',')) {
		tmp = parseFloat(tmp.toString().replace(',', '.'));
		console.log("son" + tmp);
	}

	switch (islem) {
		case '+':
			resultElement.textContent = tmp + currentNumber;
			setColorstart("ekle");
			charge();
			break;
		case '-':
			resultElement.textContent = tmp - currentNumber;
			setColorstart("cikar");
			charge();
			break;
		case '*':
			resultElement.textContent = tmp * currentNumber;
			setColorstart("carp");
			charge();
			break;
		case '/':
			if (currentNumber === 0) {
				resultElement.textContent = "Hata";
			} else {
				resultElement.textContent = tmp / currentNumber;
			}
			setColorstart("bol");
			charge();
			break;
		case '%':
			resultElement.textContent = tmp % currentNumber;
			charge();
			break;
		default:
			break;
	}

	if (resultElement.textContent.length > 8) {
		resultElement.textContent = Number(resultElement.textContent).toFixed(6);
	}

	if (resultElement.textContent.includes('.')) {
		resultElement.textContent = resultElement.textContent.replace('.', ',');
	}
	boxBataryValue.style.width = parseInt(bataryValue.textContent) + '%';
}



//-------------NUMBERS--------------//

function zero() {
	resultLenght();
	if (resultElement.textContent == "") {
		resultElement.textContent = 0;
	}
	else if (resultElement.textContent == 0) {
		resultElement.textContent = 0;
	}
	else {
		resultElement.textContent += 0;
	}
}
function one() {
	resultLenght();
	if (resultElement.textContent == 0) {
		resultElement.textContent = "";
		resultElement.textContent += 1;
	}
	else {
		resultElement.textContent += 1;
	}
}
function two() {
	resultLenght();
	if (resultElement.textContent == 0) {
		resultElement.textContent = "";
		resultElement.textContent += 2;
	}
	else {
		resultElement.textContent += 2;
	}
}
function three() {
	resultLenght();
	if (resultElement.textContent == 0) {
		resultElement.textContent = "";
		resultElement.textContent += 3;
	}
	else {
		resultElement.textContent += 3;
	}
}

function four() {
	resultLenght();
	if (resultElement.textContent == 0) {
		resultElement.textContent = "";
		resultElement.textContent += 4;
	}
	else {
		resultElement.textContent += 4;
	}
}

function five() {
	resultLenght();
	if (resultElement.textContent == 0) {
		resultElement.textContent = "";
		resultElement.textContent += 5;
	}
	else {
		resultElement.textContent += 5;
	}
}

function six() {
	resultLenght();
	if (resultElement.textContent == 0) {
		resultElement.textContent = "";
		resultElement.textContent += 6;
	}
	else {
		resultElement.textContent += 6;
	}
}

function seven() {
	resultLenght();
	if (resultElement.textContent == 0) {
		resultElement.textContent = "";
		resultElement.textContent += 7;
	}
	else {
		resultElement.textContent += 7;
	}
}

function eight() {
	resultLenght();
	if (resultElement.textContent == 0) {
		resultElement.textContent = "";
		resultElement.textContent += 8;
	}
	else {
		resultElement.textContent += 8;
	}
}

function nine() {
	resultLenght();
	if (resultElement.textContent == 0) {
		resultElement.textContent = "";
		resultElement.textContent += 9;
	}
	else {
		resultElement.textContent += 9;
	}
}







//----------SAAT AYARI-----------//
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
