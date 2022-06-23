import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

const url = 'http://localhost:3021/jobs';

function App() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        (async () => {
            setJobs((await axios.get(url)).data);
        })();
    }, []);

    return (
        <div className="App">
            <h1>Jobs</h1>
            <p>There are {jobs.length} jobs.</p>
        </div>
    );
}

export default App;
