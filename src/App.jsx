import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, fetchUtils } from "react-admin";
import {
	ContractsList,
	Contract,
	ContractEdit,
	ContractCreate
} from "./Components/Contracts";
import "./App.css";

// @TODO move httpClient to a more convenient place, maybe Utils/http
const httpClient = (url, options = {}) => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: "application/json" });
	}

	options.headers.set("X-Total-Count", 100); // @TODO set header to actual resource count
	return fetchUtils.fetchJson(url, options);
};

// @TODO create environmental variable for api url
const dataProvider = jsonServerProvider("http://localhost:8000");

const App = () => (
	<Admin dataProvider={dataProvider}>
		<Resource
			name='contracts'
			list={ContractsList}
			show={Contract}
			edit={ContractEdit}
			create={ContractCreate}
		/>
	</Admin>
);

export default App;
