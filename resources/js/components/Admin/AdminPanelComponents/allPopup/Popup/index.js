import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../../../../../reducers/createPopup";
import close from "../../../../Images/close.png";
import classNames from "classnames";
import AddHall from "../HallsPopup/add";
import DeleteHall from "../HallsPopup/delete";
import AddMovie from "../MoviePopup/add";
import DeleteMovie from "../MoviePopup/delete";
import AddSeance from "../SeancePopup/add";
import DeleteSeance from "../SeancePopup/delete";
import EditMovie from "../MoviePopup/edit";
import EditSeance from "../SeancePopup/edit";

export default function Popup() {
  const { active, title, form } = useSelector((state) => state.popup);
  const dispatch = useDispatch();

  // Определение компонентов формы на основе значения `form`
  const formsComponents = {
    addHall: AddHall,
    editHall: AddHall,
    deleteHall: DeleteHall,
    addMovie: AddMovie,
    editMovie: EditMovie,
    deleteMovie: DeleteMovie,
    addSeance: AddSeance,
    editSeance: EditSeance,
    deleteSeance: DeleteSeance,
  };

  // Компонент формы, который будет отображен на основе значения `form`
  const FormComponent = formsComponents[form];

  return (
    <div className={classNames("popup", { "active": active })}>
      <div className="popup__container">
        <div className="popup__content">
          <div className="popup__header">
            <h2 className="popup__title">
              {title}
              <a className="popup__dismiss" onClick={() => dispatch(closePopup())}>
                <img src={close} alt="Закрыть" />
              </a>
            </h2>
          </div>
          <div className="popup__wrapper">
            {FormComponent && <FormComponent />}
          </div>
        </div>
      </div>
    </div>
  );
}

