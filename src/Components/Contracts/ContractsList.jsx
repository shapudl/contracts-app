import { List, Datagrid, TextField, FunctionField } from "react-admin";
import { formatDate } from "../../Utils/format";

const ContractsList = () => {
	return (
		<List>
			<Datagrid rowClick='edit'>
				<TextField source='id' />
				<TextField source='kupac' />
				<TextField source='broj_ugovora' />
				<FunctionField
					label='Rok Isporuke'
					render={record => formatDate(record.rok_isporuke)}
				/>
				<TextField source='status' />
			</Datagrid>
		</List>
	);
};

export default ContractsList;
