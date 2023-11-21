import TextTitleMain from "./TextTitleMain";

const CarouselUserItem = ({ user }) => {
    return (
        <div className="flex flex-col md:flex-row items-center py-16 px-20 gap-6">
            <div className="flex flex-col justify-center gap-6">
                <TextTitleMain text={user.title} />
                <p>{user.description}</p>

            </div>
            <img src={user.image} className="h-60 w-60 rounded-full" />


        </div>)
};

export default CarouselUserItem;