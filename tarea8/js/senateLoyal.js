var app = new Vue({
  el: "#app",
  data: { members: 0,
          negMembers: 0,
          republicans: 0,
          democrats: 0,
          independents: 0, 
          republicansVotedWithParty: 0,
          democratsVotedWithParty: 0, 
          independentsVotedWithParty: 0 }
})

function compareSenatorsByLoyalty(a, b){
  if (a.votes_with_party_pct < b.votes_with_party_pct) {
    return -1;
  } else if (a.votes_with_party_pct > b.votes_with_party_pct) {
    return 1;
  } else {
    return 0;
  }
}

function compareSenatorsByLoyaltyNeg(a, b){
  if (a.votes_with_party_pct < b.votes_with_party_pct) {
    return 1;
  } else if (a.votes_with_party_pct > b.votes_with_party_pct) {
    return -1;
  } else {
    return 0;
  }
}

function truncar(num){
  return Math.trunc(num*100)/100;
}

var republicans;
var republicansVotedWithParty = 0;

var democrats;
var democratsVotedWithParty = 0;

var independents;
var independentsVotedWithParty = 0;

var negMembers;
var members;
var url = "https://api.propublica.org/congress/v1/113/senate/members.json";
var req =
{
  "headers":
  {
    "X-API-Key": "jzIZ2MUdjhQMY46RDpJrcyIDzCFEhp3nydTweSK1"
  }
};

fetch(url, req)
  .then(res => res.json())
  .then(data => {members = Array.from(data.results[0].members);
                negMembers = Array.from(data.results[0].members);
  })
  .then(() => {members.sort(compareSenatorsByLoyalty);
              negMembers.sort(compareSenatorsByLoyaltyNeg);
  })
  .then(() => {republicans = members.filter(member => member.party === 'R');
              democrats = members.filter(member => member.party === 'D');
              independents = members.filter(member => member.party === 'I');
  })
  .then(() => {app.members = members;
              app.republicans = republicans;
              app.democrats = democrats;
              app.independents = independents;
              app.negMembers = negMembers;
  })
  .then(() => { republicans.forEach(member => republicansVotedWithParty += member.votes_with_party_pct);
                republicansVotedWithParty = truncar(republicansVotedWithParty/republicans.length);
                app.republicansVotedWithParty = republicansVotedWithParty;

                democrats.forEach(member => democratsVotedWithParty += member.votes_with_party_pct);
                democratsVotedWithParty = truncar(democratsVotedWithParty/democrats.length);
                app.democratsVotedWithParty = democratsVotedWithParty;

                independents.forEach(member => independentsVotedWithParty += member.votes_with_party_pct);
                independentsVotedWithParty = truncar(independentsVotedWithParty/independents.length);
                app.independentsVotedWithParty = independentsVotedWithParty;  
  })
