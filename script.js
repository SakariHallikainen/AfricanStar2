// Translations for English and Finnish
const translations = {
  en: {
    header: "",
    piles: {
      pile1: [
        "Uhm, nothing here?",
        "You find an odd-looking coin. After a more careful examination and a little dusting, it seems to be an old gold coin from ancient times. You 	take it to a pawn store that is willing to pay you 200 for it. Nice!",
        "You stumble on a little rock on your path and hit your head pretty bad. Skip your next turn to recover.",
	"Hmm, just the sound of the wind.",
	"What is that on the ground? Wow, a free plane ticket! Keep this piece and use it for 1 free flight whenever.",
	"Looks like someone has dug a hole in the ground and tried to cover it. You get excited and start digging, but lose the track of time while 	doing it. Skip your next turn. But boy was it worth it, you find 300!",

      ],
      pile2: [
        "You are ambushed by a group of bandits and lose all your money. Gosh!",
        "You are surrounded by a band of thieves, but you manage to talk yourself out by giving the location information of other players. You get to 	keep your money, but all other players lose 300.",
        "An unnoticed shoplifter manages to snatch 300 from you. Whoops!",
	"Opportunity makes a thief. The local bank has left a door cracked. You enter and grab a handful of bills, and it so happens that they are 	savings of other players. Collect 100 from other players.",
	"Why is travelling by boat so expensive? Why not just sneak in and hide in a barrel? Of course! <br> Keep this piece and use it to get 1 free 	boat ride.",
	"Tired of travelling, you take a nap. However, you wake up a 100 poorer. Unlucky!"

      ],
      pile3: [
	"A golden horseshoe! You have three choices: <br> 1) Exchange it to 100. <br> 2) If you take it to Gold Coast, you can exhange it to 300. 	<br> 3) If you take it to Capetown, you can exchange it to 500.",
	"A caravan approaches. The owner offers a free ride to St. Helena island. Take it or leave it!",
	"Unlucky! A horseshoe falls from above and knocks you out. What are the odds? Rest for the next turn.",
	"You find a lone camel wandering. On your next turn, you can travel twice the distance you roll."
	
	
      ]
    }
  },
  fi: {
    header: "",
    piles: {
      pile1: [
        "Öh, ei mitään täällä?",
	"Löydät oudon näköisen kolikon. Tarkasteltuasi sitä lähemmin ja pienen putsauksen jälkeen se osoittautuukin vanhaksi kultakolikoksi muinaisilta 	ajoilta. Viet sen panttiliikkeeseen, joka on valmis maksamaan siitä 200. Mahtavaa!",
	"Kompastut matkalla pieneen kiveen ja lyöt pääsi aika pahasti. Jätä seuraava vuorosi väliin toipuaksesi.",
	"Hmm, vain tuulen huminaa.",
	"Mikäs tuossa maassa on? Vau, ilmainen lentolippu! Säilytä tämä merkki ja käytä se yhteen ilmaiseen lentoon milloin tahansa.",
	"Näyttää siltä, että joku on kaivanut kuopan maahan ja yrittänyt peittää sen. Innostut ja alat kaivaa, mutta kadotat ajantajun kaivaessasi. Jätä 	seuraava vuorosi väliin. Mutta kyllä kannatti, löydät 300!",
      ],
      pile2: [
        "Joudut rosvojoukon väijytykseen ja menetät kaikki rahasi. Voi ei!",
	"Sinut piirittää joukko varkaita, mutta onnistut puhumaan itsesi ulos tilanteesta kertomalla muiden pelaajien sijaintitiedot. Saat pitää rahasi, 	mutta kaikki muut pelaajat menettävät 300.",
	"Huomaamaton näpistelijä onnistuu viemään sinulta 300. Hupsis!",
	"Tilaisuus tekee varkaan. Paikallinen pankki on jättänyt oven raolleen. Astut sisään ja nappaat nipun seteleitä, ja sattumalta ne ovat muiden 	pelaajien säästöjä. Kerää 100 kaikilta muilta pelaajilta.",
	"Miksi laivamatkat ovat niin kalliit? Miksi en vain hiipisi sisään ja piiloutuisi tynnyriin? Tietenkin! <br> Säilytä tämä esine ja käytä se 	yhteen ilmaiseen venematkaan.",
	"Matkaamisesta väsyneenä otat torkut. Mutta heräät myös 100 köyhempänä. Oi voi!"
      ],
      pile3: [
       "Kultainen hevosenkenkä! Sinulla on kolme vaihtoehtoa: <br> 1) Vaihda se 100 rahaan. <br> 2) Jos viet sen Gold Coastiin, voit vaihtaa sen 300 	rahaan. <br> 3) Jos viet sen Capetowniin, voit vaihtaa sen 500 rahaan.",
	"Karavaani lähestyy. Omistaja tarjoaa ilmaisen kyydin St. Helenan saarelle. Ota tai jätä?",
	"Epäonnea! Hevosenkenkä putoaa jostakin päähäsi ja menetät tajuntasi. Mikä todennäköisyys! Lepää seuraava vuoro.",
	"Löydät yksinäisen kamelin vaeltelemassa. Seuraavalla vuorollasi voit matkustaa tuplasti pidemmälle kuin heittämäsi nopan luku."
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

