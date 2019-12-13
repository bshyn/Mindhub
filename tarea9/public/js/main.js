class Game{
  date;
  teams;
  location;
  time;

  constructor(date, teamOne, teamTwo, location, time){
    this.date = date;
    this.teams = teamOne + '&' + teamTwo;
    this.location = location;
    this.time = time;
  }

  getTeams(){
    return this.teams.split('&');
  }
}

//September games
let game1 = new Game('9/01', 'U1', 'U4', 'AJ Katzenmaier', '9:30 a.m.');
let game2 = new Game('9/01', 'U3', 'U2', 'Greenbay', '1:00 p.m.');

let game3 = new Game('9/08', 'U5', 'U6', 'Howard A Yeager', '9:30 a.m.');
let game4 = new Game('9/08', 'U6', 'U1', 'Marjorie P Hart', '1:00 p.m.');

let game5 = new Game('9/15', 'U2', 'U4', 'North', '9:30 a.m.' );
let game6 = new Game('9/15', 'U3', 'U5', 'AJ Katzenmaier', '1:00 p.m.');

let game7 = new Game('9/22', 'U1', 'U3', 'South', '9:30 a.m.');
let game8 = new Game('9/22', 'U2', 'U6', 'Howard A Yeager', '1:00 p.m.');

let game9 = new Game('9/29', 'U4', 'U5', 'Greenbay', '9:30 a.m.');

let games = [game1, game2, game3, game4, game5, game6, game7, game8, game9];

var app = new Vue({
  el: '#app',
  data: {
    games: [],
    show: false
  }
})

//Get games by team

function getGamesByTeam(team){
  let result = games.filter(
    game => game.getTeams().includes(team)
  )
  app.games = result;
  app.show = true;
}

function getGamesByDate(date){
  let result = games.filter(
    game => game.date === date
  )
  app.games = result;
  app.show = true;
}

function getGamesByLocation(location){
  let result = games.filter(
    game => game.location === location
  )
  app.games = result;
  app.show = true;
}
