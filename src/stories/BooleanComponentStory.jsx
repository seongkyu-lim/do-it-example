import React from 'react';
import { storiesOf } from '@storybook/react';

import BooleanComponent from '../03/BooleanComponent';

storiesOf('BooleanComponent', module)
  .add('기본설정', () => <BooleanComponent />)
  .add('bored 기본설정', () => <BooleanComponent bored />);