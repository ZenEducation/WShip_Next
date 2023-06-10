import lmsNavigationConfig from './lms.navigation.config';

import appsNavigationConfig from './apps.navigation.config';
import uiComponentNavigationConfig from './ui-components.navigation.config';
import pagesNavigationConfig from './pages.navigation.config';
import authNavigationConfig from './auth.navigation.config';
import docNavigationConfig from './doc.navigation.config';

const navigationConfig = [
  ...lmsNavigationConfig,
  ...appsNavigationConfig,
  ...uiComponentNavigationConfig,
  ...pagesNavigationConfig,
  ...authNavigationConfig,
  ...docNavigationConfig,
];

export default navigationConfig;
