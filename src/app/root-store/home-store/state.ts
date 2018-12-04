import { FaceImage } from './../../shared/model/face-image.model';
import { FILENAMES } from './../../shared/data/image-names';
export interface State {
  userName: string;
  randomImg: string;
  filenames: FaceImage[];
  timerLength: number;
  numSelectImg: number;
}

export const initialState = {
  userName: '',
  randomImg: '',
  filenames: FILENAMES,
  timerLength: 2000,
  numSelectImg: 9
};
