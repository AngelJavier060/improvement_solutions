const ButtonPlan = ({ text, onClick, is_promotion }) => {
    return <>
        {is_promotion ?
            <button className="px-8 py-3 rounded-xl  text-white border-white border" onClick={onClick} >
                {text}
            </button> :
            (<button className="px-8 py-3 rounded-xl  text-blue-500 border-slate-400 border" onClick={onClick} >
                {text}
            </button>)}

    </>

};

export default ButtonPlan;