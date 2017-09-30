import React from 'react';
import { Admin, Resource } from 'admin-on-rest';
import { PostList} from './posts';
import { RestClient, AuthClient } from 'aor-firebase-client';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyA5CjhuOtbe9PcMKiDa3u6CgjH5UksuWwY',
    authDomain: 'suivi-vehicules.firebaseapp.com',
    databaseURL: 'https://suivi-vehicules.firebaseio.com',
    storageBucket: 'suivi-vehicules.apppot.com',
    messagingSenderId: '618276837563'
};

firebase.initializeApp(firebaseConfig);

const App = () => (
    <Admin authClient={AuthClient}>
        <Resource name="posts" list={PostList} />
    </Admin>
);

export default App;