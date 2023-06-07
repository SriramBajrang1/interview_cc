const { test, expect } = require('@playwright/test');

exports.Navigation = class Navigation {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.site = "https://www.gamesforthebrain.com/game/checkers/";
        this.title = "Checkers";
        this.verifyNavigation = expect(page);
    };

    async navigateToCheckersPage() {
        // go to the website
        await this.page.goto(this.site);
    };    

    async verifyNavigatedToSite() {
        // verify the webiste has been navigated to
        this.verifyNavigation.toHaveURL(this.site);
    }
};