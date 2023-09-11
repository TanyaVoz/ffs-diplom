import { useDispatch, useSelector } from "react-redux";
import { chooseDate } from "../../../../reducers/adminReducer";

export default function ChooseSessionDate() {
    const { chosenDate } = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    const today = new Date();

    // Обработчик изменения выбранной даты
    const handleChange = ({ target }) => {
        dispatch(chooseDate(target.value));
    };

    const minDate = `${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}`;

    return (
        <div className="conf-step__session-date">
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="datepicker">
                Дата сеансов:
                <input
                    className="conf-step__input"
                    type="date"
                    name="datepicker"
                    min={minDate}
                    value={chosenDate}
                    onChange={handleChange}
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                    required
                />
            </label>
        </div>
    );
}


