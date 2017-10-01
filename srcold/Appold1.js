import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { VoituresList , VoituresCreate} from './voitures';
import { SuiviList} from './suivi';
import { UserList } from './users1';
import { RestClient } from 'aor-firebase-client';

const firebaseConfig = {
    apiKey: 'AIzaSyA5CjhuOtbe9PcMKiDa3u6CgjH5UksuWwY',
    authDomain: 'suivi-vehicules.firebaseapp.com',
    databaseURL: 'https://suivi-vehicules.firebaseio.com',
    storageBucket: 'suivi-vehicules.apppot.com',
    messagingSenderId: '618276837563'
};

const trackedResources = ['voitures', 'users1', "suivi"]

const App = () => (
    <Admin restClient={RestClient(trackedResources, firebaseConfig)}>
        <Resource name="voitures" list={VoituresList} create={VoituresCreate} remove={Delete} />
        <Resource name="users1" list={UserList} />
        <Resource name="suivi" list={SuiviList} />
    </Admin>
);

export default App;