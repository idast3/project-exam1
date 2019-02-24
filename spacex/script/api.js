// LAUNCH API

// Connect to launch api and convert to json format
fetch('https://api.spacexdata.com/v3/launches')
.then((response) => {
    return response.json();
})
.then((result) => {
    showLaunches(result);
})
.catch(error => console.log(error));

// Function to show content
function showLaunches(response) {
  var spaceLaunches = response;

  function sortDates(x, y) {
    return new Date(x.launch_date_utc).getTime() - new Date(y.launch_date_utc).getTime();
}

spaceLaunches.sort(sortDates);

    launch1.innerHTML +=
         "<div class=\"flightNumber\"> # " + spaceLaunches[75].flight_number + "</div>" +
         "<div class=\"launchDate\">" + spaceLaunches[75].launch_date_utc.slice(0,10) + "</div>" +
         "<h3 class=\"missionName\">" + spaceLaunches[75].mission_name + "</h2>" +
         "<div class=\"launchSite\"> <i class=\"fas fa-map-marker-alt\"></i>&nbsp; " + spaceLaunches[75].launch_site.site_name_long.replace(/\b(Historic|Launch|Complex|39A)\b/gi, '') + "</div>" +
         "<div class=\"rocket\"> <i class=\"fas fa-rocket\"></i>&nbsp; " + spaceLaunches[75].rocket.rocket_name + "</div>"

     launch2.innerHTML +=
          "<div class=\"flightNumber\"> # " + spaceLaunches[76].flight_number + "</div>" +
          "<div class=\"launchDate\">" + spaceLaunches[76].launch_date_utc.slice(0,10) + "</div>" +
          "<h3 class=\"missionName\">" + spaceLaunches[76].mission_name + "</h2>" +
          "<div class=\"launchSite\"> <i class=\"fas fa-map-marker-alt\"></i>&nbsp; " + spaceLaunches[76].launch_site.site_name_long.replace(/\b(Historic|Launch|Complex|4E|Space)\b/gi, '') + "</div>" +
          "<div class=\"rocket\"> <i class=\"fas fa-rocket\"></i>&nbsp; " + spaceLaunches[76].rocket.rocket_name + "</div>"

      launch3.innerHTML +=
           "<div class=\"flightNumber\"> # " + spaceLaunches[77].flight_number + "</div>" +
           "<div class=\"launchDate\">" + spaceLaunches[77].launch_date_utc.slice(0,10) + "</div>" +
           "<h3 class=\"missionName\">" + spaceLaunches[77].mission_name + "</h2>" +
           "<div class=\"launchSite\"> <i class=\"fas fa-map-marker-alt\"></i>&nbsp; " + spaceLaunches[77].launch_site.site_name_long.replace(/\b(Historic|Launch|Complex|39A)\b/gi, '') + "</div>" +
           "<div class=\"rocket\"> <i class=\"fas fa-rocket\"></i>&nbsp; " + spaceLaunches[77].rocket.rocket_name + "</div>"

};

showLaunches();
