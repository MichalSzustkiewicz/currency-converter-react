import { useEffect, useState } from "react";
import "./style.css";

const dateFormatted = (date) =>
    date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => clearInterval(intervalId);
    });

    return (
        <p className="date">
            Dzisiaj jest
            {" "}
            {dateFormatted(date)}
        </p>
    );
};

export default Clock;