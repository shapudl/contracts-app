import { makeStyles } from "@material-ui/core/styles";
import { FunctionField } from "react-admin";

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

const StatusField = () => {
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
		<FunctionField
			label='Status'
			source='status'
			render={(record, source) => renderField(record, source)}
		/>
	);
};

export default StatusField;
