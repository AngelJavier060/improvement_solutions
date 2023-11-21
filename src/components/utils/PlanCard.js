import ButtonPlan from "./ButtonPlan";

const PlanCard = ({ plan }) => {

    return (
        <div className="flex flex-col sm:my-4 p-8 gap-y-6 text-center bg-slate-200 rounded-xl">
            <p className="font-bold  text-4xl text-slate-800">{plan.title}</p>
            <div className="flex flex-col gap-4 h-full text-center">
                {
                    plan.items.map((text, index) =>
                        <p className="text-xl text-slate-500" key={index}>{text}</p>
                    )
                }
            </div>
            <div>
                <ButtonPlan text={plan.text_button} onClick={null} is_promotion={false} />
            </div>

        </div>);
};

export default PlanCard;