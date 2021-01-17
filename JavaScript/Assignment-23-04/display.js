var a = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: false
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: false
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

function readingStatus(a) {
    const output=[]
    var z=0
    if (a.length == 0)
    {
        return output
    }

    for (var i = 0; i < a.length; i++) {
        if (a[i].readingStatus==true) {
            output.push(a[i])
        }
        else{
            z=z+1
        }
    }
    if(a.length==z)
    {
       return output
    }
    return output
}

console.log(readingStatus(a))