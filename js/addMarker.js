AFRAME.registerComponent("add-markers", {
    init: async function(){
        var mainScene = document.querySelector("#main-scene")
        var toys = await this.getToys()
        toys.map(toy=>{
            var marker = document.createElement("a-marker")
            marker.setAttribute("id", toy.id)
            marker.setAttribute("type", "pattern")
            marker.setAttribute("url", toy.marker_pattern_url)
            marker.setAttribute("cursor", {rayOrigin:"mouse"})
            marker.setAttribute("markerHandler", {})
            mainScene.appendChild(marker)
            
            var model = document.createElement("a-entity")
            model.setAttribute("id", `model-${toy.id}`)
            model.setAttribute("position", toy.model_geometry.position)
            model.setAttribute("rotation", toy.model_geometry.rotation)
            model.setAttribute("scale", toy.model_geometry.scale)
            model.setAttribute("gltf-model",`url(${toy.model_url})`)
          
            model.setAttribute("gesture-hanler", {})
            marker.appendChild(model)

            var mainPlane = document.createElement("a-plane")
            mainPlane.setAttribute("id", `main-plane-${toy.id}`)
            mainPlane.setAttribute("position", { x: 0, y: 0, z: 0 })
            mainPlane.setAttribute("rotation", { x: -90, y: 0, z: 0 })
            mainPlane.setAttribute("width", 1.7)
            mainPlane.setAttribute("height", 1.5)

            marker.appendChild(mainPlane)

            var titlePlane = document.createElement("a-plane")
            titlePlane.setAttribute("id", `title-plane-${toy.id}`)
            titlePlane.setAttribute("position", { x: 0, y: 0.89, z: 0.02 })
            titlePlane.setAttribute("rotation", { x: 0, y: 0, z: 0 })
            titlePlane.setAttribute("width", 1.69)
            titlePlane.setAttribute("height", 0.3)
            titlePlane.setAttribute("material", {color: "#F0C30F"})

            mainPlane.appendChild(titlePlane)

            var toyTitle = document.querySelector("a-entity")
            toyTitle.setAttribute("id", `toy-title-${toy.id}`)
            toyTitle.setAttribute("position", { x: 0, y: 0, z: 0.1 })
            toyTitle.setAttribute("rotation", { x: 0, y: 0, z: 0 })
            toyTitle.setAttribute("text", { font: "monoid",
            color: "black",
            width: 1.8,
            height: 1,
            align: "center",
            value: toy.toy_name.toUpperCase()})

            titlePlane.appendChild(toyTitle)

               // Ingredients List
      var ingredients = document.createElement("a-entity");
      ingredients.setAttribute("id", `ingredients-${toy.id}`);
      ingredients.setAttribute("position", { x: 0.3, y: 0, z: 0.1 });
      ingredients.setAttribute("rotation", { x: 0, y: 0, z: 0 });
      ingredients.setAttribute("text", {
        font: "monoid",
        color: "black",
        width: 2,
        align: "left",
        value: `${toy.ingredients.join("\n\n")}`
      });
      mainPlane.appendChild(ingredients);
  







            
        })
    },
    getToys: async function(){
        return await firebase.firestore().collection("toys").get().then(snap=>{
            return snap.docs.map(doc=>doc.data())
        })
    }
})