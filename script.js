const form = document.getElementById('upload-form');
const fileInput = document.getElementById('audio-file');
const resultContainer = document.getElementById('result');
const classificationText = document.getElementById('classification');
const audioPlayer = document.getElementById('audio-player');

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        audioPlayer.src = URL.createObjectURL(file);
        audioPlayer.classList.remove('hidden');
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!fileInput.files.length) {
        return;
    }

    resultContainer.classList.remove('hidden');
    classificationText.textContent = 'Procesando...';

    // Simulación de procesamiento
    setTimeout(() => {
        const clases = ['Rock', 'Pop', 'Hip-Hop', 'Clásica', 'Jazz'];
        const resultado = clases[Math.floor(Math.random() * clases.length)];
        classificationText.textContent = resultado;
    }, 1500);
});
