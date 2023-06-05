import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const fetchRates = () => {
            const requestURL = "https://api.exchangerate.host/latest?base=PLN";

            axios.get(requestURL)
                .then((response) => {
                    const { rates, date } = response.data;
                    setRatesData({
                        status: "success",
                        rates,
                        date,
                    })
                })
                .catch((error) => console.error(error),
                    setRatesData({ status: "error" }));
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};