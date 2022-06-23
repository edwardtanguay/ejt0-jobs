import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

const backend_url = import.meta.env.VITE_BACKEND_URL;

function App() {
    const [jobs, setJobs] = useState([]);

    const getJobs = async () => {
        setJobs((await axios.get(backend_url)).data);
    };

    const handleShowButton = async (e) => {
        e.preventDefault();
        await getJobs();
    }

    return (
        <div className="App">
            <h1>Jobs</h1>
            <form>
                PIN: <input type="password" className="thePin" autoFocus />
                <button onClick={(e) => handleShowButton(e)}>Show</button>
            </form>
            {jobs.length > 0 && (
                <>
                    <p className="message">There are {jobs.length} jobs.</p>
                    {jobs.map((job, i) => {
                        return (
                            <div
                                className="job"
                                key={i}
                                dangerouslySetInnerHTML={{ __html: job.html }}
                            ></div>
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default App;
