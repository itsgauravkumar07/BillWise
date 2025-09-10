
function Modal({ isOpen, onClose, children}){
    if(!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* background overlay */}
            <div 
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={onClose}
            ></div>

            {/* Modal box */}
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6 relative z-10 sm:rounded-2xl sm:max-w-lg">
                {/* close button */}
                <button
                    onClick={onclose}

                    >X</button>

                    {children}
            </div>
        </div>
    )
}
export default Modal;