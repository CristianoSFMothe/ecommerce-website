// Define a data para a qual estamos em contagem regressiva
var countDownDate = new Date("April 25, 2024 15:37:25").getTime();

//Atualiza a contagem regressiva a cada 1 segundo
var x = setInterval(function() {

// Obtém a data e hora de hoje
  var now = new Date().getTime();

  // Encontre a distância entre agora e a data da contagem regressiva
  var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe o resultado no elemento com id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Se a contagem regressiva terminar, escreva algum texto
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});