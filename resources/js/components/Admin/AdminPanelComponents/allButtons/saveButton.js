export default function SaveButton(props) {
    const { cancel, save } = props;

    return (
        <div className="conf-step__buttons text-center">
            {/* Кнопка "Отмена" для отмены операции */}
            <button className="conf-step__button conf-step__button-regular" onClick={cancel}>
                Отмена
            </button>

            {/* Кнопка "Сохранить" для выполнения операции сохранения */}
            <input
                type="submit"
                value="Сохранить"
                className="conf-step__button conf-step__button-accent"
                onClick={save} 
            />
        </div>
    );
}

