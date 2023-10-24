'use client';
import React from 'react';

import { IImage } from './interfaces';

import { ImageComponent } from './styles';

function Image(props: IImage): React.ReactElement {
    return <ImageComponent {...props} />;
}

export default Image;
