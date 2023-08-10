import { useDispatch, useSelector } from "react-redux";
import { chooseDate } from "../../../reducers/createAdminSlice";

export default function ChooseSessionDate() {
    const { chosenDate } = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    const today = new Date();

    // Обработчик изменения выбранной даты
    const handleChange = ({ target }) => {
        dispatch(chooseDate(target.value)); // Диспетчер для обновления выбранной даты в хранилище
    };

    return (
        <div>
            {/* Форма выбора даты сеансов */}
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="datepicker">
                Дата сеансов:
                <input
                    className="conf-step__input"
                    type="date"
                    name="datepicker"
                    // Устанавливаем минимальную дату как текущую дату
                    min={`${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}`}
                    value={chosenDate} // Установка значения даты
                    onChange={handleChange} // Привязка обработчика изменения
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" // Паттерн для ввода даты
                    required
                />
            </label>
        </div>
    );
}

