const puppeteer = require("puppeteer");
const   codeObj = require("./codes");
const loginLink = "https://www.hackerrank.com/auth/login";
const email = "atul004le@gmail.com";
const password = "Atul@1234";


(async function(){
    try {
        let browserInstance = await puppeteer.launch({ headless : false , args : ['--start-maximized'] , defaultViewport : null});
        let newTab = await browserInstance.newPage();
        await newTab.goto(loginLink);
        await newTab.type("input[id = 'input-1']" , email ,{delay : 5});
        await newTab.type("input[type = 'password']" , password ,{delay : 5});
        await newTab.click("button[type='submit']");
        await waitAndClick("a[data-attr1='algorithms']", newTab);
        await waitAndClick("input[value='warmup']", newTab);
        let allchalenges = await newTab.$$(".list-container.left-pane .challenges-list a[data-js-track='Challenge-Title']")
        console.log("Total Question : ",allchalenges.length);
        let questionWillBeSolved = questionSolver(allchalenges[0], newTab , codeObj.answer[0]);




    } catch (error) {
        console.log(error);
    }
})()


// node HK_Asysc_await.js







async function questionSolver( question , page, answer){
    await question.click();
    await waitAndClick(".monaco-editor.no-user-select.vs" , page);
    await waitAndClick("input[type='checkbox']", page);
    // await page.waitForSelector("textarea[id='input-1']", page);
    await page.type("textarea[id='input-1']", answer, {delay : 50});
 await page.keyboard.down("Control");
 await page.keyboard.press("A" , {delay : 1000});
 await page.keyboard.press("X" , {delay : 1000});
 await page.keyboard.up("Control");
 await waitAndClick(".monaco-editor.no-user-select.vs" , page);
 await page.keyboard.down("Control");
 await page.keyboard.press("A" , {delay : 1000});
 await page.keyboard.press("V" , {delay : 1000});
 await page.keyboard.up("Control");
 await page.click(".msR.hr-monaco-compile.hr-monaco__run-code.ui-btn-styled", {delay : 500});





}

async function waitAndClick(selector , cpage){
    await cpage.waitForSelector(selector);
    let selectorClicked  = cpage.click(selector);
    return selectorClicked;
}

// function questionSolver(question, answer , page){
//     return new Promise (function(resolve , reject){
//         let questionWillbeClicked = question.click();
//         questionWillbeClicked.then(function(){
//             let EditorInFocusPromise = waitAndClick(".monaco-editor.no-user-select.vs" , page);
//               return EditorInFocusPromise;
//         }).then(function(){
//             return waitAndClick("input[type='checkbox']", page);
//         }).then(function(){
//             return page.waitForSelector("textarea[id='input-1']", page);
//         }).then(function(){
//                 return page.type("textarea[id='input-1']", answer , {delay : 20})
//         }).then(function(){
//             let Ctrlhold = page.keyboard.down("Control");
//             return Ctrlhold;
//         }).then(function(){
//             let PressA= page.keyboard.press("A" , {delay : 100});
//             return PressA; 
//         }).then(function(){
//             let PressX= page.keyboard.press("X" , {delay : 100});
//             return PressX; 
//         }).then(function(){
//             let CtrlUnhold = page.keyboard.up("Control");
//             return CtrlUnhold;
//         }).then(function(){
//               let mainEditorInFocus = waitAndClick(".monaco-editor.no-user-select.vs" , page);
//               return mainEditorInFocus;
//         }).then(function(){
//             let Ctrlhold = page.keyboard.down("Control");
//             return Ctrlhold;
//         }).then(function(){
//             let PressA= page.keyboard.press("A" , {delay : 100});
//             return PressA; 
//         }).then(function(){
//             let PressV= page.keyboard.press("V" , {delay : 100});
//             return PressV; 
//         }).then(function(){
//             let CtrlUnhold = page.keyboard.up("Control");
//             return CtrlUnhold;
//         })
//         .then(function(){
//             let RunTheCode = page.click(".msR.hr-monaco-compile.hr-monaco__run-code.ui-btn-styled", {delay : 500});
//             return RunTheCode;
//         })
//     })

// }