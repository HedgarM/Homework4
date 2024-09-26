const values = [3, 11, 7, 2, 9, 10];

var Sum=values[0] 

var Max=values[0] 

var Min=values[0] 

for(let i=1;i<values.length;i++) 

{

    Sum=Sum+values[i];

    if(Max<values[i])

    {

        Max=values[i]

    }

    if(Min>values[i])

    {

        Min=values[i]

    }

}

console.log("Sum of elements of given array is:",Sum)

console.log("Maximum of elements of given array is:",Max)

console.log("Minimum of elements of given array is:",Min)

