import { Accordion } from 'flowbite-react';

const QuestionItem = ({ item }) => {
    return (
        <Accordion>
            <Accordion.Panel className='rounded-3xl'>
                <Accordion.Title>{item.title}</Accordion.Title>
                <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        {item.description}
                    </p>
                </Accordion.Content>
            </Accordion.Panel>
        </Accordion>
    );
}

export default QuestionItem;