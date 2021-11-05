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
        <i class="fa fa-cloud-upload"></i>
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
            @dragstart="imageDragStart(index)"
            @dragenter="imageDragEnter(index)"
            @dragend="imageDragEnd(index)"
          >
            <img :src="getImages(index)" :alt="`Images Uploader ${index}`" />
            <div class="details">
              <span class="image-name" v-text="files[index].name"></span>
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

    const getImages = (index) => {
      return state.images[index]
    }

    const imageDragStart = (val) => {
      state.oldVal = val
      state.newVal = val
    }

    const imageDragEnd = (val) => {
      if (state.oldVal !== state.newVal) {
        let oldIndex = state.imagesIndexArr.indexOf(state.oldVal);
        let newIndex = state.imagesIndexArr.indexOf(state.newVal);
        let newItems = [...state.imagesIndexArr];
        newItems.splice(oldIndex, 1)
        newItems.splice(oldIndex, 0, state.imagesIndexArr[newIndex])
        newItems.splice(newIndex, 1)
        newItems.splice(newIndex, 0, state.imagesIndexArr[oldIndex])
        state.imagesIndexArr = [...newItems]
        state.isActive = -1
      }
    }

    const imageDragEnter = (val) => {
      state.newVal = val
    }

    const onDragEnter = (e) => {
      e.preventDefault();
      state.dragCount++
      state.isDragging = true
    }

    const onDragLeave = (e) => {
      e.preventDefault()
      state.dragCount--
      if (state.dragCount <= 0) {
        state.isDragging = false
      }
    }

    const onDrop = (e) => {
      e.preventDefault()
      e.stopPropagation();
      state.isDragging = false
      const files = e.dataTransfer.files
      Array.from(files).forEach(file => addImage(file))
    }

    const addImage = (file) => {
      if (!file.type.match('image.*')) {
        alert(`${file.name} is not an image`)
        return
      }
      state.files.push(file)
      const img = new Image()
      const reader = new FileReader()

      reader.onload = (e) => {
        state.images.push(e.target.result)
        state.imagesIndexArr.push(state.imagesIndex)
        state.imagesIndex++
      }
      reader.readAsDataURL(file)
    }

    const onInputChange = (e) => {
      const files = e.target.files
      Array.from(files).forEach(file => addImage(file))
    }

    const upload = () => {
      let index = 0
      const stroage = window.localStorage
      state.images.forEach(() => {
        stroage.setItem(index, state.images[index])
        index++
      })

      setTimeout(() => {
        let index = 0
        state.images.forEach(() => {
          if (stroage.getItem(index) !== state.images[index]) {
            alert(`${state.images[index]} not uploaded successfully`)
          }
          index++
        })
        alert("uploaded successfully")

      })
    }


    return {
      ...toRefs(state), onDragEnter, getImages, imageDragStart, imageDragEnd, imageDragEnter,
      onDragLeave, onDrop, onInputChange, upload
    }
  }
}
</script>

<style lang="scss" scoped>
.image-loader-wrapper {
  max-width: 500px;
  .uploader {
    width: 100%;
    height: 100%;
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

      .file-input label {
        background: #2196f3;
        color: #fff;
      }
    }
    i {
      font-size: 48px;
    }
    .file-input {
      max-width: 200px;
      margin: auto;
      height: 68px;
      position: relative;

      label,
      input {
        background: #fff;
        color: #2196f3;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        padding: 10px;
        border-radius: 4px;
        margin-top: 7px;
        cursor: pointer;
      }

      input {
        opacity: 0;
        z-index: -2;
      }
    }
    .images-preview {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      .flip-list-move {
        transition: transform 0.3s ease-in;
      }
      .img-wrapper {
        width: 134px;
        height: 100px;
        display: flex;
        flex-direction: column;
        margin: 10px;
        justify-content: space-between;
        background: #fff;
        box-shadow: 5px 5px 20px #3e3737;

        img {
          height: 80%;
          object-fit: fill;
        }
      }
      .details {
        font-size: 12px;
        background: #fff;
        color: #000;
        display: flex;
        flex-direction: column;
        align-items: self-start;
        padding: 2px;
        height: 20%;
        .image-name {
          width: 100%;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
    }
    .upload-control {
      position: absolute;
      width: 100%;
      background: #fff;
      top: 0;
      left: 0;
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
      padding: 10px;
      padding-bottom: 4px;
      text-align: right;

      button,
      label {
        background: #2196f3;
        border: 2px solid#03A9F4;
        border-radius: 3px;
        color: #fff;
        font-size: 15px;
        cursor: pointer;
        padding: 2px 5px;
      }

      label {
        margin-right: 10px;
      }
    }
  }
}
</style>