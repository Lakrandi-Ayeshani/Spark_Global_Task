import { faker } from '@faker-js/faker';

export const getData = () => {
    const tasks = [];

    for(let i=0; i<10; i++){
        const _id = i;
        const title = faker.lorem.sentence();
        const task = {
            _id,
            title
        };
        tasks.push(task);
    }
    return tasks;
};
