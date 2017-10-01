import React from 'react';
import { ImageInput, ImageField, Responsive, SimpleList, List, Edit, Create, Datagrid, ReferenceField, NumberField, TextField, InputField, EditButton, DisabledInput, ReferenceInput, NumberInput, TextInput, SelectInput, SimpleForm, DateField } from 'admin-on-rest';

export const SuiviList = (props) => (
    <List {...props}>
        <Datagrid>
    <ReferenceField label="User" source="userId" reference="users1">
                <TextField source="username" />
            </ReferenceField>
            <TextField source="id" />
            <NumberField source="KM" />
        </Datagrid>
    </List>
);
 