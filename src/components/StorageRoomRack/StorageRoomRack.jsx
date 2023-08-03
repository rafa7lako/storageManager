import React from "react";
import "./StorageRoomRack.css";
import StorageRoomRackQuarter from "../StorageRoomRackQuarter/StorageRoomRackQuarter";

const StorageRoomRack = () => {
	return (
		<>
			<div className="storage_room-rack">
				<StorageRoomRackQuarter />
				<StorageRoomRackQuarter />
				<StorageRoomRackQuarter />
				<StorageRoomRackQuarter />
			</div>
		</>
	);
};

export default StorageRoomRack;
