import { firestore } from '../api/firebase/firebase';

const testuserRef = firestore.doc(
  'version/1/users/MJpyUalJPCO2zIJ6J6fd3mOzwTo2'
);

const eventRef = firestore.collection('version/1/events');

export const addDummyEvent = () => {
  eventRef
    .add({
      id: 'DN293843uirenegbo7ujhbvwc2e2r3vt4y5hj90',
      mainTitle: 'semantic ui講座',
      author: 'にゃんちゅう',
      imageUrl: 'https:picsum.photos/200/300',
      startAt: new Date(),
      endAt: new Date(),
      maxCapacity: 200,
      currentCapacity: 171,
      group: 'nyantyuu.io',
      evantPlace: 'nyantyuu office',
    })
    .then(() => {
      alert('追加');
    })
    .catch((e) => {
      alert('error');
      console.log(e);
    });
};

export const addDummyJoinedEvent = () => {
  testuserRef
    .collection('joinEvent')
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
  testuserRef
    .collection('hostEvent')
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
  testuserRef
    .collection('standbyEvent')
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
