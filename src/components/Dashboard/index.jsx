import React, { useState, useEffect } from "react"

const Dashboard = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v2/all?fields=name,region,flag");
                if (!response.ok) {
                    throw new Error("Failed to fetch countries");
                }
                const data = await response.json();
                setCountries(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Countries List</h1>
            <ul>
                {countries.map((country) => (
                    <li key={country.name} style={{ marginBottom: "20px" }}>
                        <img src={country.flag} alt={`${country.name} flag`} style={{ width: "50px", height: "30px", marginRight: "10px" }} />
                        <strong>{country.name}</strong> - {country.region}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Dashboard