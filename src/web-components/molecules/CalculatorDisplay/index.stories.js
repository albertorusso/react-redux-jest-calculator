import React from 'react';
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import CalculatorDisplay from './index';

storiesOf('Molecules/CalculatorDisplay', module)
    .addDecorator(withInfo)
    .addParameters({
      info: {
        inline: true,
      }
    })
    .add(
      'actions', () =>  <CalculatorDisplay />
    )