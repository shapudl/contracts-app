import {
	DateField,
	Show,
	SimpleShowLayout,
	TextField,
	ArrayField,
	Datagrid
} from "react-admin";
import { StatusField } from "../Status";

const Contract = () => {
	return (
		<>
			<Show>
				<SimpleShowLayout>
					<TextField source='id' />
					<TextField source='kupac' />
					<TextField source='broj_ugovora' />
					<DateField source='datum_akontacije' />
					<DateField source='rok_isporuke' />
					<TextField source='status' />
					<ArrayField source='products'>
						<Datagrid bulkActionButtons={false}>
							<TextField source='id' />
							<TextField source='naziv' />
							<TextField source='dobavljač' />
							<StatusField label='Status' />
						</Datagrid>
					</ArrayField>
				</SimpleShowLayout>
			</Show>
		</>
	);
};

export default Contract;
