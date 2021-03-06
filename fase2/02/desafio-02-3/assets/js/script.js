const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');

for (const card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute('id')

        modalOverlay.classList.add('active');
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${videoId}`;

        if (modal.classList.contains('maximize')) {
            modal.classList.remove('maximize')
        }
    });
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector('iframe').src = "";
});


document.querySelector('.btn-maximize').addEventListener("click", function() {
    if (modal.classList.contains('maximize')) {
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
});