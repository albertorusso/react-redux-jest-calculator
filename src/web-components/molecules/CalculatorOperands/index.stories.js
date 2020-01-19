import React from 'react';
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import CalculatorOperands from './index';

storiesOf('Molecules/CalculatorOperands', module)
    .addDecorator(withInfo)
    .addParameters({
      info: {
        inline: true,
      }
    })
    .add(
      'actions', () =>  <CalculatorOperands />
    )