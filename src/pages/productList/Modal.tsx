
const Modal = ({ edit, editModal, item }: { edit: Boolean, editModal: Function }) => {

    const fn = () => {
        editModal(!edit);
    }

    console.log(item)

    return (
        <div className={edit && 'bg-black/[0.5] h-screen w-screen z-30 absolute'}>
            <div>
                <div className="translate-x-[5%] md:translate-x-1/2 translate-y-1/2 w-[90%] md:w-[50%] h-[300px] bg-white rounded-lg transition duration-300">
                    <h1>This is Modal component!</h1>
                    <button onClick={fn} >click</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;