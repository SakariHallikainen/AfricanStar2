// Translations for English and Finnish
const translations = {
  en: {
    header: "Choose a deck!",
    piles: {
      pile1: [
        "Uhm, nothing here?",
        "You find an odd-looking coin. After a more careful examination and a little dusting, it seems to be an old gold coin from ancient times. You take it to a pawn store that is willing to pay you 200 for it. Nice!",
        "You stumble on a little rock on your path and hit your head pretty bad. Wait for next two turns to recover."
      ],
      pile2: [
        "You are ambushed by a group of bandits and lose all your money. Gosh!",
        "You are surrounded by a band of thieves, but you manage to talk yourself out by giving the location information of other players. You get to keep your money, but all other players lose 300. What a rat!",
        "An unnoticed shoplifter manages to snatch 300 from you. Whoops!"
      ],
      pile3: [
        "Lucky Horseshoe!",
        "Horseshoe flipped!",
        "Found a gold Horseshoe!"
      ]
    }
  },
  fi: {
    header: "Valitse pakka!",
    piles: {
      pile1: [
        "Öh, täällä ei ole mitään?",
        "Löydät oudon näköisen kolikon. Tarkemmin tarkasteltuasi ja hieman puhdistettuasi se näyttää olevan vanha kultakolikko muinaisilta ajoilta. Veit sen panttikauppaan, joka maksaa siitä 200. Hienoa!",
        "Kompastut polullasi kiveen ja lyöt pääsi aika pahasti. Odota kaksi seuraavaa vuoroa toipuaksesi."
      ],
      pile2: [
        "Sinut yllättää joukko rosvoja, ja menetät kaikki rahasi. Voi ei!",
        "Olet varkaiden ympäröimä, mutta onnistut puhumaan itsesi ulos antamalla tietoja muista pelaajista. Saat pitää rahasi, mutta kaikki muut pelaajat menettävät 300. Mikä rotta!",
        "Huomaamaton myymälävaras onnistuu nappaamaan 300 sinulta. Oho!"
      ],
      pile3: [
        "Onnenkengä!",
        "Kenkä kääntyi!",
        "Löydetty kultainen hevosenkenkä!"
      ]
    }
  }
};

let currentLanguage = "en"; // Default language is English
let piles = translations[currentLanguage].piles; // Initialize piles based on the default language

// Function to update the UI text
function updateLanguage() {
  const lang = translations[currentLanguage];

  // Update the header
  document.querySelector("h1").textContent = lang.header;

  // Update the piles object dynamically
  piles = lang.piles;
}

// Function to handle a card pick
function pickCard(pileId) {
  const cards = piles[pileId]; // Get the current pile's cards
  const randomCard = cards[Math.floor(Math.random() * cards.length)]; // Pick a random card

  // Hide all piles and reset their state
  document.querySelectorAll('.pile').forEach(pile => {
    pile.classList.add('hidden'); // Fade out unselected piles
    pile.classList.remove('scale-up'); // Remove scaling from unselected piles
  });

  // Show the chosen pile and scale it up
  const selectedPile = document.getElementById(pileId);
  selectedPile.classList.remove('hidden'); // Ensure visibility
  selectedPile.classList.add('scale-up'); // Apply scaling animation

  // Display the result message
  document.getElementById("result").innerHTML = `
    <p>${randomCard}</p>
  `;
}

// Add event listeners to piles
document.getElementById("pile1").addEventListener("click", () => pickCard("pile1"));
document.getElementById("pile2").addEventListener("click", () => pickCard("pile2"));
document.getElementById("pile3").addEventListener("click", () => pickCard("pile3"));

// Add event listener to the language selector
document.getElementById("language").addEventListener("change", (event) => {
  currentLanguage = event.target.value; // Update the current language
  updateLanguage(); // Update the text and piles
});

// Reset game
document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("result").innerHTML = ""; // Clear result
  
  // Reset all piles to their original state
  document.querySelectorAll('.pile').forEach(pile => {
    pile.classList.remove('hidden'); // Make all piles visible
    pile.classList.remove('scale-up'); // Remove scale-up effect
  });
});
