document.addEventListener("DOMContentLoaded", 
    function(e){
        let input = document.querySelector("input")
        input.addEventListener("click", 
            function(e){
                // e.target.setAttribute("type", "text")
                if (e.target.getAttribute("type") === "button"){
                    e.target.setAttribute("type", "search")
                    e.target.setAttribute("value", "")
                }
            }
        )

        input.addEventListener("change", 
            function(e){
                e.target.setAttribute("type", "button")
                e.target.setAttribute("value", "search")
            }
        )
    }
)