#A very simple js file to provide a textual description of the difference between 2 dates.

I'm not primarily a js coder, so I wanted something very simple that has no dependencies, and does the job reliably.
I was amazed that I couldn't find anything that did the job I wanted, so I quickly wrote the code for myself. 
The code is based on an answer I saw on stackoverflow.com to a question: https://stackoverflow.com/questions/7763327/how-to-calculate-date-difference-in-javascript by user : https://stackoverflow.com/users/198062/murat-Çorlu

##What it does

- take 2 js Date objects
- return an object containing years, months, weeks, days, hours, minutes, seconds
- the object also has convenience methods: toString() and toArray() 
- you can limit the detail, so you get only months, weeks, days or whatever. 

##to use: 

Get a string representation:
```
var diffObject = makeDifferenceObject( new Date(1528912988000), new Date(1528123372000) );
// describe the difference fully
console.log( diffObject.toString() );
// describe the difference, only using the major 4 interval types
console.log( diffObject.toString( {'maxDetail': 4} ) );
// describe the difference using only the broadest interval type
console.log( diffObject.toString( {'maxDetail': 1} ) );
```


Manually generate your own string representation:
```
var diffObject = makeDifferenceObject( new Date(1528912988000), new Date(1528123372000) );
// describe the difference fully
console.log( diffObject.toArray().join(' and ' );
// describe the difference, only using the major 4 interval types
console.log( diffObject.toString( {'maxDetail': 4} ) );
// describe the difference using only the broadest interval type
console.log( diffObject.toString( {'maxDetail': 1} ) );
```

#Executable example  

Download example.html & descriptiveDateDiff.js and open example.html in a web browser.


##License 

(C) 2018 Mark Birch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

