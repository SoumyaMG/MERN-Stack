/*
 Write a JavaScript function to filter false, null, 0 and blank values from an array. 

Test Data :
filterValues([58, '', 'abcd', true, null, false, 0]);
[58, "abcd", true]
*/

function filterValues(a){

    const falsy = [], truthy = []
    if (a.length == undefined)
    {
        return truthy
    }
    for (var i = 0; i < a.length; i++)
    {
        if (a[i])
        {
            truthy.push(a[i])
        }
    }
    if (falsy.length == a.length)
    {
        return falsy
    }
    else {
        return truthy
    }
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]))