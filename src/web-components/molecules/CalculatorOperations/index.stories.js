import React from 'react';
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import CalculatorOperations from './index';

storiesOf('Molecules/CalculatorOperations', module)
    .addDecorator(withInfo)
    .addParameters({
      info: {
        inline: true,
      }
    })
    .add(
      'actions', () =>  <CalculatorOperations />
    )