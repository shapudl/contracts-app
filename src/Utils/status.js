// TODO this logic would fit better on the server side, if not to keep business logic on backend than for security reasons 
// 

export const getAvailableStatus = currStatus => {
	let newStatuses = [];

	switch (currStatus) {
		case "KREIRANO":
			newStatuses = [{ id: "KREIRANO", name: "KREIRANO" }, { id: "NARUČENO", name: "NARUČENO" }];
			break;
		case "NARUČENO":
			newStatuses = [{ id: "NARUČENO", name: "NARUČENO" },{ id: "ISPORUČENO", name: "ISPORUČENO" }];
			break;
	}

	return newStatuses;
};
