// export
    // variables
    const d = document,
        w = window;

    export function speechReader() {

        // variables
        const $speechSelect = d.getElementById('speech-select'),
            $speechTextarea = d.getElementById('speech-text'),
            $speechBtn = d.getElementById('speech-btn'),
            speechMessage = new SpeechSynthesisUtterance();
        let voices = [];

        // console.log(speechMessage);

        // evento
        d.addEventListener('DOMContentLoaded', (e) => {
            voices = w.speechSynthesis.getVoices();
            voices.forEach((voice) => {
                const $option = d.createElement('option');
                $option.value = voice.name;
                $option.textContent = `${voice.name} - ${voice.lang}`;
                $speechSelect.appendChild($option);
            });
            // evento
            /* w.speechSynthesis.addEventListener('voiceschanged', (e) => {
                voices = w.speechSynthesis.getVoices();
                voices.forEach((voice) => {
                    const $option = d.createElement('option');
                    $option.value = voice.name;
                    $option.textContent = `${voice.name} - ${voice.lang}`;
                    $speechSelect.appendChild($option);
                });
            }); */
        });
        d.addEventListener('change', (e) => {
            // condicionales
            if (e.target === $speechSelect) speechMessage.voice = voices.find((voice) => voice.name === e.target.value);
            
        });
        d.addEventListener('click', (e) => {
            // condicionales
            if (e.target === $speechBtn) {
                speechMessage.text = $speechTextarea.value;
                w.speechSynthesis.speak(speechMessage);
            }
        });

    }