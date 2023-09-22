import {Text, View} from 'react-native';
import {ILayout, IRootState} from '../common/interfaces';
import {useSelector} from 'react-redux';

const AppRoutes = ({isDarkMode}: ILayout): JSX.Element => {
  const auth = useSelector((state: IRootState) => state?.auth);

  return (
    <View>
      <Text>just red</Text>
    </View>
  );
};
export default AppRoutes;
