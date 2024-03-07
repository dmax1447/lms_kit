<template>
  <div class="base-uploader" @dragover.prevent @drop.prevent @submit.prevent>
    <p v-if="label" class="label">{{ label }}</p>
    <slot name="fileViewer" v-bind="this">
      <div v-if="files.length" class="uploader-file-viewer">
        <template v-if="!isPreviewMode">
          <div v-if="left_arrow_visibility" class="uploader-file-viewer__arrow uploader-file-viewer__arrow--left">
            <div class="arrow" @click.stop="onLeftArrowClick">
              <BaseIcon name="arrow_big_left"></BaseIcon>
            </div>
          </div>

          <div ref="files-scrollable-view" class="uploader-file-viewer__files">
            <Splide
              ref="carousel"
              class="carousel"
              :options="splideOptions"
              @splide:moved="refreshSpliderAfterMove"
              @splide:click="refreshSpliderAfterMove"
            >
              <SplideSlide v-if="desktop_preview" class="carousel-slide__btn" style="width: 39px; height: 80px">
                <div class="carousel-slide__btn--add" @click="onChooseFileClick">
                  <BaseIcon name="clip_attachment" color="white" size="tn"></BaseIcon>
                </div>
              </SplideSlide>

              <template v-for="(file, index) in files">
                <SplideSlide :key="`${file.name}-${index}`" style="width: 80px">
                  <div class="uploader-file-viewer__files--file">
                    <FilePreview
                      :file="file"
                      :sizes="{
                        height: 80,
                        width: 80,
                      }"
                      @click.native="onFileClick(file, index)"
                    />
                    <div class="file-trash">
                      <BaseIcon class="trash-icon" name="trash" @click="onRemoveIconClick(index)"></BaseIcon>
                    </div>
                  </div>
                </SplideSlide>
              </template>
            </Splide>
          </div>

          <div v-if="right_arrow_visibility" class="uploader-file-viewer__arrow uploader-file-viewer__arrow--right">
            <div class="arrow" @click.stop="onRightArrowClick">
              <BaseIcon name="arrow_big_right"></BaseIcon>
            </div>
          </div>
        </template>

        <template v-else>
          <div v-if="files.length" class="files__list">
            <div v-for="(file, index) in files" :key="`${file.name}-${index}`" class="file">
              <FilePreview
                :file="file"
                :sizes="{
                  height: 48,
                  width: 48,
                }"
                @click.native="onFileClick(file, index)"
              />
              <div class="file__description">
                <div class="file__description-name">{{ file.name }}</div>
                <div class="file__description-size">{{ formatFileSize(file.size) }}</div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </slot>

    <slot name="dragNdrop" v-bind="this">
      <div
        v-if="!isPreviewMode && (!desktop_preview || (desktop_preview && files.length <= 0))"
        class="drag-n-drop-area"
        @drop.prevent="onDrop"
      >
        <div class="drag-n-drop-area--header">
          <div class="cloud-icon">
            <BaseIcon class="cloud-icon__component" size="full" name="loud-storage-upload-2"></BaseIcon>
          </div>
        </div>

        <div class="drag-n-drop-area--errors">
          <slot name="dragNdropErrors" v-bind="this"></slot>
        </div>
        <div class="drag-n-drop-area--body">
          <div class="title">Перетащите файл или выберите на компьютере</div>
          <div class="description" v-text="description"></div>
        </div>
        <SButton variant="secondary" size="small" @click="onChooseFileClick"> Выбрать файл </SButton>
      </div>
    </slot>

    <div v-if="uploader_modal_dialog_visibility" class="uploader-modal-dialog">
      <FileViewer
        :files="files"
        :removable="!isPreviewMode"
        :file-index="fileIndex"
        :image-formats="imageFormats"
        @hide-dialog="onHideModalDialog"
        @remove-file="onRemoveIconClick"
        @file-index-changed="onFileIndexChange"
      ></FileViewer>
    </div>

    <input
      v-show="false"
      :id="id"
      ref="base-uploader-input"
      type="file"
      class="file-input__control"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      @change="onChange($event)"
    />
    <FilePlugSprite/>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import FileViewer from './FileViewer/FileViewer.vue'
import { SButton } from '@synergy/lms-ui-kit'
import FilePreview from './FilePreview.vue'
import FilePlugSprite from "./FilePlugSprite.vue";
import BaseIcon from "./BaseIcon.vue";

export default {
  name: 'BaseUploader',
  components: {
    Splide,
    SplideSlide,
    FileViewer,
    SButton,
    FilePreview,
    BaseIcon,
    FilePlugSprite
  },
  model: {
    prop: 'files',
    event: 'change',
  },
  props: {
    files: {
      type: Array,
      default: () => [],
      required: true,
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
      required: false,
    },
    name: {
      type: String,
      default: '',
      required: false,
    },
    accept: {
      type: String,
      default: '.jpeg,.jpg,.png,.pdf',
      required: false,
    },
    // не используется
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
    removable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      imageFormats: ['apng', 'gif', 'ico', 'cur', 'jpg', 'jpeg', 'pjpeg', 'pjp', 'png', 'svg', 'webp', 'bmp'],
      // plugIconFormats: ['doc', 'docx', 'txt', 'rtf', 'pdf', 'odt', 'html', 'pptx', 'ppt', 'odp', 'xls', 'xlsx'],
      // не используется
      // fileName: '',
      // choose_file_dialog_visibility: false,
      // split_index: 0,
      // formattedSize: '',

      fileIndex: 0,
      desktop_preview: true,
      left_arrow_visibility: true,
      right_arrow_visibility: true,
      uploader_modal_dialog_visibility: false,
      id: '',
      splideOptions: {
        type: 'slide',
        width: '100%',
        autoWidth: true,
        perMove: 1,
        pagination: false,
        arrows: false,
        drag: false,
        breakpoints: {
          744: {
            drag: true,
          },
        },
        rewind: true,
        gap: '8px',
      },
    }
  },
  computed: {
    // TODO: оставить этот код, если потребуется в зависимости от формата смотреть или скачивать файл
    // viewerFormats() {
    //   return [...this.imageFormats, 'pdf']
    // },
    // filesViewerFormats() {
    //   return this.files.filter((item) => this.viewerFormats.includes(this.getFileExtension(item.name)))
    // },
  },
  watch: {
    files: {
      async handler(nv) {
        this.$refs['base-uploader-input'] && (this.$refs['base-uploader-input'].files = new this.FileList(nv))
        this.$refs?.carousel?.splide?.refresh?.()
      },
      //   filesViewerFormats(value) {
      //     if (!value.length) {
      //       this.onHideModalDialog()
      //     }
      //   },
    },
  },
  methods: {
    getFileExtension(filename) {
      return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2)
    },
    FileList(files) {
      const dt = new DataTransfer()
      for (const file of files) {
        dt.items.add(file)
      }
      return dt.files
    },
    fetchFiles(files) {
      return new Promise((resolve, reject) => {
        const _files = []

        for (const file of files) {
          _files.push(
            fetch(files.link, { credentials: 'include' })
              .then((res) => res.blob())
              .then((blob) => new File([blob], file.name)),
          )
        }

        Promise.all(_files).then((files) => {
          resolve(files)
        })
      })
    },
    formatFileSize(size) {
      return size >= 1e9
        ? (size / 1e9).toFixed(1) + ' ГБ'
        : size < 1e9 && size >= 1e6
        ? (size / 1e6).toFixed(1) + ' МБ'
        : (size / 1000).toFixed() + ' КБ'
    },
    onChange(event) {
      const res = this.multiple
        ? [...this.files, ...this.$refs['base-uploader-input'].files]
        : [...this.$refs['base-uploader-input'].files]
      this.$emit('change', res)

      this.refreshAndRemount()
      this.setArrowsVisibility()
    },
    onFileIndexChange(index) {
      this.fileIndex = index
    },
    refreshAndRemount() {
      this.$refs?.carousel?.splide?.refresh?.()
      this.$refs?.carousel?.remount?.()
    },
    onChooseFileClick() {
      this.$refs['base-uploader-input'].click()
    },
    onDrop(event) {
      if (!this.multiple && event?.dataTransfer?.files?.length > 1) return
      // ничего не меняется
      // this.choose_file_dialog_visibility = false

      const res = [
        ...Array.from(event.dataTransfer.files).filter((item) =>
          this.accept.split(',').includes(`.${this.getFileExtension(item.name)}`),
        ),
      ]
      this.$emit('change', this.multiple ? [...this.files, ...res] : [res[0]])
    },
    onHideModalDialog() {
      this.uploader_modal_dialog_visibility = false
    },
    async onDownloadClick(file) {
      try {
        if (!file) return
        let _blob
        if (file.link)
          _blob = await fetch(file?.link, {
            method: 'get',
            referrerPolicy: 'no-referrer',
          })
        file.link
          ? (_blob = await fetch(file?.link, {
              method: 'get',
              referrerPolicy: 'no-referrer',
            }))
          : (_blob = file)

        const href = URL.createObjectURL(_blob)
        const base_uploader_anchor = document.createElement('a')
        base_uploader_anchor.setAttribute('target', '_blank')
        base_uploader_anchor.setAttribute('download', file.name)
        base_uploader_anchor.href = href
        base_uploader_anchor.click()
        URL.revokeObjectURL(href)
      } catch (error) {
        console.warn(error.message || error)
      }
    },
    refreshSpliderAfterMove(splide) {
      splide.refresh()
    },
    onRemoveIconClick(index) {
      const _files = [...this.files]
      _files.splice(index, 1)
      this.$emit('file-removed', index)
      this.onFilesChanged(_files)
    },
    onFilesChanged(files) {
      this.$emit('change', files)
      this.refreshAndRemount()
      if (!files.length) this.uploader_modal_dialog_visibility = false
    },
    onFileClick(file, index) {
      this.$emit('file-click', { file, index })
      this.fileIndex = index
      this.uploader_modal_dialog_visibility = true
    },
    onResize() {
      if (window.innerWidth < 744) {
        this.desktop_preview = true
      } else {
        this.desktop_preview = false
      }
    },
    setArrowsVisibility() {
      this.right_arrow_visibility = this.$refs?.carousel?.index + 7 < this.$refs?.carousel?.length || false
      this.left_arrow_visibility = this.$refs?.carousel?.index > 0 || false
    },
    onRightArrowClick() {
      this.$refs.carousel.go('>')
      this.$refs.carousel.splide.refresh()
      this.setArrowsVisibility()
    },
    onLeftArrowClick() {
      this.$refs.carousel.go('<')
      this.$refs.carousel.splide.refresh()
      this.setArrowsVisibility()
    },
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  created() {
    this.id = `base-uploader_${Date.now().toString()}`
  },
  updated() {
    this.setArrowsVisibility()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style lang="scss" scoped>
.invalid,
.failed {
  color: $color-text-accent;
}
.base-uploader {
  width: 100%;
  //width: 672px;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  .drag-n-drop-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px var(--stroke-cards) dashed;
    border-radius: rem(8px);
    padding: rem(16px) rem(32px) rem(32px);
    background-color: var(--color-bg-primary);
    font-size: rem(14px);
    &--header {
      margin-bottom: rem(4px);
      .cloud-icon {
        display: flex;
        margin-bottom: rem(8px);
        &__component {
          height: 100px;
          width: 100px;
        }
      }
      @media (max-width: 743px) {
        display: none;
      }
    }
    &--errors {
      @include text-s;
      color: var(--color-text-accent);
      margin-bottom: rem(8px);
    }
    &--body {
      margin-bottom: rem(16px);
      text-align: center;
      .title {
        @include text-s;
        color: var(--color-text-secondary);
        margin-bottom: rem(8px);
        @media (max-width: 743px) {
          @include text-xs;
        }
      }
      .description {
        @include text-xs;
        color: var(--color-text-secondary);
      }
    }
  }

  &-input {
    &__wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      cursor: pointer;

      &--icon {
        flex: 0 0 auto;
        margin-right: rem(12px);
      }
    }
  }

  .uploader-file-viewer {
    display: flex;
    position: relative;
    margin-bottom: 12px;
    width: 100%;
    overflow: hidden;

    .file {
      display: flex;
      align-items: center;
      margin-bottom: rem(8px);
      gap: rem(12px);
      &__description {
        &-name {
          color: var(--color-text-primary);
          @include text-m;
        }
        &-size {
          color: var(--color-text-secondary);
          @include text-s;
        }
      }
    }

    &__arrow {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      padding-bottom: 24px;

      &--left {
        width: 52px;
        margin-right: 12px;
        align-items: flex-start;
      }

      &--right {
        width: 52px;
        margin-left: 12px;
        align-items: flex-end;
      }

      .arrow {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
        border-radius: 100px;
        background-color: #f7f9fd;
        border: 1px solid #d3d8e3;
        cursor: pointer;

        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      }
    }

    &__files {
      width: 100%;
      position: relative;
      overflow: scroll;

      .splide__track .splide__list {
        .carousel-slide__btn {
          // display: none;
          &--add {
            background: var(--color-icon-primary);
            border-radius: 4px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      &::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none;
      scrollbar-width: none;

      &--file {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: rem(8px);

        .file-trash {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 24px;

          .trash-icon {
            display: none;
          }
        }

        .file-info {
          display: flex;
          align-items: center;
          flex: 1;
          width: calc(100% - #{rem(48px)} - #{rem(12px)});

          &__description {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            overflow: hidden;

            &--title {
              font-weight: 400;
              flex: 1;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            &--subtitle {
              flex: 1;
              color: #707c8c;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }

          &__properties {
            flex: 0 0 auto;
            display: flex;

            &--size {
              display: flex;
              justify-content: center;
              align-items: center;
              color: #707c8c;
            }
          }

          &__actions {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            gap: 12px;

            .base-uploader-download-btn,
            .base-uploader-delete-btn {
              cursor: pointer;
            }
          }

          @media (max-width: 375px) {
            flex-wrap: wrap;
            justify-content: space-between;

            &__description {
              flex: 1 0 100%;

              &--title {
                font-size: rem(14px);
              }

              &--subtitle {
                font-size: rem(12px);
              }
            }

            &__properties {
              &--size {
                font-size: rem(12px);
              }
            }
          }

          @media (min-width: 376px) {
            &__description {
              &--title {
                font-size: rem(16px);
              }

              &--subtitle {
                font-size: rem(14px);
              }
            }

            &__properties {
              padding: 0 rem(12px);
              &--size {
                font-size: rem(16px);
              }
            }
          }
        }

        &:hover {
          .file-trash {
            cursor: pointer;
            .trash-icon {
              display: block;
            }
          }

          .file-view {
            cursor: default;

            &--hover {
              display: flex;
              position: absolute;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;

              .eye-icon {
                cursor: pointer;
              }
            }
          }

          @media (max-width: 743px) {
            .file-view {
              cursor: pointer;
              &--hover {
                display: none;
              }
            }
          }
        }

        @media (max-width: 743px) {
          .file-trash {
            display: none;
          }
        }
      }
    }

    @media (max-width: 743px) {
      &__arrow {
        display: none;
      }

      &__files {
        display: flex;

        // .splide__track .splide__list {
        //   .carousel-slide__btn {
        //     display: list-item;

        //     &--add {
        //       background: #fee1e1;
        //       border-radius: 4px;
        //       height: calc(100% - 8px);
        //       display: flex;
        //       justify-content: center;
        //       align-items: center;
        //     }
        //   }
        // }
      }
    }

    // @media (min-width: 376px) {
    //   &__arrow {
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     height: 100%;

    //     &--left {
    //       position: absolute;
    //       margin-left: 0;
    //       top: 0;
    //       left: 0;
    //       z-index: 20;
    //     }

    //     &--right {
    //       width: 52px;
    //       margin-left: 12px;
    //       align-items: flex-end;
    //     }

    //     .arrow {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       width: 44px;
    //       height: 44px;
    //       border-radius: 100px;
    //       background-color: #f7f9fd;
    //       border: 1px solid #d3d8e3;
    //       cursor: pointer;

    //       user-select: none;
    //       -moz-user-select: none;
    //       -webkit-user-select: none;
    //       -ms-user-select: none;
    //     }

    //     .arrow-left {
    //       position: fixed;
    //       left: 0;
    //       top: 0;
    //     }
    //   }

    //   &__files {
    //     max-width: 100%;
    //     max-height: rem(80px);

    //     &--file {
    //       max-width: 100%;
    //       height: 100%;
    //       .file-view {
    //         margin-right: 12px;
    //       }
    //     }
    //   }
    // }
  }

  .uploader-modal-dialog {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100% - 3.5rem);
    left: 0px;
    bottom: 0px;
    z-index: 201;
  }

  @media (max-width: 743px) {
    width: 100%;
  }
}
.base-uploader .file-input {
  position: relative;
  padding-bottom: 1rem;

  &__anchor {
    display: none;
  }

  &__wrap {
    display: inline-block;
    position: relative;
  }

  &__label {
    color: $color-text-primary;

    margin-bottom: 0;
  }
  &__filename {
    font-size: rem(16);
    line-height: rem(22);
    font-weight: 400;
    color: $color-text-secondary;
    padding-left: rem(32);
  }

  &__btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: $color-text-accent;
    }
  }
  &__btn-text {
    font-size: rem(16);
    line-height: rem(22);
    font-weight: 400;
  }

  &__btn-icon {
    font-size: 0;
    margin-right: rem(8);
  }
  &__error {
    color: $color-text-error;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &__btn-delete {
    @include button-reset;
    margin-left: rem(16);
  }
  &__file-wrap {
    display: flex;
    align-items: center;
  }
}
.label {
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 18px;
}
</style>
