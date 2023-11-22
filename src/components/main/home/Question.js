import metaDataHome from "../../../data/metaDataHome"
import TextTitleMain from "../../utils/TextTitleMain"
import QuestionItem from "../../utils/QuestionItem"

const Question = () => {

    return (
        <div className="flex flex-col gap-y-6 text-center px- sm:px-6">
            <TextTitleMain text={metaDataHome.questions.title} />
            <p>{metaDataHome.questions.description}</p>
            <div className="w-full grid grid-cols-1 gap-4">
                {
                    metaDataHome.questions.items.map((item, index) =>
                        <QuestionItem key={index} item={item} />
                    )
                }
            </div>
        </div>);
}

export default Question