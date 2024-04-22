import {
	List,
	Datagrid,
	TextField,
	FunctionField,
	SearchInput
} from "react-admin";
import { formatDate } from "../../Utils/format";
import { makeStyles } from "@material-ui/core/styles";
import { StatusFilter } from "../Status";

const useStyles = makeStyles(theme => ({
	deliveredStyle: {
		color: "#adadad",
		fontWeight: "bold"
	},
	orderedStyle: {
		color: "#e5b700",
		fontWeight: "bold"
	},
	createdStyle: {
		color: "#61d327",
		fontWeight: "bold"
	}
}));

const contractFilters = [<SearchInput source='q' alwaysOn />, <StatusFilter />];

const ContractsList = () => {
	const classes = useStyles();

	const renderField = (record, source) => {
		if (!record) return null;

		let statusClass;

		switch (record[source]) {
			case "KREIRANO":
				statusClass = classes.createdStyle;
				break;
			case "NARUČENO":
				statusClass = classes.orderedStyle;
				break;
			case "ISPORUČENO":
				statusClass = classes.deliveredStyle;
				break;
		}

		return <span className={statusClass}>{record[source]}</span>;
	};

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
				<FunctionField
					label='Status'
					source='status'
					render={(record, source) => renderField(record, source)}
				/>
			</Datagrid>
		</List>
	);
};

export default ContractsList;
