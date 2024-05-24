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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialLogoData = exports.default = void 0;
/**
 * Export components.
 */
__exportStar(require("./social-logo"), exports);
var social_logo_1 = require("./social-logo");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return social_logo_1.SocialLogo; } });
var social_logo_data_1 = require("./social-logo-data");
Object.defineProperty(exports, "SocialLogoData", { enumerable: true, get: function () { return social_logo_data_1.SocialLogoData; } });
