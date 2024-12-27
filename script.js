// Translations for English and Finnish
const translations = {
  en: {
    header: "",
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
    header: "",
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

function updateLanguage() {
  const lang = translations[currentLanguage];

  // Update the header
  document.querySelector("h1").textContent = lang.header;

  // Update the piles content (images and text)
  document.querySelectorAll('.pile').forEach((pile) => {
    const pileId = pile.id;
    const pileImage = pile.querySelector('.pile-image');

    // Check if language is Finnish, change image accordingly
    if (currentLanguage === 'fi') {
      switch (pileId) {
        case 'pile1':
          pileImage.src = 'images/EmptybaseFI.jpg'; // Finnish image for pile 1
          break;
        case 'pile2':
          pileImage.src = 'images/BanditbaseFI.jpg'; // Finnish image for pile 2
          break;
        case 'pile3':
          pileImage.src = 'images/HorseshoebaseFI.jpg'; // Finnish image for pile 3
          break;
      }
    } else {
      // Default to English images if not Finnish
      switch (pileId) {
        case 'pile1':
          pileImage.src = 'images/Emptybase.jpg'; // English image for pile 1
          break;
        case 'pile2':
          pileImage.src = 'images/Banditbase.jpg'; // English image for pile 2
          break;
        case 'pile3':
          pileImage.src = 'images/Horseshoebase.jpg'; // English image for pile 3
          break;
      }
    }
  });

  // Update `piles` variable to match the new language
  piles = translations[currentLanguage].piles;

  // Reset the result text after changing language
  const resultElement = document.getElementById("result");
  if (currentLanguage === 'fi') {
    resultElement.innerHTML = '<p>Valitse pakka ja aloita peli!</p>'; // Default Finnish message
  } else {
    resultElement.innerHTML = '<p>Choose a deck and start the game!</p>'; // Default English message
  }
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

  // Display the result message based on the current language
  const resultElement = document.getElementById("result");
  const lang = translations[currentLanguage]; // Get the current language translations

  // Show result text based on the picked card
  resultElement.innerHTML = `<p>${randomCard}</p>`;
  resultElement.style.display = 'block'; // Make sure result box is shown
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
  document.getElementById("result").style.display = 'none'; // Hide result box when reset

  // Reset all piles to their original state
  document.querySelectorAll('.pile').forEach(pile => {
    pile.classList.remove('hidden'); // Make all piles visible
    pile.classList.remove('scale-up'); // Remove scale-up effect
  });

  // Reset the result text based on the current language
  updateLanguage();
});

