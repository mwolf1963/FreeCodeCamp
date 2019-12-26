/* Add copyright to footer 			*/
/* Author:		Matt Wolf */
/* Date:		9-26-19 		*/
/* Description:	Adds current copyright year to footer 	*/

"use strict";
var copyrightElement = document.getElementById("copyright");
var currentYear = new Date().getFullYear();
copyrightElement.innerHTML = currentYear;