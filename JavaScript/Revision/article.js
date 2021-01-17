class Article{
    constructor(props)
    {
        this.title=props.title
        this.body=props.body
        this.category=props.category
        this.slug=''
    }

    details()
    {
        return `title - ${this.title},body - ${this.body},category - ${this.category}`
    }

    generateSlug()
    {
        this.slug=this.title.split(' ').join('-')
        return this.slug
    }

}

const a1=new Article({title:'js is awesome',body:'mern',category:'programming'})
console.log(a1.details())
console.log(a1.generateSlug())