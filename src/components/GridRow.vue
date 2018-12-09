<template>

  <tr>
    <td>{{item.type}}</td>
    <td>
      <span v-if="!editMode">{{item.topic_name}}</span>
      <span v-if="editMode">
        <input
          type="text"
          v-model="editText"
        >
        <button class="save-button" @click="onSave">save</button>

      </span>
    </td>
    <td>{{item.doc_num}} <span v-if="item.doc_num < 200">(need a minmum 200)</span> </td>
    <td>
      <ActionButton
        @click="onAlert"
        :btnType="'print'"
        :disabled="item.type === 1? false : true "
      />
      <ActionButton
        @click.native="onEdit"
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
  </tr>

</template>

<script>
import ActionButton from "./ActionButton";
export default {
  props: ["item"],
  data() {
    return {
      editMode: false,
      editText: ""
    };
  },
  methods: {
    onAlert() {
      alert;
    },
    onEdit() {
      (this.editMode = true), (this.editText = this.item.topic_name);
    },
    onSave() {

    }
  },
  components: {
    ActionButton
  }
};
</script>

<style scoped>
td {
  padding: 10px 0;
}

.save-button {
    color: white;
    background: #81bad5;
    border: 0;
    border-radius: 5px
}
</style>
