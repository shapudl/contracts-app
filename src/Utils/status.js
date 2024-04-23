// TODO this logic would fit better on the server side, functions can be used to fetch status data from the server side in the future

export const  getAvailableStatus = currStatus => {
	let newStatuses = [];

	switch (currStatus) {
		case "KREIRANO":
			newStatuses = [
				{ id: "KREIRANO", name: "KREIRANO" },
				{ id: "NARUČENO", name: "NARUČENO" }
			];
			break;
		case "NARUČENO":
			newStatuses = [
				{ id: "NARUČENO", name: "NARUČENO" },
				{ id: "ISPORUČENO", name: "ISPORUČENO" }
			];
			break;
		case "ISPORUČENO":
			newStatuses = [
				{ id: "ISPORUČENO", name: "ISPORUČENO" }
			];
			break;
	}

	return newStatuses;
};

export const getActiveStatuses = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["KREIRANO", "NARUČENO"]);
        }, 1000); // Timeout is here to mock waiting the API response
    });
};


export const getInactiveStatuses = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["ISPORUČENO"]);
        }, 1000);
    });
};