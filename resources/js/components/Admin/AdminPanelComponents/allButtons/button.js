export default function Button(props) {
    
    const { text, callback, className } = props;

    return (
        
        <button
            className={`conf-step__button conf-step__button-accent ${className || ''}`}
            onClick={callback} 
        >
            {text} {/* Отображение текста на кнопке */}
        </button>
    );
}

