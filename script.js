const ratingBtns = document.querySelectorAll("[data-rating-btn]");
const ratingSubmitBtn = document.querySelector("[data-rating-submit]");

const handleRating = (btn) => {
    const ratingBtnPressed = document.querySelector("[data-rating-btn][aria-pressed='true']");

        if (!ratingBtnPressed) {
            btn.setAttribute("aria-pressed", true);
        } else {
            btn.setAttribute("aria-pressed", true);
            ratingBtnPressed.setAttribute("aria-pressed", false);
        }
        
        ratingSubmitBtn.removeAttribute("disabled");

        if (btn === ratingBtnPressed) {
            btn.setAttribute("aria-pressed", false);
            ratingSubmitBtn.setAttribute("disabled", "");
        }
}

const submitRating = () => {
    const card = document.querySelector("[data-card]");
    const cardIntro = document.querySelector("[data-card-intro]");
    const cardSummary = document.querySelector("[data-card-summary]");
    const selectedRatingSpan = document.querySelector("[data-selected-rating]");
    const ratingBtnPressed = document.querySelector("[data-rating-btn][aria-pressed='true']");
    const selectedRatingValue = ratingBtnPressed.getAttribute("data-rating-value");

    ratingSubmitBtn.blur();
    selectedRatingSpan.textContent = selectedRatingValue;
    card.classList.add("complete");
    cardSummary.setAttribute("aria-hidden", "false");
    cardIntro.setAttribute("aria-hidden", "true");
}

ratingBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        handleRating(e.currentTarget);
    });
});

ratingSubmitBtn.addEventListener("click", submitRating);