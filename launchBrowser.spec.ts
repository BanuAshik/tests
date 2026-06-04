import { test, expect, firefox, chromium } from "@playwright/test";

test("Launching EDGE Browser using local Configuration and open Redbus webpage", async () => {
    // step 1 : launch the EDGE browser
    const EdgeBrowser = await chromium.launch({ headless: false, channel: 'msedge' })
    // step 2 : create a new browser context 
    const EdgeContext = await EdgeBrowser.newContext()
    //step 3 : create a new independent page
    const EdgePage = await EdgeContext.newPage()
    // step 4 : Launch the redbus url
    await EdgePage.goto("https://www.redbus.in")
    // step 5 : print the title of the webpage
    const titleOfWindow = await EdgePage.title()
    console.log("title of the page is " + ":" + titleOfWindow)
    const currentUrl = await EdgePage.url()
    console.log("url" + ":" + currentUrl)
    await expect(EdgePage).toHaveTitle(/RedBus/i)
    

})
test("Launching FIREFOX Browser using local Configuration and open flipkart webpage", async () => {
    // step 1 : launch the FIREFOX browser
    const FirefoxBrowser = await firefox.launch({ headless: false })
    // step 2 : create a new browser context 
    const FirefoxContext = await FirefoxBrowser.newContext()
    //step 3 : create a new independent page
    const firefoxPage = await FirefoxContext.newPage()
    // step 4 : Launch the redbus url
    await firefoxPage.goto("https://www.flipkart.com")
    // step 5 : print the title of the webpage
    const titleOfWindow = await firefoxPage.title()
    console.log("title of the page is " + ":" + titleOfWindow)
    const currentUrl = await firefoxPage.url()
    console.log("url" + ":" + currentUrl)
    await expect(firefoxPage).toHaveTitle(/Online Shopping Site for Mobiles/);
    //await expect(firefoxPage).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books &amp; More. Best Offers!")

})