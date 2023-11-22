import siteMetadata from "../../../data/siteMetaData";
import ButtonHome from "../../utils/ButtonHome";
import imagen from '../../../images/improvement_solutions_1.png'

const Home = () => {
    return (
        <div style={{ background: `linear-gradient(180deg, #0000008c 0%,#0000008c 100% ),url(${imagen})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
            <div className="flex justify-center">
                <div className={`flex flex-col items-center text-center text-white gap-y-6 pt-28 pb-64 w-full px-4 md:w-2/3 xl:w-1/2 `}>
                    <h1 className="text-3xl font-bold">{siteMetadata.title}</h1>
                    <p className="mb-8">{siteMetadata.description}</p>
                    <ButtonHome text={'Solicita información'} onClick={null} />
                </div>
            </div>
        </div>
    );
};

export default Home;