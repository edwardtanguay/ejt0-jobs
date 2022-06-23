import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

const backend_url = import.meta.env.VITE_BACKEND_URL;

function App() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        (async () => {
            setJobs((await axios.get(backend_url)).data);
        })();
    }, []);

    return (
        <div className="App">
            <h1>Jobs</h1>
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
        </div>
    );
}

export default App;
