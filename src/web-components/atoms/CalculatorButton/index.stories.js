import React from 'react';
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import CalculatorButton from './index';

storiesOf('Atoms/CalculatorButton', module)
    .addDecorator(withInfo)
    .addParameters({
      info: {
        inline: true,
      }
    })
    .add(
      'action', () =>  <CalculatorButton value="AC" type="action"/>
    )
    .add(
      'actionLarger', () =>  <CalculatorButton value="SAVE" type="action-larger"/>
    )
    .add(
      'operand', () =>  <CalculatorButton value="1" type="operand"/>
    )
    .add(
      'operation', () =>  <CalculatorButton value="+" type="operation"/>
    )