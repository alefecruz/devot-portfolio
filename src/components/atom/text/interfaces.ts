import { IColorTheme } from '@/global/theme/interfaces';

import { typeMapper } from './mappers';

export type IText = {
    format: keyof typeof typeMapper;
    children: string;
    color?: keyof IColorTheme;
};
