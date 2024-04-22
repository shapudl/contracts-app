import { FilterList, FilterListItem } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import CategoryIcon from "@mui/icons-material/LocalOffer";

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
	const classes = useStyles();

	return (
		<FilterList
			label='Status'
			icon={<CategoryIcon />}
			className={classes.filterList}
			alwaysOn
		>
			<FilterListItem
				label='Aktivni'
				value={{ status: ["KREIRANO", "NARUČENO"] }}
				className={classes.filterListItem}
			/>
			<FilterListItem
				label='Neaktivni'
				value={{ status: "ISPORUČENO" }}
				className={classes.filterListItem}
			/>
		</FilterList>
	);
};

export default StatusFilter;
