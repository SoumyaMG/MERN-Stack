class Article {
    constructor(data) {
        this.title = data.title
        this.body = data.body
        this.category = data.category
        this.slug = this.generateSulg()
        Article.count++
    }

    details() {
        return `title-${this.title}, body-${this.body},category-${this.category},slug-${this.slug}`
    }

    generateSulg() {
        this.slug = ((this.title).split(' ').join('-'))
        return this.slug
    }

    static getCount() {
        return this.count
    }

}

Article.count = 0

const a = new Article({ title: 'js is Awesome', body: 'mern', category: 'programming' })

console.log(a.details())
console.log(Article.getCount())