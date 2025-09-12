import close from '../assets/close.png'

function Modal({ isOpen, onClose, children}){
    if(!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* background overlay */}
            <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal box */}
            <div className="rounded-lg shadow-xl w-fit max-w-md relative z-10 sm:rounded-2xl sm:max-w-lg">
                {/* close button */}
                <button
                    onClick={onClose}
                    className=" shadow-lg bg-red-100 absolute top-3 right-4 px-1 py-1 rounded-md hover:bg-red-200"
                    >
                        <img src={close} alt="" className='w-5 h-5 opacity-90'/>
                    </button>

                    <div>{children}</div>
            </div>
        </div>
    )
}
export default Modal;