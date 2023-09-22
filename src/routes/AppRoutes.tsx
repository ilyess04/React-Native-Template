import {ILayout, IRootState} from '../common/interfaces';
import {useSelector} from 'react-redux';
import {I18n} from 'i18n-js';
import {en, fr} from '../i18n';
import {HomeScreen} from '../screens';

const AppRoutes = ({isDarkMode}: ILayout): JSX.Element => {
  const localStorage = useSelector((state: IRootState) => state);
  const i18n = new I18n({...en, ...fr});
  i18n.translations = {en, fr};
  i18n.locale = 'en';

  return <HomeScreen i18n={i18n} isDarkMode={isDarkMode} />;
};
export default AppRoutes;
