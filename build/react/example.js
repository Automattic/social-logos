"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const social_logo_1 = require("./social-logo");
const social_logo_data_1 = require("./social-logo-data");
require("../css/example.css");
/**
 * An example React component that displays all the social logos.
 *
 * @returns {React.Component} The `SocialLogosExample` component.
 */
function SocialLogosExample() {
    const [useSmallIcons, setUseSmallIcons] = (0, react_1.useState)(false);
    const [showIconNames, setShowIconNames] = (0, react_1.useState)(true);
    const iconSize = useSmallIcons ? 24 : 48;
    const handleClick = name => {
        const code = `<SocialLogo icon="${name}" size="${iconSize}" />`;
        window.prompt('Copy component code:', code);
    };
    const handleSmallIconsToggle = e => {
        setUseSmallIcons(e.target.checked);
    };
    const handleIconNamesToggle = e => {
        setShowIconNames(e.target.checked);
    };
    const allSocialLogos = social_logo_data_1.SocialLogoData.map(logo => {
        return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(social_logo_1.SocialLogo, { icon: logo.name, size: iconSize, onClick: handleClick.bind(this, logo.name) }), showIconNames && (0, jsx_runtime_1.jsx)("p", { children: logo.name })] }, logo.name));
    });
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "social-logos-example" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Social Logos" }), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "display-control-group" }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "display-control" }, { children: [(0, jsx_runtime_1.jsx)("h4", { children: "Small icons" }), (0, jsx_runtime_1.jsxs)("label", Object.assign({ className: "switch" }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", onChange: handleSmallIconsToggle, checked: useSmallIcons }), (0, jsx_runtime_1.jsx)("span", { className: "handle" })] }))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "display-control" }, { children: [(0, jsx_runtime_1.jsx)("h4", { children: "Icon names" }), (0, jsx_runtime_1.jsxs)("label", Object.assign({ className: "switch" }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", onChange: handleIconNamesToggle, checked: showIconNames }), (0, jsx_runtime_1.jsx)("span", { className: "handle" }), (0, jsx_runtime_1.jsx)("span", { className: "switch-label", "data-on": "On", "data-off": "Off" })] }))] }))] })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: "icons" }, { children: allSocialLogos })), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "https://github.com/Automattic/social-logos" }, { children: "GitHub" })) })] })));
}
exports.default = SocialLogosExample;
