import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const requestURL = "https://api.exchangerate.host/latest?base=PLN";
                const response = await axios.get(requestURL);
                const { rates, date } = response.data;

                setRatesData({
                    status: "success",
                    rates,
                    date,
                })
            } catch {
                setRatesData({
                    status: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};