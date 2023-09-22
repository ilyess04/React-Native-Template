import {Text, View} from 'react-native';
import styles from './style';
import {ICommonComponent} from '../../common/interfaces';

function HomeScreen({i18n}: ICommonComponent) {
  return (
    <View style={styles.homeLayoutStyle}>
      <Text>{i18n.t('helloWorld')}</Text>
    </View>
  );
}
export default HomeScreen;
