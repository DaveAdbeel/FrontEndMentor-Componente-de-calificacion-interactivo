const body = document.querySelector("body");
const form = document.querySelector("form");
const box = document.getElementById("box");

function createModal(rating) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-content">
        <picture class="modal-picture-container">    
            <img class="modal-image" src="./images/illustration-thank-you.svg" alt="illustration-image"   >
        </picture>
            <div class="modal-rating-container">
                <h5 class="modal-text-rating"> You selected ${rating} out of 5</h5>
            </div>
            <h2 class="modal-text-grettings">
                Thank you!
            </h2>

            <p class="modal-text-paragraph">
                We appreciate you taking the time to guve a rating. If you never need more support, don't hesitate to get in touch!
            </p>
        </div>
    `;
    body.replaceChild(modal, box);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target)).rating;
    if (data) {
        createModal(data);
    }
});
