'use client';
import { css } from 'styled-components';

export const typeMapper = {
    TITLE: css`
        ${(props) => props.theme.FONTS.BOLD}
        font-size: ${(props) => props.theme.SIZES.XLARGE}
    `,
    CONTENT: css`
        ${(props) => props.theme.FONTS.MEDIUM}
        font-size: ${(props) => props.theme.SIZES.MEDIUM}
    `,
    BODY1: css`
        ${(props) => props.theme.FONTS.SEMI_BOLD}
        font-size: ${(props) => props.theme.SIZES.LARGE}
    `,
    BODY2: css`
        ${(props) => props.theme.FONTS.REGULAR}
        font-size: ${(props) => props.theme.SIZES.XSMALL}
    `,
    DESCRIPTION: css`
        ${(props) => props.theme.FONTS.SEMI_BOLD}
        font-size: ${(props) => props.theme.SIZES.XLARGE}
    `,
    TITLE2: css`
        ${(props) => props.theme.FONTS.BOLD}
        font-size: ${(props) => props.theme.SIZES.XLARGE}
    `,
    BUTTON: css`
        ${(props) => props.theme.FONTS.REGULAR}
        font-size: ${(props) => props.theme.SIZES.XSMALL}
    `,
} as const;
