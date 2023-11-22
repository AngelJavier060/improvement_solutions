// import personal from '../../../images/prog_img_1.svg'
import metaDataHome from "../../../data/metaDataHome"
import TextTitleMain from "../../utils/TextTitleMain"
import ButtonHome from "../../utils/ButtonHome"

const Services = () => {

    return <div className="flex flex-col gap-y-6 bg-slate-200 p-16">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-6">
                <TextTitleMain text={metaDataHome.service.title} />
                <p className="text-center md:text-left">{metaDataHome.service.description}</p>
            </div>
            <img src={metaDataHome.service.image} className="h-40 sm:h-60" />
        </div>
        <div className="flex justify-center md:justify-start">
            <ButtonHome text={metaDataHome.service.text_button} onClick={null} />
        </div>

    </div>
}

export default Services