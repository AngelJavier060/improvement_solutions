
import { Carousel } from 'flowbite-react';
import metaDataHome from '../../../data/metaDataHome';
import CarouselUserItem from '../../utils/CarouseUserItem';

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'

const CarouselUsers = () => {

    return (
        <div className=" bg-slate-200 px-6 py-16">
            <Carousel indicators={false} leftControl={<ArrowLeftCircleIcon className='w-12 h-12 rounded-full text-slate-400' />} rightControl={<ArrowRightCircleIcon className='w-12 h-12 rounded-full text-slate-400' />}>
                {metaDataHome.users.map((user, index) =>
                    <CarouselUserItem key={index} user={user} />
                )}
            </Carousel>
        </div>
    );
}

export default CarouselUsers