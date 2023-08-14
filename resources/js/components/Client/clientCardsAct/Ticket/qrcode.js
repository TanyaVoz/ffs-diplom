import { useEffect, useRef } from "react";
import QRCode from "qrcode";

// Компонент для отображения QR-кода билета
export default function TicketQRCode(props) {
    // Получение кода для генерации QR-кода из пропсов
    const { code } = props;

    // Создание рефа для изображения QR-кода
    const imgCode = useRef(null);

    // Функция для генерации QR-кода
    const generateQR = async (text) => {
        try {
            // Генерация и установка изображения QR-кода
            imgCode.current.src = await QRCode.toDataURL(
                text, {
                errorCorrectionLevel: 'Q',
                margin: 3,
            });
        } catch (err) {
            console.error(err);
        }
    }

    // Эффект для генерации QR-кода при изменении кода
    useEffect(() => {
        generateQR(code);
    }, [code]);

    return (
        <img ref={imgCode} className="ticket__info-qr" alt="QRCode" />
    );
}


