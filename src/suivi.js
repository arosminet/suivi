import React from 'react';
import { ImageInput, ImageField, Responsive, SimpleList, List, Edit, Create, Datagrid, ReferenceField, NumberField, TextField, InputField, EditButton, DisabledInput, ReferenceInput, NumberInput, TextInput, SelectInput, SimpleForm, DateField } from 'admin-on-rest';

export const SuiviList = (props) => (
    <List {...props}>
        <Datagrid>
        <ReferenceField label="Immatriculation" source="immaId" reference="voitures">
     <TextField source="immatriculation" />
            </ReferenceField>
            <TextField source="id" />
            <NumberField source="KM" />
        </Datagrid>
    </List>
);

const SuiviTitle = ({ record }) => {
    return <span>suivi {record ? `"${record.id}"` : ''}</span>;
};

export const SuiviEdit = (props) => (
    <Edit title={<suiviTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="model" />
        </SimpleForm>
    </Edit>
);

export const SuiviCreate = (props) => (
    <Create title="Suivi" {...props}>
        <SimpleForm>
<ReferenceField label="User" source="userId" reference="users1">
     <TextField source="username" />
            </ReferenceField>
            <NumberInput source="KM" />
        </SimpleForm>
    </Create>
);
