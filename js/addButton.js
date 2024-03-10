AFRAME.registerComponent("create-buttons", {
    init: function(){
        var button1 = document.createElement("button")
        button1.innerHTML = "Order Summary"
        button1.setAttribute("id", "summary-button")
        button1.setAttribute("class", "btn btn-warning mr-3")
        var button2 = document.createElement("button")
        button2.innerHTML = "Order Now"
        button2.setAttribute("id", "order-button")
        button2.setAttribute("class", "btn btn-warning mr-4")
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.appendChild(button1)
        buttonDiv.appendChild(button2)
    }
})
