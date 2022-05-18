export default async function (Sokning) {
    
    var searchCountry;
    const username = "weknowit"; //Tas bort vid offentliggörande 
    
    //Hämtar data baserad på sökning. sökningen bör vara antingen land eller stad
    await fetch(`http://api.geonames.org/searchJSON?country=${Sokning}&username=${username}&maxRows=10&orderby=population&fcode=ADM1`, {
      method: "GET",
    })
      
      .then((response) => {if(!response.ok){
        //vad händer om man söker på ASDFaegadfjglka? varför ger det felmeddelande?
        throw new Error("something went wrong");
        
      }
      return response.json();
       
      }
  )
  
  .then((response) => {
  searchCountry = response;
  })
  .catch((err) => {console.log("Error fetching test endpoint", err), searchCountry = []});
    
      return searchCountry;
  }