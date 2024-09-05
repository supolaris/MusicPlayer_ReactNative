import {ImageSourcePropType} from 'react-native';

export interface IsongsData {
  id: number;
  name: string;
  artists: string;
  image: ImageSourcePropType;
  url: string;
}
