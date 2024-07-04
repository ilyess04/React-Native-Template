import { ENavigationsRoute } from "../../common/enums";
import { HomeTemplate } from "../../templates";

const HomeScreen = ({ navigation }): JSX.Element => {
  return (
    <HomeTemplate
      onNavigateToDetailsScreen={() =>
        navigation.navigate(ENavigationsRoute.details)
      }
    />
  );
};
export default HomeScreen;
