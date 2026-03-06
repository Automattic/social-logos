"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable no-alert -- ok for demo */
const react_1 = require("react");
const social_logo_1 = require("./social-logo");
const social_logo_data_1 = require("./social-logo-data");
require("../css/example.css");
/**
 * An example React component that displays a single social logo.
 *
 * @param {object}  props               - The properties.
 * @param {string}  props.name          - Logo name.
 * @param {number}  props.iconSize      - Icon size.
 * @param {boolean} props.showIconNames - Whether to show icon names.
 * @return {Component} The `SocialLogoItemExample` component.
 */
function SocialLogoItemExample({ name, iconSize, showIconNames }) {
    const handleClick = (0, react_1.useCallback)(() => {
        const code = `<SocialLogo icon="${name}" size="${iconSize}" />`;
        window.prompt('Copy component code:', code);
    }, [iconSize, name]);
    return (jsx_runtime_1.jsxs("div", { children: [
            jsx_runtime_1.jsx(social_logo_1.SocialLogo, { icon: name, size: iconSize, onClick: handleClick }), showIconNames && jsx_runtime_1.jsx("p", { children: name })] }, name));
}
/**
 * An example React component that displays all the social logos.
 *
 * @return {Component} The `SocialLogosExample` component.
 */
function SocialLogosExample() {
    const [useSmallIcons, setUseSmallIcons] = (0, react_1.useState)(false);
    const [showIconNames, setShowIconNames] = (0, react_1.useState)(true);
    const iconSize = useSmallIcons ? 24 : 48;
    const handleSmallIconsToggle = (0, react_1.useCallback)(e => {
        setUseSmallIcons(e.target.checked);
    }, [setUseSmallIcons]);
    const handleIconNamesToggle = (0, react_1.useCallback)(e => {
        setShowIconNames(e.target.checked);
    }, [setShowIconNames]);
    const allSocialLogos = social_logo_data_1.SocialLogoData.map(logo => (jsx_runtime_1.jsx(SocialLogoItemExample, { name: logo.name, iconSize: iconSize, showIconNames: showIconNames }, logo.name)));
    return (jsx_runtime_1.jsxs("div", { className: "social-logos-example", children: [
            jsx_runtime_1.jsx("h1", { children: "Social Logos" }), jsx_runtime_1.jsxs("div", { className: "display-control-group", children: [
                    jsx_runtime_1.jsxs("div", { className: "display-control", children: [
                            jsx_runtime_1.jsx("h4", { children: "Small icons" }), jsx_runtime_1.jsxs("label", { className: "switch", htmlFor: "useSmallIcons", children: [
                                    jsx_runtime_1.jsx("input", { id: "useSmallIcons", type: "checkbox", onChange: handleSmallIconsToggle, checked: useSmallIcons }), jsx_runtime_1.jsx("span", { className: "handle" })
                                ] })
                        ] }), jsx_runtime_1.jsxs("div", { className: "display-control", children: [
                            jsx_runtime_1.jsx("h4", { children: "Icon names" }), jsx_runtime_1.jsxs("label", { className: "switch", htmlFor: "showIconNames", children: [
                                    jsx_runtime_1.jsx("input", { id: "showIconNames", type: "checkbox", onChange: handleIconNamesToggle, checked: showIconNames }), jsx_runtime_1.jsx("span", { className: "handle" }), jsx_runtime_1.jsx("span", { className: "switch-label", "data-on": "On", "data-off": "Off" })
                                ] })
                        ] })
                ] }), jsx_runtime_1.jsx("div", { className: "icons", children: allSocialLogos }), jsx_runtime_1.jsx("p", { children: jsx_runtime_1.jsx("a", { href: "https://github.com/Automattic/social-logos", children: "GitHub" }) })
        ] }));
}
exports.default = SocialLogosExample;
