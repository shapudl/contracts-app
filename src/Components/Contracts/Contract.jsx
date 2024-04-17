import { DateField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const Contract = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="kupac" />
            <TextField source="broj_ugovora" />
            <DateField source="datum_akontacije" />
            <DateField source="rok_isporuke" />
            <TextField source="status" />
        </SimpleShowLayout>
    </Show>
);
export default Contract;