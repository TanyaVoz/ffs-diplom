export default function DeleteSeance()
{
    return (
        <form action="вудуеу_hall" method="post" accept-charset="utf-8">
            <p className="conf-step__paragraph">Вы действительно хотите снять с сеанса фильм <span></span>?</p>
            
            <div className="conf-step__buttons text-center">
                <input type="submit" value="Удалить" className="conf-step__button conf-step__button-accent"/>
                    <button className="conf-step__button conf-step__button-regular">Отменить</button>
            </div>
        </form>
    )
}