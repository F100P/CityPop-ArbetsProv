export default async function () {
    var test;
  
    await fetch("http://api.geonames.org/searchJSON?q=london&username=weknowit", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
          test = response;
      })
      .catch((err) => console.log("Error fetching test endpoint", err));
  
      return test;
  }