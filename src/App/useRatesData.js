import { useEffect, useState } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        const fetchRates = () => {
            const response = "https://api.exchangerate.host/latest?base=PLN";

            fetch(response)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }

                    return response;
                })
                .then(
                    response => response.json())
                .then(({ rates, date }) =>
                    setRatesData({
                        status: "success",
                        rates,
                        date,
                    })
                )
                .catch((error) => console.error(error),
                    setRatesData({ status: "error" }));
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};