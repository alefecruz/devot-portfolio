import styled, { css } from 'styled-components';

import { IImage } from './interfaces';

export const ImageComponent = styled.img<IImage>`
    width: ${({ widthSize, theme }) => theme.SIZES[widthSize]};
    height: ${({ heightSize, theme }) => theme.SIZES[heightSize]};
`;
