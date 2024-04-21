import { DateInput, Create, SimpleForm, TextInput } from "react-admin";

const ContractCreate = () => (
	<Create>
		<SimpleForm>
			<TextInput source='kupac' required />
			<TextInput source='broj_ugovora' required />
			<DateInput source='datum_akontacije' required />
			<DateInput source='rok_isporuke' required />
			<TextInput source='status' value={"KREIRANO"} hidden />
		</SimpleForm>
	</Create>
);

export default ContractCreate;
