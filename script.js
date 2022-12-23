let local = localStorage
const getItem = () =>{
    let inp = document.querySelector('.form-labell')
    let phnum = document.querySelector('.form-label');


    let data ={
        name: inp.value,
        phone : phnum.value
    }
 
    local.setItem("user-name", JSON.stringify(data))
    let get_item = local.getItem("user-name")
    get_item = JSON.parse(get_item)
    console.log(get_item); 
}


let heading = document.querySelector('h1')
heading.innerHTML = JSON.parse(local["user-name"].name)


let head = document.querySelector('h2')
head.innerHTML = JSON.parse(local["user-name"].phone)


const removeData = ()=>{
    local.removeItem("user-name")
   // local.clear("user-name")
} 

