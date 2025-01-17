"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpErrorConstants = void 0;
exports.HttpErrorConstants = {
    UNAUTHORIZED: {
        errorCode: 'UNAUTHORIZED',
        message: '로그인이 필요합니다.',
    },
    FORBIDDEN: {
        errorCode: 'FORBIDDEN',
        message: '권한이 없습니다.',
    },
    INTERNAL_SERVER_ERROR: {
        errorCode: 'INTERNAL_SERVER_ERROR',
        message: '알 수 없는 오류가 발생하였습니다.',
    },
    EXIST_EMAIL: {
        errorCode: 'EXIST_EMAIL',
        message: '이미 가입된 이메일입니다.',
    },
    EXIST_NICKNAME: {
        errorCode: 'EXIST_NICKNAME',
        message: '이미 사용중인 닉네임입니다.',
    },
    EXIST_DATE: {
        errorCode: 'EXIST_DATE',
        message: '해당 날짜의 정보가 이미 존재합니다.',
    },
    INVALID_AUTH: {
        errorCode: 'UNAUTHORIZED',
        message: '이메일 또는 비밀번호가 올바르지 않습니다.',
    },
    INVALID_TOKEN: {
        errorCode: 'UNAUTHORIZED',
        message: '잘못된 토큰값 입니다.',
    },
    CANNOT_FIND_USER: {
        errorCode: 'CANNOT_FIND_USER',
        message: '유저를 찾을 수 없습니다.',
    },
    CANNOT_FIND_PET: {
        errorCode: 'CANNOT_FIND_PET',
        message: '등록한 반려동물 정보를 찾을 수 없습니다.',
    },
    CANNOT_FIND_DIARY: {
        errorCode: 'CANNOT_FIND_DIARY',
        message: '다이어리를 찾을 수 없습니다.',
    },
    CANNOT_FIND_WEIGHT: {
        errorCode: 'CANNOT_FIND_WEIGHT',
        message: '등록한 체중 정보가 없습니다.',
    },
    CANNOT_FIND_SCHEDULE: {
        errorCode: 'CANNOT_FIND_SCHEDULE',
        message: '등록한 스케줄링이 없습니다.',
    },
    AUTH_LINK_EXPIRED: {
        errorCode: 'AUTH_LINK_EXPIRED',
        message: '이 메일링크는 이미 사용됐거나, 만료되었습니다(24시간 초과). 메일 인증을 다시 진행해주세요.',
    },
    AUTH_TYPE_INVALID: {
        errorCode: 'AUTH_TYPE_INVALID',
        message: '이메일 인증 유형이 유효하지 않습니다.',
    },
    CANNOT_UPDATE_SOCIAL_USER: {
        errorCode: 'CANNOT_UPDATE_SOCIAL_USER',
        message: '소셜로그인 유저는 이메일 및 비밀번호를 변경할 수 없습니다.',
    },
    EXPIRED_ACCESS_TOKEN: {
        errorCode: 'EXPIRED_ACCESS_TOKEN',
        message: '액세스 토큰이 만료되었습니다.',
    },
    EXPIRED_REFRESH_TOKEN: {
        errorCode: 'EXPIRED_REFRESH_TOKEN',
        message: '리프레시 토큰이 만료되었습니다. 다시 로그인이 필요합니다.',
    },
    CANNOT_FIND_BOARD: {
        errorCode: 'CANNOT_FIND_BOARD',
        message: '게시글을 찾을 수 없습니다.',
    },
    CANNOT_FIND_AUCTION_BOARD: {
        errorCode: 'CANNOT_FIND_AUCTION_BOARD',
        message: '경매 게시글을 찾을 수 없습니다.',
    },
    BOARD_PRIVATE: {
        errorCode: 'BOARD_PRIVATE',
        message: '해당 게시글은 비공개 상태입니다.',
    },
    BOARD_NOT_WRITER: {
        errorCode: 'BOARD_NOT_WRITER',
        message: '게시글 작성자가 아닙니다.',
    },
    REPLY_NOT_WRITER: {
        errorCode: 'REPLY_NOT_WRITER',
        message: '댓글 작성자가 아닙니다.',
    },
    CANNOT_FIND_REPLY: {
        errorCode: 'CANNOT_FIND_REPLY',
        message: '댓글을 찾을 수 없습니다.',
    },
    BOOKMAEK_EXIST: {
        errorCode: 'BOOKMAEK_EXIST',
        message: '이미 북마크가 된 게시글 입니다.',
    },
    BOOKMAEK_NOT_EXIST: {
        errorCode: 'BOOKMAEK_NOT_EXIST',
        message: '북마크를 찾을 수 없습니다.',
    },
    LIVESTREAMINFO_NOT_EXIST: {
        errorCode: 'LIVESTREAMINFO_NOT_EXIST',
        message: '해당 경매 라이브 정보를 찾을 수 없습니다.',
    },
    PRICE_NOT_SPECIFIED: {
        errorCode: 'PRICE_NOT_SPECIFIED',
        message: '가격이 정의되지 않은 유형의 게시글 입니다.',
    },
};
//# sourceMappingURL=http-error-objects.js.map