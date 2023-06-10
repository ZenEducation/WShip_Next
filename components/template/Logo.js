import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'next/image';
import { APP_NAME } from 'constants/app.constant';
import image from '../../public/img/logo/logo-light-full.png';
import image1 from '../../public/img/logo/logo-dark-full.png';

import imageLms from '../../public/img/logo/pata-shala-lms.png';

import image2 from '../../public/img/logo/Screenshot 2023-06-07 134357.png';
import { THEME_ENUM } from 'constants/theme.constant';
const { MODE_DARK } = THEME_ENUM;
const LOGO_SRC_PATH = '/../../public/img/logo/';

const Logo = (props) => {
  const { type, mode, gutter, className, imgClass, style, logoWidth } = props;

  console.log('imgClass imgClass', imgClass);

  return (
    <div
      className={classNames('logo', className, gutter)}
      style={{
        ...style,
        ...{ width: logoWidth },
      }}>
      <Image
        className={imgClass}
        src={mode == MODE_DARK ? imageLms : imageLms}
        alt={`${APP_NAME} logo`}
        width={110}
        height={110}
      />
    </div>
  );
};

Logo.defaultProps = {
  mode: 'light',
  type: 'full',
  logoWidth: 'auto',
};

Logo.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']),
  type: PropTypes.oneOf(['full', 'streamline']),
  gutter: PropTypes.string,
  imgClass: PropTypes.string,
  logoWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Logo;
