import { useDispatch, useSelector } from "react-redux";
import { addBonus } from "../../redux/features/bonus/bonusSlice";


const Bonus = () => {
    const bonus = useSelector((state) => state.bonus.value)
    const dispatch = useDispatch()
    return (
        <div>
            <p>Bonus: {bonus}</p>
            <button onClick={() => dispatch(addBonus(6))}  className="bg-red-600 px-3 py-2 text-white text-2xl rounded-md">
                Bonus
            </button>
        </div>
    );
};

export default Bonus;