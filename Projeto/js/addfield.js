


(function (){
    var btn = document.querySelector("#add-time");
    var acesso = true;
    btn.addEventListener("click",addfield);

    function addfield(){
        if(acesso){
            const $fieldContainer = document.querySelector("#schedule-items");
            var $NewFieldItem = document.querySelector(".schedule-item").cloneNode(true);
         /*    var fieldItem = document.createElement("div");
            fieldItem.className = "schedule-item";
            fieldItem.innerHTML = $fieldItem.innerHTML; */
            var input = $NewFieldItem.querySelectorAll("input");

            for(var x = 0; input[x]; x++){
                input[x].value = ""
            }
            $fieldContainer.appendChild($NewFieldItem);
            acesso = false;
        }

    }

}) ();