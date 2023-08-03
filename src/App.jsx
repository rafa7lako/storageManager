import React from "react";
import StorageRoom from "./components/StorageRoom/StorageRoom";

import "./App.css";
import AddNewBoxForm from "./components/AddNewBoxForm/AddNewBoxForm";

function App() {
	return (
		<>
			<AddNewBoxForm />
			<StorageRoom />
		</>
	);
}

export default App;
