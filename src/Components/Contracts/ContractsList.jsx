import {
	List,
	Datagrid,
	TextField,
	FunctionField,
	SearchInput
} from "react-admin";
import { formatDate } from "../../Utils/format";
import { StatusFilter, StatusField } from "../Status";

// @TODO current data provider enables only full text search
// for search to work only on specific fields (e.g. "kupac") implement a custom data provider 
const contractFilters = [<SearchInput source='q' alwaysOn />, <StatusFilter />];

// @TODO implement loading state
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
