"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardOrderCriteria = exports.BoardVerifyType = exports.EmailVerifyType = void 0;
var EmailVerifyType;
(function (EmailVerifyType) {
    EmailVerifyType["NEWUSER"] = "NEWUSER";
    EmailVerifyType["OLDUSER"] = "OLDUSER";
})(EmailVerifyType = exports.EmailVerifyType || (exports.EmailVerifyType = {}));
var BoardVerifyType;
(function (BoardVerifyType) {
    BoardVerifyType["AUCTION"] = "auction";
    BoardVerifyType["AUCTIONSELLING"] = "auctionSelling";
    BoardVerifyType["AUCTIONEND"] = "auctionEnd";
    BoardVerifyType["ADOPTION"] = "adoption";
    BoardVerifyType["FREE"] = "free";
    BoardVerifyType["MARKET"] = "market";
    BoardVerifyType["REPLY"] = "reply";
    BoardVerifyType["COMMENT"] = "comment";
    BoardVerifyType["SELLING"] = "selling";
    BoardVerifyType["END"] = "end";
})(BoardVerifyType = exports.BoardVerifyType || (exports.BoardVerifyType = {}));
var BoardOrderCriteria;
(function (BoardOrderCriteria) {
    BoardOrderCriteria["CREATED"] = "created";
    BoardOrderCriteria["PRICE"] = "price";
    BoardOrderCriteria["VIEW"] = "view";
    BoardOrderCriteria["MARKET"] = "market";
    BoardOrderCriteria["REPLY"] = "reply";
    BoardOrderCriteria["COMMENT"] = "comment";
    BoardOrderCriteria["SELLING"] = "selling";
    BoardOrderCriteria["END"] = "end";
})(BoardOrderCriteria = exports.BoardOrderCriteria || (exports.BoardOrderCriteria = {}));
//# sourceMappingURL=constant.js.map