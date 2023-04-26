function openModal(imageUrl) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imageUrl;
}


// Закрыть модальное окно
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}
