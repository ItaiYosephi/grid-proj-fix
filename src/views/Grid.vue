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
        <GridRow v-for="item in gridItems" :key="item.topic_name" :item="item"></GridRow>
        <!-- <tr
          v-for="(item, index) in gridItems"
          :key="index"
        >
          <td>{{item.type}}</td>
          <td>{{item.topic_name}}</td>
          <td>{{item.doc_num}}</td>
          <td>
            <ActionButton
              @click.native="onAlert"
              :btnType="'print'"
              :disabled="item.type === 1? false : true "
            />
            <ActionButton
              :btnType="'edit'"
              :disabled="item.type === 2? false : true "
            />
            <ActionButton
              :btnType="'folder'"
              :disabled="true"
            />
            <ActionButton
              :btnType="'trash'"
              :disabled="item.type === 3? false : true "
            />

          </td>
        </tr> -->
      </tbody>
    </table>

  </div>
</template>

<script>
import dataService from "@/services/DataService.js";
import ActionButton from "@/components/ActionButton";
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
    onAlert() {
      alert("alerted");
    }
  },
  components: {
    ActionButton,
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
td {
    background: yellow
}
</style>
