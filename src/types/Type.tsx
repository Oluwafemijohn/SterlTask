
export interface IData {
  locations: ILocation[];
}

export interface ILocation {
  __typename: string;
  id: string;
  name: string;
  description: string;
  photo: string;
}
