function toggleCard(cardId) {
  var card = document.getElementById(cardId);
  var arrowIcon = card.previousElementSibling.querySelector(".arrow-icon");

  if (card.style.display === "block") {
    card.style.display = "none";
    arrowIcon.style.transform = "rotate(0deg)";
  } else {
    card.style.display = "block";
    arrowIcon.style.transform = "rotate(180deg)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const title = card.querySelector(".card-title");

    title.addEventListener("click", () => {
      // Fechar todos os outros cards antes de abrir o clicado
      cards.forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("active");
        }
      });

      card.classList.toggle("active");
    });
  });
});

/* codigo dos cards */

function toggleCard(cardId) {
  var cardBody = document
    .getElementById(cardId)
    .getElementsByClassName("card-body")[0];
  var arrow = document
    .getElementById(cardId)
    .getElementsByClassName("arrow")[0];

  if (cardBody.style.display === "none" || cardBody.style.display === "") {
    cardBody.style.display = "block";
    arrow.style.transform = "rotate(180deg)";
  } else {
    cardBody.style.display = "none";
    arrow.style.transform = "rotate(0deg)";
  }
}
