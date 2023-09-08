import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";

// Компонент для отображения QR-кода билета
export default function QRCodeTicket(props) {
    const { code } = props;
    const qrImageRef = useRef(null);

    // Функция для генерации QR-кода
    const generateQRCode = async (text) => {
        try {
            const qrDataURL = await QRCode.toDataURL(text, {
                errorCorrectionLevel: "Q",
                margin: 3,
            });
            qrImageRef.current.src = qrDataURL;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        generateQRCode(code);
    }, [code]);

    // Отображение изображения QR-кода
    return (
        <img ref={qrImageRef} className="ticket__info-qr" alt="QR Code" />
    );
}



