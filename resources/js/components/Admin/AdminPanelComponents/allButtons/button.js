export default function Button(props) {
    
    const { text, callback, className } = props;

    return (
        // Отображение кнопки с классами и текстом из пропсов
        <button
            className={`conf-step__button conf-step__button-accent ${className || ''}`}
            onClick={callback} // Вызов функции callback при клике на кнопку
        >
            {text} {/* Отображение текста на кнопке */}
        </button>
    );
}

