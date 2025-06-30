import { PureComponent } from 'react';
import { SocialLogoData } from './social-logo-data';
import type { SVGAttributes } from 'react';
export type SocialLogoProps = SVGAttributes<SVGSVGElement> & {
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
