const ProgramCard = ({ progra }) => {

    return <div className="flex flex-col p-4 text-center">
        <img src={progra.image} className="h-60" />
        <p className="font-bold  text-xl">{progra.title}</p>
        <p>{progra.description}</p>
    </div>
};

export default ProgramCard;