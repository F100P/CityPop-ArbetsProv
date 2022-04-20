export default async function (Sokning) {
    var searchCity;
    
    await fetch(`http://api.geonames.org/searchJSON?q=${Sokning}&username=weknowit&maxRows=10&orderby=population`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        searchCity = response;
      })
      .catch((err) => console.log("Error fetching test endpoint", err));
  
      return searchCity;
  }