import React, { useState, useEffect } from "react";
import { GET, fetcher } from "./services/fetcher";

interface AppProps {}

const App = (props: AppProps) => {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/api/hello")
            .then((res) => res.json())
            .then((data) => setData(data.message))
            .catch((e) => console.log("[fetch erorr]", e));

        /*
        Alternatively with fetcher
          fetcher("/api/hello", "GET").then((data) => setData(data.message));
        OR
          GET("/api/hello").then((data) => setData(data.message));
        (since both functions automatically parse the JSON and automatically log errors)
        */
    }, []);

    return (
        <div className="mx-auto mt-5 w-25">
            <div className="alert alert-info text-center">Hello {data}</div>
        </div>
    );
};

export default App;
