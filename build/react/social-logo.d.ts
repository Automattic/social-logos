import React, { PureComponent } from 'react';
import { SocialLogoData } from './social-logo-data';
export type SocialLogoProps = React.SVGAttributes<SVGSVGElement> & {
    icon: (typeof SocialLogoData)[number]['name'];
    size?: number;
};
export declare class SocialLogo extends PureComponent<SocialLogoProps> {
    static defaultProps: {
        size: number;
    };
    static propTypes: {
        icon: any;
        size: any;
        onClick: any;
        className: any;
    };
    render(): import("react/jsx-runtime").JSX.Element;
}
