import {
	DateInput,
	Edit,
	SimpleForm,
	SelectInput,
	useRecordContext
} from "react-admin";
import { useState, useEffect } from "react";
import { getAvailableStatus } from "../../Utils/status";

const ContractStatus = () => {
	const [choices, setChoices] = useState([]);
	const record = useRecordContext();

	useEffect(() => {
		const fetchChoices = () => {
			if (!record) return;

			const currentStatus = record.status;
			const availableStatus = getAvailableStatus(currentStatus);
			setChoices(availableStatus);
		};

		fetchChoices();

	}, []);

	return (
		<SelectInput
			source='status'
			choices={choices}
            defaultValue={record.status}
			optionText='name'
			optionValue='id'
		/>
	);
};

const ContractEdit = () => {
	return (
		<Edit>
			<SimpleForm>
				<DateInput source='rok_isporuke' />
				<ContractStatus />
			</SimpleForm>
		</Edit>
	);
};

export default ContractEdit;
