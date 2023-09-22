import {ILayout} from '../layouts';
import {I18n} from 'i18n-js';

interface ICommonComponent extends ILayout {
  i18n: I18n;
}
export type {ICommonComponent};
