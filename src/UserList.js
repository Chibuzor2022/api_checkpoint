import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
	const [listOfUsers, setListOfUsers] = useState([]);

	// Fetch data from JSONPlaceholder API inside useEffect hook
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				setListOfUsers(response.data); // Save fetched data to state
			})
			// error catching
			.catch((error) => {
				console.error("Error fetching users:", error);
			});
	}, []); // Having an empty dependency so that this will run once on component mount

	return (
		<div>
			<h1>User List</h1>
			<ul>
				{/* mapping through user array */}
				{listOfUsers.map((user) => (
					<li key={user.id}>
						<h2>{user.name}</h2>
						<p>{user.username}</p>
						<p>{user.email}</p>
						<p>{user.website}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
