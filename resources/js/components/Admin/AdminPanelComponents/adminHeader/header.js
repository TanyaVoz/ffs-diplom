import { useState } from "react";
import classNames from "classnames";

export default function CustomStepHeader(props) {
    // Локальное состояние для управления открытием/закрытием раздела
    const [isSectionOpen, setIsSectionOpen] = useState(true);

    return (
        <section className="conf-step">
            {/* Заголовок раздела с возможностью управления открытием/закрытием */}
            <header
                className={classNames("conf-step__header", {
                    "conf-step__header_opened": isSectionOpen,
                    "conf-step__header_closed": !isSectionOpen,
                })}
                onClick={() => setIsSectionOpen(!isSectionOpen)}
            >
                <h2 className="conf-step__title">{props.title}</h2>
            </header>
            {/* Содержимое раздела */}
            {props.children}
        </section>
    );
}


