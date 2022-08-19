    const wrapper =document.querySelector("#wrapper")
    const butRecycle = document.querySelector(".fa-basket-shopping")
    const pop = document.querySelector(".pop")
    const iclose = document.querySelector("#popXbut");
    // const iclose = document.querySelector("#close");

    document.addEventListener("click",(e)=>{
        // console.log(e.target)
        if(e.target===iclose){
            toggle();
            return;
         }
        if(e.target===butRecycle) {
            toggle(e);
            return;
         }
        if(e.target.closest(".pop")!==pop && wrapper.classList.contains("active") && !e.target.classList.contains("fa-plus") && !e.target.classList.contains("fa-minus") ){
            toggle();
        };
    })
    function toggle(){
        wrapper.classList.toggle("active");
        pop.classList.toggle("active");
    }