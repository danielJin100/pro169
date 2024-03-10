AFRAME.registerComponent("marker_handler", {
    init: async function(){
        this.el.addEventListener("markerFound", ()=>{
            this.handleMarkerFound()
        })
        this.el.addEventListener("markerLost", ()=>{
            this.handleMarkerLost()
        })
    },
    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"
        var summaryButton = document.getElementById("summary-button")
        var orderButton = document.getElementById("order-button")
        summaryButton.addEventListener("click", function(){
            swal({
                //icon: 'warning',
                title: "Summary",
                text: "hmm yes crane \n messy approves 10/10"
            })
        })
        orderButton.addEventListener("click", function(){
            swal({
                icon: 'https://i.imgur.com/4NZ6uLY.jpg',
                title: "Order toy",
                text: "WIP"
            })
        })
    },
    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    }
})