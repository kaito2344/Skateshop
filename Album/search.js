const search = () =>{
    const searchbox = document.getElementById("search-item").ariaValueMax.toUpperCase();
    const storeitems = document.getElementById("product-list")
    const product = document.querySelectorAll(".product")
    const pname = document.getElementsByTagName("h9")

    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('card-text')[0];
        
        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].getElementsByClassName.display = "";
            }else{
                product[i].getElementsByClassName.display = "none";
            }
        }
    }
}