/// ////////////////////////////////////
// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski"
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze"
    ]
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  }
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(`Bayern Munich: ${players1}`);
console.log(`Borrussia Dortmund: ${players2}`);

// 2. The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name,
// and one array ('fieldPlayers') with all the remaining 10 field players.
const [gk, ...fieldPlayers] = players1;
console.log(`GK of Bayern Munich: ${gk}`);
console.log(`Field players of Bayern Munich: ${fieldPlayers}`);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(`All players: ${allPlayers}`);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players.
// So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(`All players of Bayern Munich: ${players1Final}`);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const { team1, team2, x: draw } = game.odds;
console.log("Odd of team 1:", team1);
console.log("Odd of team 2:", team2);
console.log("Odd of draw:", draw);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array)
// and prints each of them to the console,
// along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...playerNames) {
  const uniquePlayerNames = playerNames.filter(
    (player, index) => playerNames.indexOf(player) === index
  );
  const totalNumGoals = uniquePlayerNames
    .map((playerName) => {
      const numGoals = game.scored.filter(
        (player) => player === playerName
      ).length;
      console.log(playerName, numGoals);
      return numGoals;
    })
    .reduce((prev, cur) => prev + cur, 0);
  console.log("Total goals by the players:", totalNumGoals);
};
printGoals(...players1);
printGoals(...players2);
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win.
// Print to the console which team is more likely to win,
// WITHOUT using an if/else statement or the ternary operator.
const teamLikelyToWin = (team1 < team2 && "team 1") || "team 2";
console.log(`Team more likely to win is ${teamLikelyToWin}`);
