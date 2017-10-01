import React from 'react';
import { List,Edit, TextInput, DisableInput, Create, SimpleForm, ReferenceInput, SelectInput, NumberInput, Datagrid, TextField, NumberField } from 'admin-on-rest';

export const VoituresList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="immatriculation" />
            <TextField source="marque" />
            <TextField source="model" />
            <NumberField source="KM" />
        </Datagrid>
    </List>
);

 const VoituresTitle = ({ record }) => {
    return <span>Voitures {record ? `"${record.title}"` : ''}</span>;
};

export const VoituresEdit = (props) => (
    <Edit title={<VoituresTitle />} {...props}>
        <SimpleForm>
            <DisableInput source="immatriculation" />
            <ReferenceInput label="User" source="userId" reference="users1">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <ReferenceInput label="User" source="userId" reference="users1">
                <TextInput source="username" />
            </ReferenceInput>
            <NumberInput source="KM" />
        </SimpleForm>
    </Edit>
); 

export const VoituresCreate = (props) => (
<Create title="Create a Post" {...props}>        
    <SimpleForm>
        <NumberInput source="KM" />
        </SimpleForm>
    </Create> 
);