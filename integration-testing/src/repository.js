class Repository {
    constructor() {
    this.data = [
        {id:1, name: 'Item 1'},
        {id:2, name: 'Item 2'},
    ];
}

getAllItems() {
    return this.data;
}

getItemById(id) {
    return this.data.find(item => item.id === id);
}

addItem(item){
    this.data.push(item);
    return item;
}

deleteItemByID(id) {
    const index = this.data.findIndex(item => item.id === id);
    if (index !== -1) {
        const [deleteItemByID] = this.data.splice(index, 1);
        return deleteItemByID;
    }
    return null;
}

}

module.exports = Repository;