import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { VoituresList } from './voitures';
/* import { SuiviList, SuiviEdit, SuiviCreate } from './suivi'; */
import { UserList } from './users1';
import { RestClient, AuthClient } from 'aor-firebase-client';

const firebaseConfig = {
    apiKey: 'AIzaSyA5CjhuOtbe9PcMKiDa3u6CgjH5UksuWwY',
    authDomain: 'suivi-vehicules.firebaseapp.com',
    databaseURL: 'https://suivi-vehicules.firebaseio.com',
    storageBucket: 'suivi-vehicules.apppot.com',
    messagingSenderId: '618276837563'
};

const trackedResources = ['voitures', 'users1', "suivi"]

const App = () => (
    <Admin restClient={RestClient(trackedResources, firebaseConfig)} authClient={AuthClient}>
        <Resource name="voitures" list={VoituresList} remove={Delete} />
        <Resource name="users1" list={UserList} />
        <Resource name="suivi" list={SuiviList}  create={SuiviCreate}/>
    </Admin>
);

export default App;