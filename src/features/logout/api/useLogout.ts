import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "app/redux/store.ts";
import { authSlice } from "entities/auth";

export const useLogout = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return () => {
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("access_token");
        navigate("/");
        dispatch(authSlice.actions.setIsAuth(false));
    };
};
