const belepesGomb = document.querySelector('.btn-warning');
const nevMezo = document.getElementById('username');
const sikerModal = document.getElementById('siker-modal');
const sikertelenModal = document.getElementById('sikertelen-modal');
const modalNevHelye = document.getElementById('modal-nev-helye');

const loginForm = document.getElementById('login-form'); 

loginForm.addEventListener('submit', function (esemeny) {
    esemeny.preventDefault(); 

    const beirtNev = nevMezo.value.trim();

    if (beirtNev === "") {
        sikertelenModal.showModal();
    } else {
        modalNevHelye.textContent = beirtNev;
        sikerModal.showModal();
        confetti({
            particleCount: 150,
            spread: 70, 
            origin: { y: 0.6 },
            colors: ['#FFA500', '#FFD700', '#FFFFFF', '#FF0000']
        });
    }
});