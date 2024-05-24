"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialLogo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = __importStar(require("react"));
const social_logo_data_1 = require("./social-logo-data");
class SocialLogo extends react_1.PureComponent {
    render() {
        const _a = this.props, { size, onClick, icon, className } = _a, otherProps = __rest(_a, ["size", "onClick", "icon", "className"]);
        const iconClass = ['social-logo', 'social-logo-' + icon, className]
            .filter(Boolean)
            .join(' ');
        const logoData = social_logo_data_1.SocialLogoData.find(logo => logo.name === icon);
        if (!logoData) {
            return (0, jsx_runtime_1.jsx)("svg", Object.assign({ height: size, width: size }, otherProps));
        }
        const svg = react_1.default.cloneElement(logoData.svg, Object.assign({ className: iconClass, height: size, width: size, onClick: onClick }, otherProps));
        return svg;
    }
}
SocialLogo.defaultProps = {
    size: 24,
};
SocialLogo.propTypes = {
    icon: prop_types_1.default.string.isRequired,
    size: prop_types_1.default.number,
    onClick: prop_types_1.default.func,
    className: prop_types_1.default.string,
};
exports.SocialLogo = SocialLogo;
