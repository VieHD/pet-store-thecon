interface IPet {
    category?: {};
    id : number;
    name: string;
    photoUrls?: string[];
    status: string;
    tags? : [{}];
}

export class Pet implements IPet {
    id = 0;
    name = '';
    status = '';

}