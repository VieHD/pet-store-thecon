interface IPet {
  category?: {
    id: number;
    name: string;
  };
  id: number;
  name: string;
  photoUrls?: string[];
  status: string;
  tags?: [
    {
      id: number;
      name: string;
    }
  ];
}

export class Pet implements IPet {
  id = 0;
  name = '';
  status = '';
}
