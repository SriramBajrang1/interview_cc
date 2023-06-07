const { test, expect } = require('@playwright/test');
const { Navigation } = require('../Pages/NavigationPage');
const { CheckersPage } = require('../Pages/CheckersGamePage');

test('CheckersValidation', async ({ page }) => {
    const navigate = new Navigation(page);
    const checkers = new CheckersPage(page);
    // Step 1: Navigate to gamesforthebrain.com/game/checkers/
    await navigate.navigateToCheckersPage();
    //await page.goto("https://www.gamesforthebrain.com/game/checkers/");
    // Confrim that the site is up
    await navigate.verifyNavigatedToSite();

    // Requirement - Make 5 legal moves as orange
    // Step 1: Make Moves Until Ready to take a blue piece
        // Click checker and click the space to move to
        // First Move
    await checkers.moveToSpace("62", "73");
        // Requirement - Verify Make a move text is present 
    await checkers.confirmNextMoveCanBeMade();
        // Second Move
    await checkers.moveToSpace("42", "53")
        // confirm the next move can be made
    await checkers.confirmNextMoveCanBeMade();
        // Third Move
    await checkers.moveToSpace("22", "33")
    // confirm the next move can be made
    await checkers.confirmNextMoveCanBeMade();
    // Step 2: Requirement - Make Fourth Move - a move that will take a blue piece
    await checkers.doubleJump("11", "33", "15")
    // confirm the next move can be made
    await checkers.confirmNextMoveCanBeMade();
    // Step 3: Make 5th Move
    await checkers.moveToSpace("31", "22")
    // Step 4: Requirement - Click Restart
    await checkers.clickRestartButton()
    // Step 5: Requirement - verify game restarted
    await checkers.verifyRestart()
});