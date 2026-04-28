import { createPortal } from "react-dom"

function PortalTest() {
    return createPortal(
        <div className="container">
            <h2>I am test poratl in other div named test portal</h2>

        </div> , document.querySelector("#test-root"))
}

export default PortalTest
