export default function AcceptBtn(props) {
    const { text, onDelete } = props;
    const dispatch = useDispatch();

    const handleCancel = (e) => {
        e.preventDefault();
        dispatch(closePopup());
    }

    return (
        <div className="conf-step__buttons text-center">
            <input
                type="submit"
                value={onDelete ? "Сохранить" : text}
                className="conf-step__button conf-step__button-accent"
            />
            <button className="conf-step__button conf-step__button-regular" onClick={handleCancel}>
                Отменить
            </button>
            {onDelete && (
                <button className="conf-step__button conf-step__button-regular" onClick={onDelete}>
                    Удалить
                </button>
            )}
        </div>
    );
}