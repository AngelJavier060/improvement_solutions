const ButtonHome = ({ text, onClick }) => {
    return <button className="bg-blue-500 rounded-full px-8 py-3 text-white" onClick={onClick} >
        {text}
    </button>
};

export default ButtonHome;