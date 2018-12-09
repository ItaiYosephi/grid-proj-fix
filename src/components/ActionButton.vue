<template>
<button :disabled="disabled" :title="title">
    <i :class="classObject"></i>
    
</button>

</template>

<script>
export default {
  props: {
      btnType: {
          type: String,
          required: true
      },
      disabled: {
          type: Boolean,
          default: false
      }
  },
  computed: {
    classObject() {
        console.log()
      return {
        [this.btnType]: true
      };
    },
    title() {
        return this.btnType.charAt(0).toUpperCase() + this.btnType.slice(1);

    }
  }
};
</script>

<style>
button {
    background: transparent;
    border: 0;
    cursor: pointer;

}

button:disabled {
    cursor: no-drop;
}
i {
  padding: 20px;
  width: 20px;
  height: 20px;
  display: inline-block;
  background: no-repeat center;
    background-size: cover;
    color: yellow;


}
.print {
    background-image: url('../assets/icons/zip.png');
}

.edit {
    background-image: url('../assets/icons/pen.png');
}

.folder {
    background-image: url('../assets/icons/folder.png');
}

.trash {
    background-image: url('../assets/icons/trash.png');
}
</style>
