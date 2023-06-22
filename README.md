# codeceptjs
Demo repo of codecepJS @ codecept.io 
## Build Project
Clone repo: `git clone https://github.com/QualityLogic/codeceptjs.git`

Go to project directory: `cd codeceptjs`

Install packages: `npm install`
## Run Example Test
`npx codeceptjs run search_test.js`

## Introduction
A brief introduction to CodeceptJS and motivation for trying it. Material taken from their Getting Started page: https://codecept.io/basics/

> CodeceptJS is a modern end to end testing framework with a special BDD-style syntax. The tests are written as a linear scenario of the user's action on a site.

Codecept provides a library with short and concise builtin methods with the goal of allowing tests to be writen faster and easier. This could be beneficial to QA engineers at any skill level. Here's a breif explanation of the syntax provided:

> Each test is described inside a `Scenario` function with the `I` object passed into it. The `I` object is an actor, an abstraction for a testing user. The `I` is a proxy object for currently enabled `Helpers`.

The `Helpers` mentioned above refer to the frameworks that CodeceptJS supports. CodeceptJS provides a range of `Helpers` for various frameworks, providing flexibility to support a wide range of projects. This is beneficial because it would provide a common tool to use across projects. Why learn a variety of languages and frameworks when one will suffice? Here is a list of provided `Helpers`:
- Playwright
- WebDriver
- Puppeteer
- Nightmare
- TestCafe

## Findings
CodeceptJS is an interesting tool that has a simple syntax and works accross various frameworks, however, it comes up short in a couple of important ways.

### Lack of support and interest

CodeceptJS lacks support and interest. The following Google trends charts illustrates this nicely. CodeceptJS is most popular in Russia, but still lags behind Playwright significantly.
> ![Screenshot 2023-06-22 at 10 20 59 AM](https://github.com/QualityLogic/codeceptjs/assets/83599308/74fb0b15-501d-4c49-bc14-6e4ae1afe346)


> ![Screenshot 2023-06-22 at 10 23 41 AM](https://github.com/QualityLogic/codeceptjs/assets/83599308/fe8c97ed-8802-4e9e-b38a-55bf4b5e0183)

At the time of this writting Playwright has [2154 active questions on stackoverflow](https://stackoverflow.com/questions/tagged/playwright), while CodeceptJS has [252 active questions](https://stackoverflow.com/questions/tagged/codeceptjs)

### Questionable functionality 
In our simple test `search_test.js` we encountered an error which suggests that the functionality of CodeceptJS may not be up to par and reduces our confidence in the framework. When trying to click an option from a dropdown menu, `I.click` was unable to find the text 'Option 2' and instead greats us with the following error.

 
> ![Screenshot 2023-06-21 at 9 32 22 AM](https://github.com/QualityLogic/codeceptjs/assets/83599308/fd61de3d-4649-43dc-848e-7541e7d46051)

It appears the method thinks it needs to parse the number '2' out of the string, which it should not do. According to CodeceptJS documentation (https://codecept.io/basics/#clicking), the code `I.click('Option 2', 'option')` should be able to click on the option. As such, resorting to an xpath works fine, but this isn't best practice and should be avoided.

When the framework does not behave in a way we expect and must resort to workarounds, ease of use and speed degrades.
