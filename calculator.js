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
  