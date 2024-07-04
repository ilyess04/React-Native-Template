import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../common/interfaces";
import { resetCredentials, setCredentials } from "../../common/redux";

const useAuthentification = () => {
  const auth = useSelector((state: IRootState) => state).auth;
  const dispatch = useDispatch();

  const handleSetCredentials = (
    accessToken: string,
    refreshToken: string,
    userId: string | number
  ) => {
    dispatch(
      setCredentials({
        accessToken,
        refreshToken,
        userId,
      })
    );
  };

  const handleLogout = () => {
    dispatch(resetCredentials());
  };

  return {
    ...auth,
    setCredentials: handleSetCredentials,
    logout: handleLogout,
  };
};
export default useAuthentification;
