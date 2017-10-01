import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { VoituresList, VoituresCreate, VoituresEdit } from './voitures';
import { RestClient, AuthClient } from 'aor-firebase-client';

const firebaseConfig = {
    apiKey: 'AIzaSyA5CjhuOtbe9PcMKiDa3u6CgjH5UksuWwY',
    authDomain: 'suivi-vehicules.firebaseapp.com',
    databaseURL: 'https://suivi-vehicules.firebaseio.com',
    storageBucket: 'suivi-vehicules.apppot.com',
    messagingSenderId: '618276837563'
};

const trackedResources = ['voitures']

const App = () => (
    <Admin restClient={RestClient(trackedResources, firebaseConfig)} authClient={AuthClient}>
        <Resource name="voitures" list={VoituresList} create={VoituresCreate} edit={VoituresEdit} remove={Delete} />
    </Admin>
);

export default App;