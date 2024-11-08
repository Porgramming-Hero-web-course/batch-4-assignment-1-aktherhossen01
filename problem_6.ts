
interface Profile{
    name:string;
    age:number;
    email:string
}

function updateProfile(x:Profile,updateValue:any){
    return {
        ... x,
        ... updateValue
        
    }
}
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: '78' }));