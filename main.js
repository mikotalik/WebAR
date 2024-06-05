
function addModelViewer(element) {

    let modelViewer = document.createElement("model-viewer")

    element.appendChild(modelViewer)

    let button = document.createElement("button")
    button.setAttribute("id", "button-ar")
    button.setAttribute("class", "button-ar")

    button.textContent = "AR"
    button.style.display = "none"

    document.body.appendChild(button)

    button.onclick = function () { modelViewer.activateAR() }

    modelViewer.addEventListener("model-visibility", (e) => {

        if (e.detail.visible) {
            button.style.display = ""
        } else {
            button.style.display = "none"
        }

    })

    return modelViewer
}

function setModel(modelViewerElement, model) {

    //modelViewerElement.setAttribute("crossorigin", "anonymous")
    modelViewerElement.setAttribute("src", model)

    modelViewerElement.setAttribute("autoplay", "true")

    modelViewerElement.setAttribute("ar", true)
    modelViewerElement.setAttribute("ar-modes", "webxr quick-look scene-viewer")
    /*modelViewerElement.setAttribute("ar-scale", "fixed")*/

    modelViewerElement.setAttribute("shadow-intensity", 2)

    modelViewerElement.setAttribute("auto-rotate", true)
    modelViewerElement.setAttribute("camera-controls", true)

    modelViewerElement.setAttribute("scale", "0.1 0.1 0.1")

}

let viewer = addModelViewer(document.body)
setModel(viewer, "models/models_LPP_scene_Color.glb")