export default function ActionBtn(props) {
    const { cancel, save } = props;

    return (
        <div className="conf-step__buttons text-center">
            <button className="conf-step__button conf-step__button-regular" onClick={cancel}>
                Отмена
            </button>
            <input
                type="submit"
                value="Сохранить"
                className="conf-step__button conf-step__button-accent"
                onClick={save}
            />
        </div>
    );
}

