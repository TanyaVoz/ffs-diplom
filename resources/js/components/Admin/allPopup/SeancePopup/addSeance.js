import {useDispatch, useSelector} from "react-redux";
import {createSeance} from "../../../../reducers/createAdminSlice";
import SeanceCard from "../../adminCards/seanceCard";

export default function AddSeance() {
    const {movies, chosenDate} = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    const {id} = useSelector((state) => state.popup);

    return (
        <SeanceCard
            callbackSubmit={(datetime, cinema_hall_id, film_id) => dispatch(createSeance({
                datetime,
                cinema_hall_id,
                film_id
            }))}
            cinema_hall_id={id}
            film_id={movies[0].id}
            date={chosenDate}
            time={"00:00"}
        />
    );
}
