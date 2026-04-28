import { createPortal } from "react-dom"
function MyModal({isOpen, onClose, children}) {
    if(!isOpen) return null;
    return createPortal(
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
                <button style={styles.closeBtn} onClick={onClose}>Close</button>
            </div>
        </div> 
    , document.querySelector("#modal-root"))
}

const styles = {
    overlay:{
        position:"fixed",
        inset:"0px",
        background:'rgba(0,0,0,0.5)',
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    modal:{  
        background:"#fff",
        padding:"20px",
        borderRadius:"20px",
        minwidth:"300px"
    },
    closeBtn:{
        margintop:"15px"
    }
};



export default MyModal
