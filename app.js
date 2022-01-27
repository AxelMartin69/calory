// revealing module pattern
// it will be Item Controller
const ItemController = (function(){
    let data = []

    function add (item){
        data.push(item)
        console.log('Item is added');
    }

    function get (id) {
        return data.find(item => {
            return item.id === id
        })
    }

    return {
        add: add,
        get: get
    }

})();

ItemController.add({id:1, name:'Kate'})
console.log(ItemController.get(1));