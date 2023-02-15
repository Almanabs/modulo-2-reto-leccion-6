$(function () {
    console.log("hola");
  $('#link').click(function (event) {
    event.preventDefault();
    alert('Has pulsado el enlace... ahora seras redireccionado a Google');
    window.location.href = 'https://www.google.com/';
  })
})