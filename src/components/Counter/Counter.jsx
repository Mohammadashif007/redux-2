import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
} from "../../redux/features/counter/counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div className="flex gap-5 bg-gray-600 px-16 py-12 rounded-md">
                    <button
                        onClick={() => dispatch(decrement())}
                        className="bg-green-600 px-3 py-2 text-white text-2xl rounded-md"
                    >
                        Increment
                    </button>
                    <p className="text-5xl font-bold text-white">{count}</p>
                    <button
                        onClick={() => dispatch(increment())}
                        className="bg-red-600 px-3 py-2 text-white text-2xl rounded-md"
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
