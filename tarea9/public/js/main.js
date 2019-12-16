class Game {
  date;
  teams;
  location;
  time;

  constructor(date, teamOne, teamTwo, location, time) {
    this.date = date;
    this.teams = teamOne + '&' + teamTwo;
    this.location = location;
    this.time = time;
  }

  getTeams() {
    return this.teams.split('&');
  }
}

let games = [
  new Game('9/01', 'U1', 'U4', 'AJ Katzenmaier', '9:30 a.m.'),
  new Game('9/01', 'U3', 'U2', 'Greenbay', '1:00 p.m.'),

  new Game('9/08', 'U5', 'U6', 'Howard A Yeager', '9:30 a.m.'),
  new Game('9/08', 'U6', 'U1', 'Marjorie P Hart', '1:00 p.m.'),

  new Game('9/15', 'U2', 'U4', 'North', '9:30 a.m.'),
  new Game('9/15', 'U3', 'U5', 'AJ Katzenmaier', '1:00 p.m.'),

  new Game('9/22', 'U1', 'U3', 'South', '9:30 a.m.'),
  new Game('9/22', 'U2', 'U6', 'Howard A Yeager', '1:00 p.m.'),

  new Game('9/29', 'U4', 'U5', 'Greenbay', '9:30 a.m.'),

  new Game('10/06', 'U2', 'U5', 'Marjorie P Hart', '9:30 a.m.'),
  new Game('10/06', 'U1', 'U6', 'South', '1:00 p.m.'),

  new Game('10/08', 'U3', 'U4', 'Howard A Yeager', '9:30 a.m.'),
  new Game('10/08', 'U5', 'U1', 'Greenbay', '1:00 p.m.'),

  new Game('10/20', 'U6', 'U3', 'North', '9:30 a.m.'),
  new Game('10/20', 'U2', 'U4', 'Marjorie P Hart', '1:00 p.m.'),

  new Game('10/27', 'U3', 'U1', 'AJ Katzenmaier', '9:30 a.m.'),
  new Game('10/27', 'U5', 'U6', 'Howard A Yeager', '1:00 p.m.')
];

var app = new Vue({
  el: '#app',
  data: {
    games: [],
    show: false
  }
})

//Get games by team

function getGamesByTeam(team) {
  let result = games.filter(
    game => game.getTeams().includes(team)
  )
  app.games = result;
  app.show = true;
}

function getGamesByDate(date) {
  let result = games.filter(
    game => game.date === date
  )
  app.games = result;
  app.show = true;
}

function getGamesByLocation(location) {
  let result = games.filter(
    game => game.location === location
  )
  app.games = result;
  app.show = true;
}

function reset() {
  app.games = [];
  app.show = false;
  $('.navbar-collapse').collapse('hide');
}
