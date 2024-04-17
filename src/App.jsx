import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, ShowGuesser, fetchUtils } from "react-admin";
import { ContractsList, Contract } from "./Components/Contracts";
import "./App.css";

const httpClient = (url, options = {}) => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: "application/json" });
	}

	options.headers.set("X-Total-Count", 100); // @TODO set header to actual resource count
	return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider("http://localhost:8000");

const App = () => (
	<Admin dataProvider={dataProvider}>
		<Resource name='contracts' list={ContractsList} show={Contract}/>
	</Admin>
);

export default App;
