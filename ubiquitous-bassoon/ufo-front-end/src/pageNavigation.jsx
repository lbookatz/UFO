import { useState } from "react"; 
import Location from "./components/Location/index"
import "./App.css";
import Events from "./Pages/Events/index"
import LocationSearch from "./components/Specific-Event";

const Navigation = () => {
    const pageEvents = "events";
    const pageLocations = "locations"; 
    const pageHome = "home";
    const pageSearch = "search"
    const [page, setPage] = useState([pageEvents])
    const renderEvents = () => (
        <div>
            {/* <h1>Here are all the events from the back end that doesn't work yet... lol.</h1> */}
            <Events />
        </div>
    )
    const renderLocations = () => (
        <div>
            <Location />
        </div>
    )
    const renderSearch = () => (
        <div> 
            <LocationSearch />
        </div>
    )
    const renderHome = () => (
        <div>
            <h1>Welcome to Alien Atlas! Want to know if extra terrestrials have visited your home town? We can help!</h1>
        </div>
    )
    const navigateTo = (nextPage) => {
        setPage(nextPage);
    }

    return (
        <div className="navigation">
            <header>
                <button className="button1" onClick={() => navigateTo(pageHome)}>Home</button>
                <button className="button2" onClick={() => navigateTo(pageEvents)}>Events</button>
                <button className="button3" onClick={() => navigateTo(pageLocations)}>Locations</button>
                <button className="button4" onClick={() => navigateTo(pageSearch)}>Search</button>
            </header>
            {page === pageHome && renderHome()}
            {page === pageEvents && renderEvents()}
            {page === pageLocations && renderLocations()}
            {page === pageSearch && renderSearch()}
        </div>
    )
}

export default Navigation;
