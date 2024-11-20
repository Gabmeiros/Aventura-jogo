const story = {
  start: {
    text: "Welcome to the adventure! What will you do first?",
    choices: {
      explore: "Explore the forest",
      rest: "Rest by the fire",
    },
  },
  explore: {
    text: "You venture into the forest and encounter a wild wolf. What do you do?",
    choices: {
      fight: "Fight the wolf",
      run: "Run away",
    },
  },
  rest: {
    text: "You rest by the fire and feel refreshed. Suddenly, you hear a noise. What do you do?",
    choices: {
      investigate: "Investigate the noise",
      ignore: "Ignore it and stay by the fire",
    },
  },
  fight: {
    text: "You fight bravely but the wolf is too strong. You lose the battle. Game over!",
    choices: {},
  },
  run: {
    text: "You escape safely but get lost in the forest. Game over!",
    choices: {},
  },
  investigate: {
    text: "You find a lost traveler who joins your journey. Congratulations, you made a friend!",
    choices: {},
  },
  ignore: {
    text: "You stay safe by the fire, but miss out on a potential adventure. Game over!",
    choices: {},
  },
};

function choose(option) {
  const currentStory = story[option];
  const storyText = document.getElementById("story");
  const choicesDiv = document.getElementById("choices");

  storyText.innerText = currentStory.text;

  choicesDiv.innerHTML = "";

  for (const [key, value] of Object.entries(currentStory.choices)) {
    const button = document.createElement("button");
    button.innerText = value;
    button.onclick = () => choose(key);
    choicesDiv.appendChild(button);
  }
}