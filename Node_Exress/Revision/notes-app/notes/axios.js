const axios={
    get:function(url){
        return new Promise(function(resolve,reject){
            const xhr=new XMLHttpRequest()
            xhr.open('GET',url)
            xhr.send()

            xhr.onload=function(){
                resolve(JSON.parse(xhr.responseText))
            }

            xhr.onerror=function(){
                reject(xhr.responseText)
            }
        })
    }
}

axios.get('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})