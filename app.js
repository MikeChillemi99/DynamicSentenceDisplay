const tblSentences = {
    0: "À minuit, tout commence sous la nuit.",
    1: "Une heure, la nuit prend de la hauteur.",
    2: "Deux heures, c'est l'heure du rêve enchanteur.",
    3: "Trois heures, doucement s'installe le bonheur.",
    4: "Quatre heures, la nuit s'efface avec ardeur.",
    5: "Cinq heures, la lumière pointe son labeur.",
    6: "Six heures, le jour s'éveille avec douceur.",
    7: "Sept heures, c'est l'instant des saveurs.",
    8: "Huit heures, la journée démarre sans erreur.",
    9: "Neuf heures, c'est le début du bonheur.",
    10: "Dix heures, le travail s'accélère sans peur.",
    11: "Onze heures, une pause pour reprendre des couleurs.",
    12: "Midi, l'heure de savourer la vie.",
    13: "Treize heures, c'est l'après-midi qui prend de l'ampleur.",
    14: "Quatorze heures, un moment calme sans rancœur.",
    15: "Quinze heures, on avance avec vigueur.",
    16: "Seize heures, un instant pour rêver ailleurs.",
    17: "Dix-sept heures, la fin de journée se fait charmeur.",
    18: "Dix-huit heures, place aux douceurs.",
    19: "Dix-neuf heures, le dîner est porteur de saveurs.",
    20: "Vingt heures, la soirée démarre avec ferveur.",
    21: "Vingt-et-une heures, les étoiles brillent avec splendeur.",
    22: "Vingt-deux heures, la fatigue arrive sans douleur.",
    23: "Vingt-trois heures, la nuit tombe en douceur."
  };

// Timer
const countdownElement = document.getElementById("countdown");

// Fonction pour obtenir la date actuelle en string
function fnGetCurrentDateString() {
    const now = new Date();
    return now.toISOString().split('T')[0];
}

// Fonction pour démarrer l'affichage de l'heure actuelle
function fnStartClock() {
    function fnUpdateClock() {
        const now = new Date();

        // Récupérer les heures, minutes et secondes actuelles
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Mettre ensemble les heures, minutes et secondes avec un format 00:00:00
        countdownElement.innerHTML = 
            `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        // Affiche la phrase pour l'heure actuelle
        displaySentenceForCurrentHour();
    }

    // Mettre à jour l'affichage de l'heure toutes les secondes
    setInterval(fnUpdateClock, 1000);
}

// Écouter lorsque la page est chargée
window.addEventListener('DOMContentLoaded', fnStartClock());


function displaySentenceForCurrentHour() {
    const now = new Date();
    const currentHour = now.getHours();
    
    // Récupérer la phrase correspondante
    const sentence = tblSentences[currentHour];

    // Afficher la phrase dans un élément HTML
    const sentenceElement = document.getElementById("sentence");
    sentenceElement.innerHTML = sentence;
}

