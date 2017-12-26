/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/html-lint@2.4.1/html-lint.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
#! /usr/bin/env node
"use strict";var $,currentErrors,fs=require("fs"),spawn=require("child_process").spawn,chalk=require("chalk"),cheerio=require("cheerio"),errors=0,passing=0,ERROR_LINTING_FAILURE=1,ERROR_HTML_FILE_NOT_FOUND=127,isStrict=!1,isVerbose=!1,strictFlag="--strict",verboseFlag="--verbose",output="",tests=require("./lib/tests").tests,url=process.argv[2],saveTo=process.argv[3]&&process.argv[3]!==verboseFlag?process.argv[3]:"saved",savedPath="temp/"+saveTo,saveHtml=spawn("phantomjs",[__dirname+"/src/cli/save-html.js",url,saveTo]),init=function(){if($=cheerio.load(fs.readFileSync(savedPath+".html")),detectFlags(),1!==$("html").length)return console.log(chalk.yellow("Error: Something went wrong. Check the URL.")),void(isStrict&&process.exit(ERROR_HTML_FILE_NOT_FOUND));runTests(),summarize()},addSelectorToOutput=function(e,r){var s="",o=chalk.cyan(" ├─ "),t=e+1;t===currentErrors&&(s="\n",o=chalk.cyan(" └─ ")),output+=chalk.dim(o+chalk.cyan(t)+" "+$(r)+"\n"+s)},runTests=function(){console.log(chalk.cyan("Running tests...\n"));for(var e in tests)(currentErrors=$(e).length)>0?(errors+=currentErrors,output+=" "+chalk.bold.red(currentErrors)+" "+tests[e].label+"\n",isVerbose&&$(e).each(addSelectorToOutput)):passing++},detectFlags=function(){process.argv.forEach(function(e,r,s){isStrict||(isStrict=e===strictFlag),isVerbose||(isVerbose=e===verboseFlag)})},summarize=function(){console.log(output),console.log(chalk.dim(" "+passing+" tests passing \n")),console.log(chalk[0===errors?"bgGreen":"bgRed"](" HTML-Lint found"+chalk.bold(" "+errors+" errors")+" on "+url+" ")),console.log("\n"),isStrict&&errors>0&&process.exit(ERROR_LINTING_FAILURE)};url?(saveHtml.stdout.on("data",function(e){console.log(chalk.yellow(e.toString().replace(/[\n\r]/g,"")))}),saveHtml.stderr.on("data",function(e){console.log(chalk.red("stderr: "+e))}),saveHtml.on("exit",function(e){console.log(chalk.yellow("Saved HTML to: "+chalk.bold(__dirname+"/"+savedPath+".html"))),console.log(chalk.yellow("Saved PNG to:  "+chalk.bold(__dirname+"/"+savedPath+".png"))),init()})):console.log(chalk.yellow("Error: No URL provided"));
//# sourceMappingURL=/sm/ca80b66dab3a344d2255a68fc0bd0bffa53f71663ab4bbf28c455951452b3f7a.map