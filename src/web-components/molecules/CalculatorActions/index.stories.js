import React from 'react';
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import CalculatorActions from './index';

storiesOf('Molecules/CalculatorActions', module)
    .addDecorator(withInfo)
    .addParameters({
      info: {
        inline: true,
      }
    })
    .add(
      'actions', () =>  <CalculatorActions />
    )