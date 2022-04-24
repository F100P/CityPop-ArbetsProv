export default async function (Sokning) {
    var searchCity;
    
    await fetch(`http://api.geonames.org/searchJSON?q=${Sokning}&username=weknowit&maxRows=10&orderby=population`, {
      method: "GET",
    })
      
      .then((response) => {if(response.ok){
        //vad händer om man söker på ASDFaegadfjglka? varför ger det felmeddelande?
         return response.json();
      }
      
      console.log(response);
      throw new Error("something went wrong");
        
      }
      
)
      .then((response) => {
        searchCity = response;
      })
      .catch((err) => {console.log("Error fetching test endpoint", err), searchCity = null});
  
      return searchCity;
  }