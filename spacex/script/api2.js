var content = document.getElementById('content');

// Connect to launch api and convert to json format
fetch('https://api.spacexdata.com/v3/launches')
.then((response) => {
    return response.json();
})
.then((result) => {
    showLaunches(result);
})
.catch(error => console.log(error))


// Function to show content
function showLaunches(response) {
  var spaceLaunches = response;

  function sortDates(x, y) {
    return new Date(x.launch_date_utc).getTime() - new Date(y.launch_date_utc).getTime();
}

spaceLaunches.sort(sortDates);

  for (var i = 75; i < spaceLaunches.length; i++) {

    content.innerHTML +=
      "<div class=\"flightNumber\"> # " + spaceLaunches[i].flight_number + "</div>" +
      "<div class=\"launchDate\">" + spaceLaunches[i].launch_date_utc.slice(0,10) + "</div>" +
      "<h3 class=\"missionName\">" + spaceLaunches[i].mission_name + "</h2>" +
      "<div class=\"launchSite\"> <i class=\"fas fa-map-marker-alt\"></i>&nbsp; " + spaceLaunches[i].launch_site.site_name_long +
      "<div class=\"rocket-lp\"> <i class=\"fas fa-rocket\"></i>&nbsp; " + spaceLaunches[i].rocket.rocket_name + "</div>"
  }

};

showLaunches();
