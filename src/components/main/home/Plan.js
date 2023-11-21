// import personal from '../../../images/prog_img_1.svg'
import metaDataHome from "../../../data/metaDataHome"
import TextTitleMain from "../../utils/TextTitleMain"
import PlanCard from "../../utils/PlanCard"
import PlanCardPromotion from "../../utils/PlanCardPromotion"

const Plan = () => {

    return <div className="flex flex-col gap-y-6 text-center">
        <TextTitleMain text={metaDataHome.plan.title} />
        <div className="w-full gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-16">
            {
                metaDataHome.plan.plans.map((plan, index) =>
                    <>
                        {plan.is_promotion ? <PlanCardPromotion key={index} plan={plan} /> :
                            <PlanCard key={index} plan={plan} />}
                    </>

                )
            }
        </div>
    </div>
}

export default Plan