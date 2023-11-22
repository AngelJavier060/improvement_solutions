import ProgramCard from "../../utils/ProgramCard"
// import personal from '../../../images/prog_img_1.svg'
import metaDataHome from "../../../data/metaDataHome"
import TextTitleMain from "../../utils/TextTitleMain"

const Program = () => {

    return <div className="flex flex-col gap-y-6 text-center">
        <TextTitleMain text={metaDataHome.program.title} />
        <p>{metaDataHome.program.description}</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {
                metaDataHome.program.programs.map((progra, index) =>
                    <ProgramCard key={index} progra={progra} />
                )
            }
        </div>
    </div>
}

export default Program