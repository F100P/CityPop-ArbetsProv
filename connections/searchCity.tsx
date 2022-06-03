export default async function (Sokning: any) {
    
  var searchCity;
  const username = "weknowit"; //Tas bort vid offentliggörande 
  
  //Hämtar data baserad på sökning. sökningen bör vara antingen land eller stad
  await fetch(`http://api.geonames.org/searchJSON?q=${Sokning}&username=${username}&maxRows=10&orderby=population&fcode=PPLC&fcode=PPLA`, {
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
searchCity = response;

})
.catch((err) => {console.log("Error fetching test endpoint", err), searchCity = []});

    return searchCity;
}