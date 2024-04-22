import {
	DateInput,
	Edit,
	SimpleForm,
	SelectInput,
	useRecordContext
} from "react-admin";
import { formatDate } from "../../Utils/format";
import { useState, useEffect } from "react";
import { getActiveStatuses, getAvailableStatus } from "../../Utils/status";
import { Typography } from "@material-ui/core";

const ContractForm = () => {
	const [choices, setChoices] = useState([]);
	const [isActiveStatus, setIsActiveStatus] = useState(false);
	const record = useRecordContext();

	useEffect(() => {
		if (!record) return;

		const currentStatus = record.status;
		const fetchChoices = () => {
			const availableStatus = getAvailableStatus(currentStatus);
			setChoices(availableStatus);
		};

		const fetchActiveStatuses = async () => {
			const activeStatuses = await getActiveStatuses();
			setIsActiveStatus(activeStatuses.includes(record.status));
		};

		fetchActiveStatuses();
		fetchChoices();

		return () => {};
	}, []);

	return (
		<SimpleForm>
			<Typography variant='h4' gutterBottom>
				Izmjena ugovora
			</Typography>
			<div>
				<Typography variant='h6' gutterBottom>
					Broj Ugovora
				</Typography>
				<p>{record.broj_ugovora}</p>
				<Typography variant='h6' gutterBottom>
					Kupac
				</Typography>
				<p>{record.kupac}</p>
			</div>

			{isActiveStatus && <DateInput source='rok_isporuke' />}
			{isActiveStatus && (
				<SelectInput
					source='status'
					choices={choices}
					defaultValue={record.status}
					optionText='name'
					optionValue='id'
				/>
			)}
			{!isActiveStatus && (
				<>
					<Typography variant='h6' gutterBottom>
						Rok Isporuke:
					</Typography>
					<p>{formatDate(record.rok_isporuke)}</p>
					<Typography variant='h6' gutterBottom>
						Status:
					</Typography>
					<p>{record.status} , nije moguće izmijeniti</p>
				</>
			)}
		</SimpleForm>
	);
};

const ContractEdit = () => {
	return (
		<Edit>
			<ContractForm />
		</Edit>
	);
};

export default ContractEdit;
