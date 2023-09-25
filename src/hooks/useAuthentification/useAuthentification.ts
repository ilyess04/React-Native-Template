import { useSelector } from "react-redux";
import { IRootState } from "../../common/interfaces";

const useAuthentification = () => {
  const auth = useSelector((state: IRootState) => state).auth;
  return auth;
};
export default useAuthentification;
