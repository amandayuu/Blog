<template>
  <div class="posts">
    <div class="posts_header">
      <div class="posts_header_avatar">
        <img :src="avatar" />
      </div>
      <div class="posts_header_title">
        <h1>{{ title }}</h1>
        <h3>{{ subtitle }}</h3>
      </div>
    </div>
    <div class="posts_body">
      <span class="posts_body_subtitle_author">By John Doe</span>
      <span class="posts_body_icon">
        <img class="posts_body_icon_img" :src="deleteIcon" />
        <img class="posts_body_icon_img" :src="editIcon" />
      </span>
    </div>
  </div>
</template>
<script setup>
import avatar from "../../assets/images/avatar.svg";
import deleteIcon from "../../assets/images/delete.svg";
import editIcon from "../../assets/images/edit.svg";

defineProps({
  title: {
    type: String,
    required: true,
    default: "",
  },
  subtitle: {
    type: String,
    required: true,
    default: "",
  },
});
</script>
<style lang="scss" scoped>
.posts {
  padding: 15px;
  .posts_header {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    column-gap: 10px;
    .posts_header_avatar {
      max-width: 80px;
    }
    .posts_header_title {
    }
  }

  .posts_body {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .posts_body_icon {
      column-gap: 10px;
      display: flex;
      .posts_body_icon_img {
        height: 25px;
      }
    }
  }
}
</style>
