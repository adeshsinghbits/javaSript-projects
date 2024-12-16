import  { useState, useEffect } from "react";

function CurrencyConvertor() {
    const [currencies, setCurrencies] = useState("USD");
    const [convertCurrrencies, setconvertCurrencies] = useState("INR")
    const [to, setTo] = useState()
    const [from, setFrom] = useState()

    useEffect(() => {
        // Fetch currency data
        const fetchData = async () => {
        try {
            const api = `https://api.exchangerate-api.com/v4/latest/${currencies}`;
            const data = await fetch(api).then((res) => res.json());
            setCurrencies(data.rates); 
            setTo("To")
            setFrom("from")
            setconvertCurrencies(data.rates)
        } catch (error) {
            console.error("Error fetching currency data:", error);
        }
        };

        fetchData();
    }, []); 


    return (
        <div>
        <div>
        <h1>{to}</h1>
        <select name="Currency" id="currency">
        {Object.keys(currencies).map((currency) => (
            <option key={currency}>
                {currency}
            </option>
            ))}
        </select>
        </div>
        <div>
        <h1>{from}</h1>
        <select name="Currency" id="currency">
        {Object.keys(convertCurrrencies).map((currency) => (
            <option key={currency}>
                {currency}
            </option>
            ))}
        </select>
        </div>
        </div>
    );
}

export default CurrencyConvertor;
