<template>
	<div class="container">
		<table>
			<thead>
				<tr>
					<th>Type</th>
					<th>Topic Name</th>
					<th>Positive Traning Documents</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<GridRow
				 @delete-item="deleteItem"
				 @save-item="saveItem"
				 @alert-item="onAlert"
				 v-for="item in gridItems"
				 :key="item.topic_name"
				 :item="item"
				/>
			</tbody>
		</table>

	</div>
</template>

<script>
import dataService from "@/services/DataService.js";
import GridRow from "@/components/GridRow";
export default {
	data() {
		return {
			gridItems: []
		};
	},
	created() {
		dataService.getData().then(data => (this.gridItems = data));
	},

	methods: {
		onAlert(name) {
			alert(name);
		},
		saveItem(updatedItem) {
			let index = this.gridItems.findIndex(item => item.id === updatedItem.id);
			this.gridItems.splice(index, 1, updatedItem);
		},
		deleteItem(id) {
			console.log("sljefhesj;");
			this.gridItems = this.gridItems.filter(item => item.id !== id);
		}
	},
	components: {
		GridRow
	}
};
</script>

<style scoped>
.container {
	width: 100%;
	padding: 20px;
}

table {
	width: 100%;
	font-size: 1rem;
	text-align: left;
}
tbody tr:not(:last-child) {
	border-bottom: 1px solid grey;
}
thead tr {
	border-bottom: 5px solid #81bad5;
	font-weight: bold;
}
th,
td {
	padding: 10px 0;
}
</style>
