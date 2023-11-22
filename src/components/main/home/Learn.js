// import personal from '../../../images/prog_img_1.svg'
import metaDataHome from "../../../data/metaDataHome"
import TextTitleMain from "../../utils/TextTitleMain"
import ButtonHome from "../../utils/ButtonHome"

const Learn = () => {

    return <div className="flex flex-col gap-y-6 text-center">
        <TextTitleMain text={metaDataHome.learn.title} />
        <p>{metaDataHome.learn.description}</p>
        <div>
            <ButtonHome text={metaDataHome.learn.text_button} onClick={null} />
        </div>
    </div>
}

export default Learn