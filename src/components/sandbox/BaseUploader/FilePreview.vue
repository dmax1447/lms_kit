<template>
  <div
    class="file-preview"
    :style="{
      border: getFileExtension === 'pdf' ? 'none' : 'border: rem(1px) solid #a0a9b2',
    }"
  >
    <svg :width="sizes.width" :height="sizes.height" viewBox="0 0 80 80">
      <use :xlink:href="hrefToSvg" />
    </svg>
    <!--    <img v-else-if="isImageFile" :style="sizesWithPixels" :src="fileSrc" alt="" />-->
    <!--    <svg v-else :width="sizes.width" :height="sizes.height" viewBox="0 0 80 80">-->
    <!--      <use :xlink:href="hrefToSvg" />-->
    <!--    </svg>-->
    <div class="file-preview--hover">
      <BaseIcon class="eye-icon" name="eye" color="#FFF" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilePreview',
  props: {
    file: {
      type: Blob,
      default: () => ({}),
    },
    existingIconFormats: {
      type: Array,
      default: () => [
        'doc',
        'docx',
        'txt',
        'rtf',
        'pdf',
        'odt',
        'html',
        'pptx',
        'ppt',
        'odp',
        'xls',
        'xlsx',
        'tif',
        'tiff',
        'psd',
        'apng',
        'gif',
        'ico',
        'cur',
        'jpg',
        'jpeg',
        'pjpeg',
        'pjp',
        'png',
        'svg',
        'webp',
        'bmp',
      ],
    },
    imageFormats: {
      type: Array,
      default: () => ['apng', 'gif', 'ico', 'cur', 'jpg', 'jpeg', 'pjpeg', 'pjp', 'png', 'svg', 'webp', 'bmp'],
    },
    sizes: {
      type: Object,
      default: () => ({
        height: 80,
        width: 80,
      }),
    },
  },
  data() {
    return {}
  },
  computed: {
    // sizesWithPixels() {
    //   return Object.entries(this.sizes).map(([key, value]) => ({ [key]: `${value}px` }))
    // },
    getFileExtension() {
      return this.file?.name.slice(((this.file?.name.lastIndexOf('.') - 1) >>> 0) + 2)
    },
    isIconFileExist() {
      const fileExtension = this.getFileExtension
      return this.existingIconFormats.includes(fileExtension)
    },
    isImageFile() {
      const fileExtension = this.getFileExtension
      return this.imageFormats.includes(fileExtension)
    },
    hrefToSvg() {
      if (this.isIconFileExist) {
        return `#${this.getFileExtension}`
      } else if (this.isImageFile) {
        return null
      }
      return `#unknown`
    },
    // fileSrc() {
    //   return URL.createObjectURL(this.file)
    // },
  },
}
</script>

<style scoped lang="scss">
.file-preview {
  border-radius: 8px;
  border: 1px solid var(--stroke-cards);
  position: relative;
  cursor: default;
  img {
    background-size: contain;
  }
  &--hover {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  &:hover {
    .file-preview--hover {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      cursor: pointer;
      .eye-icon {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
