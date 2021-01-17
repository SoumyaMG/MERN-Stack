const menu = [
    { id: 1, name: 'Puliyogare', isVeg: true },
    { id: 1, name: 'Chilly Chicken', isVeg: false },
    { id: 1, name: 'Tomato Soup', isVeg: true },
    { id: 1, name: 'Bisibele Bath', isVeg: true },
    { id: 1, name: 'Mutton Biryani', isVeg: false }
]

//filter all veg
function findVeg(menu, option) {
    return menu.filter(function (item) {
        return item.isVeg == true
    })
}
console.log(findVeg(menu, true))

//Search the items with user seachItems
function autoSearch(menu, searchItem) {
    return menu.filter(function (item) {
        return item.name.toLowerCase().includes(searchItem.toLowerCase())
    })
}
console.log(autoSearch(menu, 'o'))