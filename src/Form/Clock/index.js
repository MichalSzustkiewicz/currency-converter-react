import { useCurrentDate } from "./useCurrentDate";
import { CurrentDate } from "./styled";

const formatDate = (date) =>
    date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

const Clock = () => {
    const date = useCurrentDate();

    return (
        <CurrentDate>
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </CurrentDate>
    );
};

export default Clock;