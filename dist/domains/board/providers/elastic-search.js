"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardElasticSearch = void 0;
const elasticsearch_1 = require("@nestjs/elasticsearch");
const common_1 = require("@nestjs/common");
let BoardElasticSearch = class BoardElasticSearch {
    constructor(elasticsearchService) {
        this.elasticsearchService = elasticsearchService;
    }
    async insertBoard(board, boardCommercial, boardAuction) {
        const keywords = {
            title: board.title,
            description: board.description,
        };
        if (boardCommercial !== undefined && boardCommercial !== null) {
            board.boardCommercial = boardCommercial;
            keywords['pettern'] = boardCommercial.pattern;
            keywords['size'] = boardCommercial.size;
            keywords['variety'] = boardCommercial.variety;
            keywords['gender'] = boardCommercial.gender;
        }
        if (boardAuction !== undefined && boardAuction !== null) {
            board.boardAuction = boardAuction;
            keywords['pettern'] = boardAuction.pattern;
            keywords['size'] = boardAuction.size;
            keywords['variety'] = boardAuction.variety;
            keywords['gender'] = boardAuction.gender;
        }
        board.keywords = JSON.stringify(keywords);
        await this.elasticsearchService.index({
            index: 'nori_board',
            id: board.idx.toString(),
            body: board,
        });
    }
    async boardSearch(boardIdx) {
        try {
            const response = await this.elasticsearchService.get({
                index: 'nori_board',
                id: boardIdx.toString(),
            });
            console.log('response: ', response);
            return response;
        }
        catch (error) {
            if (error.statusCode === 404) {
                return null;
            }
            throw error;
        }
    }
    async searchTotal(keyword) {
        const categories = ['adoption', 'auction', 'market', 'ask', 'free'];
        const results = {};
        for (const category of categories) {
            const result = await this.elasticsearchService.search({
                index: 'nori_board',
                body: {
                    query: {
                        bool: {
                            must: [
                                {
                                    match: {
                                        keywords: keyword,
                                    },
                                },
                                {
                                    match: {
                                        category: category,
                                    },
                                },
                            ],
                        },
                    },
                    size: 5,
                    sort: [
                        {
                            _score: {
                                order: 'desc',
                            },
                        },
                    ],
                },
            });
            results[category] = result.hits.hits;
        }
        return results;
    }
    async searchCategory(keyword, pageRequest) {
        console.log(keyword);
        const result = await this.elasticsearchService.search({
            index: 'nori_board',
            body: {
                query: {
                    bool: {
                        must: [
                            {
                                match: {
                                    keywords: keyword,
                                },
                            },
                            {
                                match: {
                                    category: pageRequest.category,
                                },
                            },
                        ],
                    },
                },
                size: pageRequest.limit,
                from: pageRequest.offset,
                sort: [
                    {
                        _score: {
                            order: 'desc',
                        },
                    },
                ],
            },
        });
        return result.hits.hits;
    }
    async deleteBoard(boardIdx) {
        try {
            const response = await this.elasticsearchService.delete({
                index: 'nori_board',
                id: boardIdx.toString(),
            });
            return response;
        }
        catch (error) {
            console.error('Error deleting documents:', error);
            throw error;
        }
    }
    async updateBoard(boardIdx, board, boardCommercial, boardAuction) {
        await this.deleteBoard(boardIdx);
        await this.insertBoard(board, boardCommercial, boardAuction);
    }
};
BoardElasticSearch = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [elasticsearch_1.ElasticsearchService])
], BoardElasticSearch);
exports.BoardElasticSearch = BoardElasticSearch;
//# sourceMappingURL=elastic-search.js.map