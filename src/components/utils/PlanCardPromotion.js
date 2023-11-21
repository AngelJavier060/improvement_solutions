import ButtonPlan from "./ButtonPlan";

const PlanCardPromotion = ({ plan }) => {

    return (
        <div className="flex flex-col p-8 gap-y-6 text-center bg-orange-400 text-white rounded-xl ">
            <p className="font-bold  text-4xl">{plan.title}</p>
            <div className="flex flex-col gap-4 h-full text-center">
                {
                    plan.items.map((text, index) =>
                        <p className="text-xl " key={index}>{text}</p>
                    )
                }
            </div>
            <div>
                <ButtonPlan text={plan.text_button} onClick={null} is_promotion={true} />
            </div>

        </div>);
};

export default PlanCardPromotion;