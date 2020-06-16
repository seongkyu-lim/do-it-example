import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../04/InputWithStyle';

storiesOf('InputWithStyle', module)
  .addWithJSX('기본 설정', () => <Input name="name" />)
  .addWithJSX('label 설정', () => <Input name="name" label="이름" />)
  .addWithJSX('value 설정', () => <Input name="name" label="이름" value="do it" />)
  .addWithJSX('errorMessage 예제', () => (
    <Input name="name" label="이름" errorMessage="이름을 입력해주세요" />
  ));
