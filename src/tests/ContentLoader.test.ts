import ContentLoader from "../model/ContentLoader";

const loader = new ContentLoader(32, 10);

test('Maximum Page Calculation', () => {
    expect(loader.maxPage).toBe(3);
});

test('Dummy Content length', () => {
    expect(loader.dummyContent.length).toBe(32);
});

test('Dummy Content', () => {
    for (let i = 0; i <= 31; i++) {
        const num = i + 1;
        expect(loader.dummyContent[i]).toBe("Test " + num);
    }
});

test('Get Certain Page', () => {
    const page = loader.getDummyPage(1);
    for (let i = 0; i <= 9; i++) {
        const num = i + 11;
        expect(page[i]).toBe("Test " + num);
    }
});

test('Page Length', () => {
    const page = loader.getDummyPage(1);
    expect(page.length).toBe(10);
});

test('Too Large Page Number', () => {
    const page = loader.getDummyPage(99);
    expect(page.length).toBe(0);
});

test('Change Entry number', () => {
    const tempLoader = new ContentLoader(31, 10);
    expect(tempLoader.getDummyPage(1).length).toBe(10);
    tempLoader.setEntriesPerPage(6);
    expect(tempLoader.maxPage).toBe(5);
    expect(tempLoader.getDummyPage(0).length).toBe(6);
    const page = tempLoader.getDummyPage(1);
    for (let i = 0; i <= 5; i++) {
        const num = i + 7;
        expect(page[i]).toBe("Test " + num);
    }
});

test('Change entry number -> current page greater than new max page', () => {
    const tempLoader = new ContentLoader(31, 10);
    tempLoader.curPage = 2;
    tempLoader.setEntriesPerPage(31);
    expect(tempLoader.curPage).toBe(0);
});

test('Next page', () => {
    loader.curPage = 0;
    loader.nextPage();
    expect(loader.curPage).toBe(1);
    loader.nextPage();
    expect(loader.curPage).toBe(2);
    const page = loader.getCurrentPage();
    for (let i = 0; i <= 9; i++) {
        const num = i + 21;
        expect(page[i]).toBe("Test " + num);
    }
    loader.nextPage();
    expect(loader.curPage).toBe(3);
    loader.nextPage();
    expect(loader.curPage).toBe(3);
    loader.nextPage();
    expect(loader.curPage).toBe(3);
    const lastPage = loader.getCurrentPage();
    for (let i = 0; i <= 1; i++) {
        const num = i + 31;
        expect(lastPage[i]).toBe("Test " + num);
    }
});

test('Previous page', () => {
    loader.curPage = 2;
    loader.previousPage();
    expect(loader.curPage).toBe(1);
    loader.previousPage();
    expect(loader.curPage).toBe(0);
    loader.previousPage();
    expect(loader.curPage).toBe(0);
    const page = loader.getCurrentPage();
    for (let i = 0; i <= 9; i++) {
        const num = i + 1;
        expect(page[i]).toBe("Test " + num);
    }
});