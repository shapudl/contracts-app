import {
	DateField,
	Show,
	SimpleShowLayout,
	TextField,
	ArrayField,
	Datagrid,
	FunctionField
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

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

export const Contract = () => {
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
							<FunctionField
								label='Status'
								source='status'
								render={(record, source) => renderField(record, source)}
							/>
						</Datagrid>
					</ArrayField>
				</SimpleShowLayout>
			</Show>
		</>
	);
};

export default Contract;
