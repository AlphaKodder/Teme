const myArr = [1,2,3,4,5,6,7,8,9];

function largestElementInList(a)
{
    return Math.max(...a);
}

console.log(largestElementInList(myArr));
console.log(myArr.reverse());
const isPresent = (el)=>{

    return myArr.indexOf(el) == -1 ? "element not present" : " element is present";
}
console.log(isPresent(1));
console.log(isPresent(20));
const oddPosInList = myArr.filter((val,index)=>{
    if(index%2==1)
        return val;
});
console.log(oddPosInList);
const sum = 0;
const sumOfArray = myArr.reduce((previousVal, currentVal)=>previousVal+currentVal , sum);
console.log(sumOfArray);

function checkPalindrome(str)
{
    const string_arr = str.split("");
    const reversed_arr = string_arr.reverse();
    const reversedString = reversed_arr.join("");

    if(str == reversedString)
    {
        return "It is a palindrome";
    } else {
        return "It is not a palindrome";
    }
}

console.log(checkPalindrome("ana"));
console.log(checkPalindrome("john"));

function printNumbers()
{   
    debugger;
    for(let i = 0 ; i<=100000; i++)
    {
         if(i<2 || i>2 && i%2==0)
            continue
            for(var d=3; d*d<=i;d++)
            {
                if(i%d==0)
                    continue;
            }
         console.log(i);   
    }
}

function combineLists(a,b)
{
    let i=0,j=0;
    const newArr = [];
    while(i<a.length && j<b.length)
    {
        newArr.push(a[i++]);
        newArr.push(b[j++]);
    }

    while(i<a.length)
    {
        newArr.push(a[i++]);
    }

    while(j<b.length)
    {
        newArr.push(b[j++]);
    }

    console.log(newArr);
}

combineLists([1,2,3],['a','b','c']);

function mergeSortedLists(a,b)
{
    let newArr = a;
    newArr = newArr.concat(b);
    console.log(newArr);
    newArr.sort((a,b)=> a-b);
    console.log(newArr);
}

mergeSortedLists([1,4,6],[2,3,5]);

function digitArray (nr)
{
    let x = [];
    let c;
    while(nr!=0)
    {
        c = nr%10;
        nr = Math.floor(nr/10);
        x.push(c);
    }
    return x.reverse();
}

console.log(digitArray(123));
console.log(printNumbers())