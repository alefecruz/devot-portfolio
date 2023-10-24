import { ISizeTheme } from '@/global/theme/interfaces';

export interface IImage {
    src: string;
    alt: string;
    widthSize: keyof ISizeTheme;
    heightSize: keyof ISizeTheme;
}
