export default function AddHall()
{
    return (
        <form action="add_hall" method="post" accept-charset="utf-8">
            <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Название зала
                <input className="conf-step__inputв" type="text" placeholder="Например, &laquo;Зал 1&raquo;" name="name"
                       required/>
            </label>
            <div className="conf-step__buttons text-center">
                <input type="submit" value="Добавить зал" className="conf-step__button conf-step__button-accent"/>
                    <button className="conf-step__button conf-step__button-regular">Отменить</button>
            </div>
        </form>
    )
}