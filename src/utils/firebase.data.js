import { firestore } from '../api/firebase/firebase';

//テストユーザー
const joinRef = firestore.collection(
  'version/1/users/MJpyUalJPCO2zIJ6J6fd3mOzwTo2/joinEvent'
);
const hostRef = firestore.collection(
  'version/1/users/MJpyUalJPCO2zIJ6J6fd3mOzwTo2/hostEvent'
);
const standbyRef = firestore.collection(
  'version/1/users/MJpyUalJPCO2zIJ6J6fd3mOzwTo2/standbyEvent'
);

export const addDummyJoinedEvent = () => {
  joinRef
    .add({
      id: 'oqwofj2238jf0w3u020gj2',
      mainTitle: 'react native event!',
      author: 'ユーザー',
      imageUrl: 'https:picsum.photos/200/300',
      startAt: new Date(),
      endAt: new Date(),
      maxCapacity: 20,
      currentCapacity: 17,
      group: 'React Native グループ',
      evantPlace: 'tokyo',
    })
    .then(() => {
      alert('追加');
    })
    .catch((e) => {
      alert('error');
      console.log(e);
    });
};

export const addDummyHostEvent = () => {
  hostRef
    .add({
      id: 'o02r223050gj212345',
      mainTitle: 'わっしょいイベント!!!!!!!',
      author: '主催者123',
      imageUrl: 'https:picsum.photos/200/300',
      startAt: new Date(),
      endAt: new Date(),
      maxCapacity: 20,
      currentCapacity: 17,
      group: 'わっしょいず',
      evantPlace: 'TOKYOTOKYO',
    })
    .then(() => {
      alert('追加');
    })
    .catch((e) => {
      alert('error');
      console.log(e);
    });
};

export const addDummystandbyEvent = () => {
  standbyRef
    .add({
      id: 'o02rJFOIWJPFW23IRDKJE5',
      mainTitle: 'わっしょいイベント!!!!!!!',
      author: '主催者123',
      imageUrl: 'https:picsum.photos/200/300',
      startAt: new Date(),
      endAt: new Date(),
      maxCapacity: 20,
      currentCapacity: 17,
      group: 'わっしょいず',
      evantPlace: 'TOKYOTOKYO',
    })
    .then(() => {
      alert('追加');
    })
    .catch((e) => {
      alert('error');
      console.log(e);
    });
};
