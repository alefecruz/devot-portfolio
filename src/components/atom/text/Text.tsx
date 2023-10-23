'use client';
import { type ReactElement } from 'react';

import * as S from './styles';
import { IText } from './interfaces';

const Text = ({ children, ...rest }: IText): ReactElement => {
    return <S.TextComponent {...rest}>{children}</S.TextComponent>;
};

export default Text;
