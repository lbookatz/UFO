/* form with on submit function */

import { useState, useEffect } from "react"; 

const LocationSearch = () => {
    const [location, setLocation] = useState();
    const [result, setResult] = useState([]);

    const fetchEvents = async (location) => {
        const response = await fetch("http://localhost:5000/events/location/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: location
            })
        })
        const data = await response.json()
        setResult(data);
    }
    
    const getEvents = (e) => {    
        e.preventDefault();
        fetchEvents(location)
    }

    return (
        <div> 
         <form onSubmit={getEvents}>
             <input onChange={(e) => setLocation(e.target.value)} />
             <button type="submit" />
         </form>
         <p>{result.map(result => <div>{result.object}, {result.date}</div>)}</p>
         </div>
      )
}

export default LocationSearch;