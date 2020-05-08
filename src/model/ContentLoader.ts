import {action, observable} from "mobx";

export default class ContentLoader {

    @observable curPage: number;
    @observable entriesPerPage: number;
    maxPage: number;
    @observable dummyContent: string[];


    constructor(pageNumber: number, entries: number) {
        this.dummyContent = [];
        for (let i = 1; i <= pageNumber; i++) {
            this.dummyContent.push("Test " + i);
        }
        this.entriesPerPage = entries;
        this.maxPage = Math.ceil(this.dummyContent.length / this.entriesPerPage) - 1;
        this.curPage = 0;
    }

    @action setEntriesPerPage(entries: number): void {
        this.entriesPerPage = entries;
        this.maxPage = Math.ceil(this.dummyContent.length / this.entriesPerPage) - 1;
        if (this.curPage > this.maxPage) {
            this.curPage = this.maxPage;
        }
    }

    getDummyPage(pageNum: number): string[] {
        if (pageNum <= this.maxPage && pageNum >= 0) {
            const start = pageNum * this.entriesPerPage;
            return this.dummyContent.slice(start, start + this.entriesPerPage);
        } else {
            return [];
        }
    }

    getCurrentPage(): string[] {
        return this.getDummyPage(this.curPage);
    }

    @action nextPage(): void {
        this.curPage += 1;
        if (this.curPage > this.maxPage) {
            this.curPage = this.maxPage;
        }
    }

    @action previousPage(): void {
        this.curPage -= 1;
        if (this.curPage < 0) {
            this.curPage = 0;
        }

    }
}