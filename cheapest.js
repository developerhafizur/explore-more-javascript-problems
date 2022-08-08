const phones = [
    {name: 'Samsung',  camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'walton', camera: 10, storage: '32gb', price: 12200, color: 'silver'},
    {name: 'iphone', camera: 55, storage:'32gb', price: 82000, color: 'silver'},
    {name: 'Xaomi', camera: 17, storage: '32gb', price: 26999, color: 'silver'},
    {name: 'HTC', camera: 12, storage:'32gb', price: 18888, color: 'silver'},
    {name: 'Nokia', camera: 11, storage: '32gb',  price: 39999, color: 'silver'},
    {name: 'oppo', camera: 40, storage: '32gb', price: 20099, color: 'silver'}


]
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);








