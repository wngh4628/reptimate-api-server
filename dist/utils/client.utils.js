"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectPlatform = void 0;
function detectPlatform(userAgent) {
    let currentOS;
    const web = /mozilla/i.test(userAgent);
    if (web) {
        currentOS = 'web';
    }
    else {
        if (userAgent.search('okhttp') > -1) {
            currentOS = 'android';
        }
        else if (userAgent.search('alamofire') > -1) {
            currentOS = 'ios';
        }
        else {
            currentOS = 'else';
        }
    }
    return currentOS;
}
exports.detectPlatform = detectPlatform;
//# sourceMappingURL=client.utils.js.map