import styled from 'styled-components';

import { typeMapper } from './mappers';
import { IText } from './interfaces';

export const TextComponent = styled.p<IText>`
    color: ${({ color, theme }) =>
        color !== undefined ? theme.COLORS[color] : theme.COLORS.DARK};
    ${({ format }) => format !== undefined && typeMapper[format]}
`;
