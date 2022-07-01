
## :bookmark_tabs: Table of Contents

<ul id="contents">

- [Purpose](#chart_with_upwards_trend-purpose-top)
- [Project Overview](#mag_right-project-overview-top)
- [Build Process](#triangular_ruler-build-process-top)

</ul>

## :chart_with_upwards_trend: Purpose [:top:](#bookmark_tabs-table-of-contents) 

This was a project needed to complete the [Front End Development Libraries Certification](https://www.freecodecamp.org/learn/front-end-development-libraries/) on [freeCodeCamp](https://www.freecodecamp.org).

It provided some unique challenges, like dealing with regular expressions and complex conditionals. 

## :mag_right: Project Overview [:top:](### :chart_with_upwards_trend: Purpose [:top:](#bookmark_tabs-table-of-contents) 
) 

This project was built using React and styled with [Material UI](https://mui.com/). 

~~~
📦src
 ┣ 📂components
 ┃ ┣ 📜Display.js
 ┃ ┣ 📜Num.js
 ┃ ┣ 📜Operators.js
 ┃ ┗ 📜Wrapper.js
 ┣ 📂utils
 ┃ ┗ 📜useUpdateDisplay.js
 ┣ 📜App.js
 ┗ 📜index.js
~~~

The hardest part of this for me was probably the nuanced situations for adding operators:

![operators](https://github.com/souperstition/calc/blob/master/img/calc.png?raw=true)

And this is just a simplified view of things.

## :triangular_ruler: Build Process [:top:](### :chart_with_upwards_trend: Purpose [:top:](#bookmark_tabs-table-of-contents) 
)

I decided to handle all of my logic inside of a custom hook titled useUpdateDisplay.

One thing I did that helped me out was putting my regular expressions into an object, so they could be easily accessed when I was writing these very complex conditionals:

~~~js
const vars = {
		isNumber: /[0-9]/,
		isOperator: /[-+/*]/,
		endSpace: /\s$/,
		endOperator: /([/*+-]+\s)$/,
		endDecimal: /\.$/,
		hasDecimal: /[[0-9]*\.[0-9]*$/,
		endMinus: /(\s?)+-(\s?)+$/,
		endMultipleOperators: /[^\d]*$/
	};

const { isNumber, isOperator, endMinus, endOperator, endDecimal, hasDecimal, endMultipleOperators } = vars;
~~~

I also destructured them so I wouldn't have to type vars before every variable name.

Believe it or not, the easiest part of the project was performing the actual calculations! That was done using a simple eval statement.

If you haven't done this project yet, you should give it a try! Good luck! :partying_face:

## :chart_with_upwards_trend: Purpose [:top:](#bookmark_tabs-table-of-contents) 
:top: [back to top](#)