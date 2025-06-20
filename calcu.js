const displaydata=(data)=>{
     output.value+=data
}
const Allclear=()=>{
    console.log("..........");
    
    output.value=""
    output.placeholder="0"
}
const backspacecl=()=>{
    output.value=output.value.slice(0,-1)
}
const eqalbu=()=>{
    try{
    output.value=eval(output.value)
    }
    catch{
        output.value=""
        output.placeholder="Invalid Expression"
    }
    finally{
        console.log("operation done");
        
    }
}