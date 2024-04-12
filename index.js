const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#search-by-name");
    const inputValue = input.value;

    fetch("http://localhost:3000/players")
      .then((resp) => resp.json())
      .then((data) => {
        const filteredData = data.filter((player) => player.name === inputValue);
        renderBballCard(filteredData);
      });
  });
};

document.addEventListener("DOMContentLoaded", init);

function renderBballCard(players) {
  const nbaCard = document.getElementById("nba-card");
  nbaCard.innerHTML = ""; 

  players.forEach((player) => {
    const card = document.createElement("ul");
    card.className = "card";
    card.innerHTML = `
      <img src="${player.img}">
      <div class="content">
        <h4>${player.name}</h4>
        <p> Team- ${player.team}</p>
        <p> Position- ${player.position}</p>
        <p> Height- ${player.height}</p>
        <p> TitleWins- ${player.titleWins}</p>
        <p> Career Points- ${player.careerPoints}</p>
        <p> Career Average Points- ${player.careerAvgPoints}</p>
      </div>
    `;

    nbaCard.append(card);
  });
}


//I want the user to be able to search for a player 
    // lets make sure the submit event works
    // how do i catch the user input 

//by inputing a name and click a button to submit
// informatioin comes up they will see the info and stats of that player
