import { useNavigate } from "react-router-dom";

export default function Button(props) {
    const { text, link, callback } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        // Если callback есть и является функцией, вызываем его
        if (callback && typeof callback === "function") {
            callback();
        }

        // Проверяем, есть ли ссылка, прежде чем переходить
        if (link) {
            navigate(link);
        }
    };

    return (
        <button className="acceptin-button" onClick={handleClick}>
            {text}
        </button>
    );
}
