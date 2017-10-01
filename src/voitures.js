import React from 'react';
import { List, ReferenceField, ReferenceInput,  SelectInput, NumberField, NumberInput, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput } from 'admin-on-rest';

export const VoituresList = (props) => (
    <List {...props}>
        <Datagrid>
           <ReferenceField label="User" source="userId" reference="users1">
                <TextField source="username" />
            </ReferenceField>
            <TextField source="marque" />
            <TextField source="model" />
            <NumberField source="KM" />
            <EditButton />
        </Datagrid>
    </List>
);

const VoituresTitle = ({ record }) => {
    return <span>Voitures {record ? `"${record.model}"` : ''}</span>;
};

export const VoituresEdit = (props) => (
    <Edit title={<VoituresTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="model" />
    <ReferenceInput label="User" source="userId" reference="users1">
                <SelectInput optionText="username" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const VoituresCreate = (props) => (
    <Create title="Add a car" {...props}>
        <SimpleForm>
             <TextInput source="immatriculation" />
            <TextInput source="marque"/>
            <TextInput source="model" />
            <NumberInput source="KM" />
    <ReferenceInput label="User" source="userId" reference="users1" denyEmpty>
                <SelectInput optionText="username" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
