import { useAppDispatch } from "app/redux/store.ts";
import { authSlice } from "entities/auth";
import { IRegistrationResponse } from "entities/auth/api/types.ts";

export const useSetUser = () => {
    const dispatch = useAppDispatch();

    const setUser = ({ idToken, displayName, email, refreshToken }: IRegistrationResponse) => {
        localStorage.setItem("access_token", idToken);
        localStorage.setItem("refresh_token", refreshToken);

        dispatch(authSlice.actions.setIsAuth(true));
        dispatch(
            authSlice.actions.setUser({
                email,
                displayName,
            })
        );
    };

    return { setUser };
};
