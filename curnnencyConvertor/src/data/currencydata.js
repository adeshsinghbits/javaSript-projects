import { useState, useEffect } from "react";


function  Currrencydata(currrency) {
    const [data, setData] = useState({})
    useEffect(() => {
        const api = `https://api.exchangerate-api.com/v4/latest/${currrency}`
        fetch(api).then((res) => res.json()).then((res) => setData(res.rates))
        console.log(data);
    }, [currrency])
    
    return data
}  

export default Currrencydata