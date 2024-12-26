// Define cards for each pile
const piles = {
  pile1: [
    {
      text: "Uhm, nothing here?",
    },
    {
      text: "You find an odd-looking coin. After a more careful examination and a little dusting, it seems to be an old gold coin from ancient times. You take it to a pawn store that is willing to pay you 200 for it. Nice!",
    },
    {
      text: "You stumble on a little rock on your path and hit your head pretty bad. Wait for next two turns to recover.",
    }
  ],
  pile2: [
    {
      text: "You are ambushed by a group of bandits and lose all your money. Gosh!",
    },
    {
      text: "You are surrounded by a band of thieves, but you manage to talk yourself out by giving the location information of other players. You get to keep your money, but all other players lose 300. What a rat!",
    },
    {
      text: "An unnoticed shoplifter manages to snatch 300 from you. Whoops!",
    }
  ],
  pile3: [
    {
      text: "Lucky Horseshoe!",
    },
    {
      text: "Horseshoe flipped!",
    },
    {
      text: "Found a gold Horseshoe!",
    }
  ]
};

// Handle click on a pile
function pickCard(pileId) {
  const cards = piles[pileId];
  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  // Fade-out all piles and reset scale
  document.querySelectorAll('.pile').forEach(pile => {
    pile.classList.add('hidden');  // Trigger fade-out for unchosen piles
    pile.classList.remove('scale-up'); // Remove scaling effect from unchosen piles
  });

  // Show the selected pile and scale it up in the center
  const selectedPile = document.getElementById(pileId);
  selectedPile.classList.remove('hidden'); // Ensure the chosen pile is visible
  selectedPile.classList.add('scale-up');  // Apply scale-up animation

  // Display the result
  document.getElementById("result").innerHTML = `
    <p>You picked: ${randomCard.text}</p>
  `;
}

// Add event listeners to piles (now the piles are images)
document.getElementById("pile1").addEventListener("click", () => pickCard("pile1"));
document.getElementById("pile2").addEventListener("click", () => pickCard("pile2"));
document.getElementById("pile3").addEventListener("click", () => pickCard("pile3"));

// Reset game
document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("result").innerHTML = "";  // Clear result
  
  // Reset the positions, scale, and visibility of all piles
  document.querySelectorAll('.pile').forEach(pile => {
    pile.classList.remove('hidden'); // Make all piles visible
    pile.classList.remove('scale-up');  // Remove the scale-up effect
  });
});
