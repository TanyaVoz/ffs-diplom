export default function CinemaHallConfig()
{
    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
            <ul className="conf-step__selectors-box">
                <li><input type="radio" className="conf-step__radio" name="chairs-hall" value="Зал 1" checked/><span
                    className="conf-step__selector">Зал 1</span></li>
                <li><input type="radio" className="conf-step__radio" name="chairs-hall" value="Зал 2"/><span
                    className="conf-step__selector">Зал 2</span></li>
            </ul>
            <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в ряду:</p>
            <div className="conf-step__legend">
                <label className="conf-step__label">Рядов, шт<input type="text" className="conf-step__input"
                                                                    placeholder="10"/></label>
                <span className="multiplier">x</span>
                <label className="conf-step__label">Мест, шт<input type="text" className="conf-step__input"
                                                                   placeholder="8"/></label>
            </div>
            <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
            <div className="conf-step__legend">
                <span className="conf-step__chair conf-step__chair_standart"></span> — обычные кресла
                <span className="conf-step__chair conf-step__chair_vip"></span> — VIP кресла
                <span className="conf-step__chair conf-step__chair_disabled"></span> — заблокированные (нет кресла)
                <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
            </div>

            <div className="conf-step__hall">
                <div className="conf-step__hall-wrapper">
                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_disabled"></span><span
                        className="conf-step__chair conf-step__chair_disabled"></span>
                        <span className="conf-step__chair conf-step__chair_disabled"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_disabled"></span>
                        <span className="conf-step__chair conf-step__chair_disabled"></span><span
                        className="conf-step__chair conf-step__chair_disabled"></span>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_disabled"></span><span
                        className="conf-step__chair conf-step__chair_disabled"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_disabled"></span><span
                        className="conf-step__chair conf-step__chair_disabled"></span>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_disabled"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_disabled"></span>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_vip"></span>
                        <span className="conf-step__chair conf-step__chair_vip"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_disabled"></span>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_vip"></span><span
                        className="conf-step__chair conf-step__chair_vip"></span>
                        <span className="conf-step__chair conf-step__chair_vip"></span><span
                        className="conf-step__chair conf-step__chair_vip"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_disabled"></span>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_vip"></span><span
                        className="conf-step__chair conf-step__chair_vip"></span>
                        <span className="conf-step__chair conf-step__chair_vip"></span><span
                        className="conf-step__chair conf-step__chair_vip"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_disabled"></span>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_vip"></span><span
                        className="conf-step__chair conf-step__chair_vip"></span>
                        <span className="conf-step__chair conf-step__chair_vip"></span><span
                        className="conf-step__chair conf-step__chair_vip"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_disabled"></span>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_disabled"></span>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                    </div>

                    <div className="conf-step__row">
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                        <span className="conf-step__chair conf-step__chair_standart"></span><span
                        className="conf-step__chair conf-step__chair_standart"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}