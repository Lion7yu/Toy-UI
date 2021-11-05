<template>
  <div class="image-loader-wrapper">
    <div
      class="uploader"
      @dragenter="onDragEnter"
      @dragleave="onDragLeave"
      @dragover.prevent
      @drop="onDrop"
      :class="{ dragging: isDragging }"
    >
      <div class="upload-control" v-show="images.length">
        <label for="file">Select a file</label>
        <button @click="upload">Upload</button>
      </div>
      <div v-show="!images.length">
        <i class="fa fa cloud-upload"></i>
        <p>Drag your images here</p>
        <div>OR</div>
        <div class="file-input">
          <label for="file">Select a file</label>
          <input type="file" id="file" @change="onInputChange" multiple />
        </div>
      </div>

      <div class="images-preview" v-show="images.length">
        <transition-group name="flip-list" class="box">
          <div
            class="img-wrapper"
            v-for="(index) in imagesIndexArr"
            :key="index"
            draggable="true"
            :class="{ active: oldVal === index && isActive === index }"
            @dragstart="imageDragstart(index)"
            @dragenter="imageDragenter(index)"
            @dragend="ImageDragend(index)"
          >
            {{ index }}
            <img :src="getImages(index)" :alt="`Images Uploader ${index}`" />
            <div class="details">
              <span class="image-name" v-text="files[index].name"></span>
              <span class="image-size" v-text="files[index].size"></span>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: "ToyImagesUploader",
  setup() {
    const state = reactive({
      isDragging: false,
      dragCount: 0,
      files: [],
      images: [],
      imagesIndexArr: [],
      imagesIndex: 0,
      isActive: 0,
      oldVal: 0,
      newVal: 0,
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.image-loader-wrapper {
  width: 500px;
  .uploader {
    width: 100%;
    background: #2196f3;
    color: #fff;
    padding: 40px 15px;
    text-align: center;
    border-radius: 10px;
    border: 3px dashed #fff;
    font-size: 20px;
    position: relative;
    &.dragging {
      background: #fff;
      color: #2196f3;
      border: 3px dashed #2196f3;
    }
  }
}
</style>