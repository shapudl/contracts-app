import {
	List,
	Datagrid,
	TextField,
	FunctionField,
	SearchInput
} from "react-admin";
import { formatDate } from "../../Utils/format";
import { StatusFilter, StatusField } from "../Status";

const contractFilters = [<SearchInput source='q' alwaysOn />, <StatusFilter />];

const ContractsList = () => {
	return (
		<List filters={contractFilters} exporter={false}>
			<Datagrid rowClick='show'>
				<TextField label='ID' source='id' />
				<TextField label='Ime Kupca' source='kupac' />
				<TextField label='Broj Ugovora' source='broj_ugovora' />
				<FunctionField
					label='Rok Isporuke'
					render={record => formatDate(record.rok_isporuke)}
				/>
				<StatusField label='Status' />
			</Datagrid>
		</List>
	);
};

export default ContractsList;
