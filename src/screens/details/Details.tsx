import { DetailsTemplate } from "../../templates";

const DetailsScreen = ({ navigation }): JSX.Element => {
  return <DetailsTemplate onGoBack={() => navigation.goBack()} />;
};
export default DetailsScreen;
