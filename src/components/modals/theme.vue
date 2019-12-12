<template>
  <div class="modal fade" id="theme-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create Theme</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit="handleCreateTheme">
            <div v-if="error" class="error">{{ error }}</div>
            <div class="form-group">
              <label for="name"><b>Name</b></label>
              <input required type="text" id="name" class="form-control" v-model="name" placeholder="Enter theme name" autocomplete="off">
            </div>
            <div class="form-group">
              <label for="text"><b>Text</b></label>
              <textarea class="form-control" id="text" v-model="text" rows="3" autocomplete="off"></textarea>
            </div>
            <button type="submit" class="btn btn-block btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
import { api } from 'utils/api';

export default {
  name: 'theme',
  data() {
    return {
      error: null,
      name: null,
      text: null
    }
  },
  methods: {
    handleCreateTheme(e) {
      e.preventDefault();
      e.stopPropagation();

      const data = {
        name: this.name,
        text: this.text,
        initiator: JSON.parse(localStorage.getItem('username'))
      }

      api.POST('/api/theme', data);

      $('#theme-modal').modal('hide');

      this.name = null;
      this.text = null;
      this.error = null;
    }
  }
}
</script>