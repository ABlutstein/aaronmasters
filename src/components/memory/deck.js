function shuffle(array, level) {
  let selectedLevel = level;
  let easyCards = [...array].slice(0, 12);
  let mediumCards = [...array].slice(0, 16);
  let hardCards = [...array];

  if (selectedLevel === "easy") {
    for (let i = 0; i < easyCards.length - 1; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = easyCards[i];
      easyCards[i] = easyCards[randomIndex];
      easyCards[randomIndex] = temp;
    }
    return easyCards;
  } else if (selectedLevel === "medium") {
    for (let i = 0; i < mediumCards.length - 1; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = mediumCards[i];
      mediumCards[i] = mediumCards[randomIndex];
      mediumCards[randomIndex] = temp;
    }
    return mediumCards;
  } else {
    for (let i = 0; i < array.length - 1; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = hardCards[i];
      hardCards[i] = hardCards[randomIndex];
      hardCards[randomIndex] = temp;
    }
    return hardCards;
  }
}

export default function initializeDeck(level) {
  let id = 0;
  const cards = [
    "Nightgale",
    "Caesar",
    "Elizabeth",
    "Galileo",
    "Antoinette",
    "Columbus",
    "Gandhi",
    "Patton",
    "Tut",
    "Earhart",
    "Cleopatra",
    "Newton",
  ].reduce((acc, type) => {
    acc.push({ id: id++, type });
    acc.push({ id: id++, type });
    return acc;
  }, []);
  return shuffle(cards, level);
}
