import { useState, useEffect } from "react";
import { FilterList, FilterListItem } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import CategoryIcon from "@mui/icons-material/LocalOffer";
import { getActiveStatuses, getInactiveStatuses } from "../../Utils/status";


const useStyles = makeStyles(theme => ({
	filterList: {
		display: "flex",
		alignItems: "center"
	},
	filterListItem: {
		marginRight: theme.spacing(2),
		"&:last-child": {
			marginRight: 0
		}
	}
}));

const StatusFilter = () => {
	const [activeStatuses, setActiveStatuses] = useState([]);
	const [inactiveStatuses, setInactiveStatuses] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		
		const fetchStatuses = async () => {
			const activeStatuses = await getActiveStatuses();
			setActiveStatuses(activeStatuses);

			const inactiveStatuses = await getInactiveStatuses();
			setInactiveStatuses(inactiveStatuses);	
		};

		fetchStatuses();

		return () => {};
	}, []);

	return (
		<FilterList
			label='Status'
			icon={<CategoryIcon />}
			className={classes.filterList}
			alwaysOn
		>
			<FilterListItem
				label='Aktivni'
				value={{ status: activeStatuses }}
				className={classes.filterListItem}
			/>
			<FilterListItem
				label='Neaktivni'
				value={{ status: inactiveStatuses }}
				className={classes.filterListItem}
			/>
		</FilterList>
	);
};

export default StatusFilter;
