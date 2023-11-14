# JS-P5-dev-ideas
Introduction to Programming I
This module focuses on basic programming techniques. You’ll learn how to use the fundamental elements of computer programming such as variables, conditionals, functions and loops. You’ll learn how to create interactive, graphical computer programs. You will also be introduced to basic object-oriented programming techniques.

Topics covered
Your development environment
Drawing in 2D
Variables, Objects and Interaction
Conditional Statements
Basic loops and arrays
Traversing with for loops
Functions
Advanced loops and arrays
Extending Objects
Constructor functions
Assessment
Coursework only (Type II)

Module specification
Module specification (September 2020)
Recognition of Prior Learning
At the time of this writing, you can apply for automatic RPL for this module if you obtain the IBM Applied AI Professional Certificate. Note: If you don’t have prior programming experience, the course offered by UoL is probably easier and the recommended way to go.
Syllabus
Syllabus PDF (September 2020)
Resources
Essential reading
“There is no required textbook for this module. The module draws on number of different, largely web-based, public resources as well as the resources produced as bespoke material for this module. The programming language is Javascript, with the p5js library used for graphical and interactive programming functionality. The main external resource is the set of online tutorials available from: https://p5js.org/learn/.”

“Specific readings for each topic are listed with direct links to free online resources that provide additional material on the topics of this course.”

JavaScript
p5.js - JavaScript library
p5.js - Official website to find the reference guide and an online editor to practice. Next step: p5.js libraries.
Examples are also available to get started.
The Coding Train (playlists) - Channel from Daniel Shiffman, a board member of p5.js.
W3 Schools
JavaScript Array Iteration Methods - Will help in making your code more concise and readable.
Kinks to be aware of
List of reported errors and bugs with the module.
:heart: Notes
Visit this page of world-class/notes.
On REPL (see relevant sections)
Podcasts
Websites
YouTube
Sleuth assignments
Tips & Tricks
Each case in Sleuth has four stages. You have a maximum of FIVE attempts for each ‘stage’. Attempt a ‘stage’ when you are confident. If you make a mistake, you will get a pop-up explaining what requirement you hadn’t met. But if you exhaust your five attempts, fret not because, after some downtime (about 24 hours), you will be able to solve a variation of the same stage again. This will not affect your grade, and only the highest grade is counted.
Get familiar with finding precise coordinates in an image. If you are using VS Code, you can use the Luna Paint extension to view image coordinates or use an image editor like GIMP.
Practice all basic drawing functions with p5.js in the online editor before attempting to solve crimes.
Utils and aids (student created)
JavaScript library with visual aids for solving case 202 stage 4 utils4sleuth.js.
Python program to create directories for Sleuth cases Make-Sleuth-Folders.py
The Game Project
Visit this link to see some of the games created by previous students.
Text editor
The recommended text editor for this module is no longer Brackets. More options available on the free software page.
Note: support for Brackets is ending on September 1, 2021. VS Code is a good alternative.
Configuring VS Code (optional)
This section is optional but recommended for your sanity in the long run as p5.js will be used in a few modules across this degree. You can certainly use VS Code as is without the need to install further extensions, but the following may make your life easier.

Extensions
VS Code supports JavaScript and its ecosystem by default, but you may want to enable more functionality by installing the following extensions:

Live Server - starts a development server straight from Code, allowing you to preview your work in the browser as if it was hosted on a remote server. For installation instructions, see this video
Code Spell Checker
Path Intellisense - auto-completes filesystem paths, for example when loading assets with p5.js
Once you’ve gained some experience and confidence, you may want to try these as well:

Code Runner - allows you to run snippets of JS and other languages straight from Code, provided that a suitable runtime is installed (eg. Node.js). This is useful for experimentation and for small projects
ESLint - checks for “code lint” in JS. Requires ESLint to be installed, and may require some configuration to conform with the style used in the course (for more information on using ESLint, see the ESLint user guide; for a sample configuration that’s compatible with ITP1, see here)
Project Manager - useful when you start working on several projects at a time
p5.js autocompletion
To enable autocompletion for p5.js in a beginner-friendly way, you can install the extension p5.vscode. If you feel more adventurous and are looking for a challenge and some extra flexibility in your setup, please keep reading!

First install Node.js. Node is a JS runtime - a program that runs JS code. It’s not entirely unlike your browser’s JS engine - in fact, it is based on Chrome’s V8 engine - but it’s intended for servers and commandline programs rather than web pages. Its package manager, npm, is useful for setting up JS projects of any scale, so it’s a good tool to have if you’re going to work with JS. When you install Node, make sure to choose the option “add to PATH”, so you have Node and npm available throughout your system. Once Node and npm are installed, open Code and a commandline interface (cmd.exe or powershell.exe in Windows, Terminal in macOS), navigate to your project folder (eg. Documents/Goldsmiths/ITP1/Game_project) and follow these steps:

Type the following command into your commandline: npm i --save-dev @types/p5 . This will tell npm to download type definitions for p5.js. You will notice that npm has created a node_modules folder and a couple of files, which it uses to track and manage downloaded packages; you needn’t worry about those at the moment (for more information on npm, see the npm Docs).
In Code, create a new file with the following text, and save it to the project folder as jsconfig.json:
{
  "compilerOptions": {},
  "exclude": ["node_modules"],
}
This will let Code know that you’re working on a JS project and that it should expect some other configuration files like globals.d.ts to be present (for more configuration options, see the jsconfig.json reference).

Create another file with this text, and save it to the project folder as globals.d.ts:
import {  } from "./node_modules/@types/p5/global";
This will import the type definitions you just downloaded into the global scope, allowing Code to autocomplete all of p5’s identifiers from anywhere in your code (for more information on global.d.ts, see the TypeScript documentation; for more information on p5.js’s modes, see p5.js’s Github wiki).
