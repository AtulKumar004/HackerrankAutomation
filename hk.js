const puppeteer = require("puppeteer");
const   codeObj = require("./codes");

// Main file => run node hk.js

const loginLink = "https://www.hackerrank.com/auth/login";
const email = "atul004le@gmail.com";
const password = "Atul@1234";
let browserOpen = puppeteer.launch({ headless : false , args : ['--start-maximized'] , defaultViewport : null});
let page ;
browserOpen.then(function (browserObj) {
    let browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;

}).then(function (newTab) {
     page = newTab
    let  hackRankOpenPromise = newTab.goto(loginLink);
    return hackRankOpenPromise;
}).then(function(){
    let emailEnteredPromise = page.type("input[id = 'input-1']" , email ,{delay : 5});
    return emailEnteredPromise;
}).then(function(){
    let PasswordEnteredPromise = page.type("input[type = 'password']" , password ,{delay : 50});
    return PasswordEnteredPromise;
}).then(function() {
    let PressEnterPromise = page.click("button[type='submit']");
    return PressEnterPromise;
})
.then(function(){
    let clickOnAlgoPromise = waitAndClick("a[data-attr1='algorithms']", page);
    return clickOnAlgoPromise;
}).then(function(){
    let clickOnWarmUp = waitAndClick("input[value='warmup']", page);
    return clickOnWarmUp;
}).then(function(){ 
    let waitForSomeTime = page.waitFor(3000);
})
.then(function(){
    


    let AllQuestionPromise = page.$$(".list-container.left-pane .challenges-list a[data-js-track='Challenge-Title']");
    return AllQuestionPromise;
})
.then(function(QuestionsArr){
    console.log("Number of question =>" ,QuestionsArr.length );
    let questionWillBeSolved = questionSolver(QuestionsArr[0], codeObj.answer[0],page);
    return questionWillBeSolved;
})



function waitAndClick(selector , cpage){ 
    return new Promise(function(resolve , reject){
        let waitForModelPromise = cpage.waitForSelector(selector);
        waitForModelPromise.then(function(){
            let clickModle = cpage.click(selector );
            return clickModle;
        }).then(function(){
            resolve();
        }).catch(function(err){
            reject();
        })

    })

}

function questionSolver(question, answer , page){
    return new Promise (function(resolve , reject){
        let questionWillbeClicked = question.click();
        questionWillbeClicked.then(function(){
            let EditorInFocusPromise = waitAndClick(".monaco-editor.no-user-select.vs" , page);
              return EditorInFocusPromise;
        }).then(function(){
            return waitAndClick("input[type='checkbox']", page);
        }).then(function(){
            return page.waitForSelector("textarea[id='input-1']", page);
        }).then(function(){
                return page.type("textarea[id='input-1']", answer , {delay : 20})
        }).then(function(){
            let Ctrlhold = page.keyboard.down("Control");
            return Ctrlhold;
        }).then(function(){
            let PressA= page.keyboard.press("A" , {delay : 100});
            return PressA; 
        }).then(function(){
            let PressX= page.keyboard.press("X" , {delay : 100});
            return PressX; 
        }).then(function(){
            let CtrlUnhold = page.keyboard.up("Control");
            return CtrlUnhold;
        }).then(function(){
              let mainEditorInFocus = waitAndClick(".monaco-editor.no-user-select.vs" , page);
              return mainEditorInFocus;
        }).then(function(){
            let Ctrlhold = page.keyboard.down("Control");
            return Ctrlhold;
        }).then(function(){
            let PressA= page.keyboard.press("A" , {delay : 100});
            return PressA; 
        }).then(function(){
            let PressV= page.keyboard.press("V" , {delay : 100});
            return PressV; 
        }).then(function(){
            let CtrlUnhold = page.keyboard.up("Control");
            return CtrlUnhold;
        })
        .then(function(){
            let RunTheCode = page.click(".msR.hr-monaco-compile.hr-monaco__run-code.ui-btn-styled", {delay : 500});
            return RunTheCode;
        })
    })

}