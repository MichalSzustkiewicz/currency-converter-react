import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota w PLN*:
                    </span>
                    <input className="form__field" type="number" name="amount" min="0" step="0.01"
                        placeholder="Wpisz kwotę w PLN" required />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Waluta:
                    </span>
                    <select className="form__field" name="currency">
                        <option value="USD">Dolar amerykański</option>
                        <option value="AUD">Dolar australijski</option>
                        <option value="CAD">Dolar kanadyjski</option>
                        <option value="EUR">Euro</option>
                        <option value="CHF">Frank szwajcarski</option>
                        <option value="GBP">Funt brytyjski</option>
                        <option value="ILS">Szekel</option>
                    </select>
                </label>
            </p>
        </fieldset>
        <p>
            <button className="form__button">Przelicz!</button>
        </p>
        <p className="form__info">Kursy pochodzą ze strony Narodowego Banku Polskiego z Tabeli nr 245/A/NBP/2022 z dnia
            2022-12-20.</p>
        <p className="form__result"></p>
    </form>
);

export default Form;