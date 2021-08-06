import { useState, useEffect } from "react"; 

const Location = () => {

    const [locationjson, setlocationjson] = useState([]);

    const getLocations = async () => {    
      const hope = await fetch("http://localhost:5000/locations/");
      const data = await hope.json()
      setlocationjson(data);
      
    };
   
    useEffect(() => {
      getLocations(); 
    }, []);

    const showjson = (e) => {
        alert(JSON.stringify(locationjson));    
    };

    return (
          <div>
              <h1>Here are the locations we have!</h1>
              <p>{locationjson.map(locationjson => <div>{locationjson.name}, {locationjson.region}</div>)}</p>
          </div>
      )
}

export default Location;