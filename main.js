
function addModelViewer(element) {

    let modelViewer = document.createElement("model-viewer")

    element.appendChild(modelViewer)

    return modelViewer
}

function setModel(modelViewerElement, model) {

    modelViewerElement.setAttribute("src", model)

    modelViewerElement.setAttribute("autoplay", "true")

    modelViewerElement.setAttribute("ar", true)
    modelViewerElement.setAttribute("ar-modes", "webxr quick-look scene-viewer")
    /*modelViewerElement.setAttribute("ar-scale", "fixed")*/

    modelViewerElement.setAttribute("shadow-intensity", 2)

    modelViewerElement.setAttribute("auto-rotate", true)
    modelViewerElement.setAttribute("camera-controls", true)

}

let viewer = addModelViewer(document.body)
setModel(viewer, "https://storage.googleapis.com/ahojtabi/models/LPP_scene_Color.glb")