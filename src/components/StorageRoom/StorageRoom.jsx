import React from "react";
import "./StorageRoom.css";
import StorageRoomRack from "../StorageRoomRack/StorageRoomRack";

const StorageRoom = () => {
	return (
		<>
			<div className="storage_room">
				<StorageRoomRack />
				<StorageRoomRack />
				<StorageRoomRack />
				<StorageRoomRack />
				<StorageRoomRack />
				<StorageRoomRack />
			</div>
		</>
	);
};

export default StorageRoom;
