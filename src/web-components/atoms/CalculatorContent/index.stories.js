import React from 'react';
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import CalculatorContent from './index';

storiesOf('Atoms/CalculatorContent', module)
    .addDecorator(withInfo)
    .addParameters({
      info: {
        inline: true,
      }
    })
    .add(
      'default', () =>  <CalculatorContent text="1984"/>
    )
    .add(
      'header', () =>  <CalculatorContent text="1884 + 100 =" classModifier="header"/>
    )