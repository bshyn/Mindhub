var app = new Vue({
el: "#app",
data: {members}
})

var members;
var url = "https://api.propublica.org/congress/v1/113/senate/members.json"
var req =
{
  "headers":
  {
    "X-API-Key": "jzIZ2MUdjhQMY46RDpJrcyIDzCFEhp3nydTweSK1"
  }
}
fetch(url, req)
  .then(res => res.json())
  .then(data => {
    app.members = data.results[0].members
  })
  .catch(err => console.log(err))
