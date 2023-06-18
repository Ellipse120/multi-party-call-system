<script setup>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";

const props = defineProps({
  modelValue: {
    type: String,
    default: "<div></div>",
  },
});

const emit = defineEmits(["update:modelValue", "addImage"]);

const editor = ref(null);

defineExpose({
  editor,
});

const addImage = () => {
  emit("addImage");
};

watch(
  () => props.modelValue,
  (v) => {
    const isSame = editor.value.getHTML() === v;
    if (isSame) {
      return;
    }
    editor.value.commands.setContent(v, false);
  }
);

onMounted(() => {
  editor.value = new Editor({
    content: props.modelValue,
    extensions: [StarterKit, Image],
    editorProps: {
      attributes: {
        class:
          "border m-4  max-w-none  prose  prose prose-coolgray dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none",
      },
    },
    injectCSS: false,
    onUpdate: () => {
      // HTML
      emit("update:modelValue", editor.value.getHTML());

      // JSON
      // emit('update:modelValue', editor.value.getJSON())
    },
  });
});

onBeforeUnmount(() => {
  editor.value.destroy();
});
</script>

<template>
  <div>
    <div v-if="editor">
      <v-toolbar-items class="flex flex-wrap bg-gray-200">
        <v-btn
          @click="editor.chain().focus().toggleBold().run()"
          icon="mdi-format-bold"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
        ></v-btn>
        <v-btn
          @click="editor.chain().focus().toggleItalic().run()"
          icon="mdi-format-italic"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
        >
        </v-btn>
        <v-btn
          @click="editor.chain().focus().toggleStrike().run()"
          icon="mdi-format-strikethrough"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }"
        >
        </v-btn>
        <v-btn
          icon="mdi-format-clear"
          @click="editor.chain().focus().unsetAllMarks().run()"
        >
        </v-btn>
        <v-btn
          @click="editor.chain().focus().setParagraph().run()"
          icon="mdi-format-paragraph"
          :class="{ 'is-active': editor.isActive('paragraph') }"
        >
        </v-btn>
        <v-btn
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          icon="mdi-format-header-1"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        >
        </v-btn>
        <v-btn
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          icon="mdi-format-header-2"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        >
        </v-btn>
        <v-btn
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          icon="mdi-format-header-3"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
        >
        </v-btn>
        <v-btn
          @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
          icon="mdi-format-header-4"
          :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
        >
        </v-btn>
        <v-btn
          @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
          icon="mdi-format-header-5"
          :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
        >
        </v-btn>
        <v-btn
          @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
          icon="mdi-format-header-6"
          :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
        >
        </v-btn>
        <v-btn
          @click="editor.chain().focus().toggleBulletList().run()"
          icon="mdi-format-list-bulleted"
          :class="{ 'is-active': editor.isActive('bulletList') }"
        >
        </v-btn>
        <v-btn
          @click="editor.chain().focus().toggleOrderedList().run()"
          icon="mdi-format-list-numbered"
          :class="{ 'is-active': editor.isActive('orderedList') }"
        >
        </v-btn>

        <v-tooltip location="top" text="代码块">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              :class="{ 'is-active': editor.isActive('codeBlock') }"
              icon="mdi-code-not-equal-variant"
              @click="editor.chain().focus().toggleCodeBlock().run()"
            >
            </v-btn>
          </template>
        </v-tooltip>

        <v-tooltip location="top" text="引用">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              :class="{ 'is-active': editor.isActive('blockquote') }"
              icon="mdi-card-text-outline"
              @click="editor.chain().focus().toggleBlockquote().run()"
            >
            </v-btn>
          </template>
        </v-tooltip>

        <v-tooltip location="top" text="分隔符">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-view-day-outline"
              @click="editor.chain().focus().setHorizontalRule().run()"
            >
            </v-btn>
          </template>
        </v-tooltip>

        <v-tooltip location="top" text="换页">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-format-page-break"
              @click="editor.chain().focus().setHardBreak().run()"
            >
            </v-btn>
          </template>
        </v-tooltip>

        <v-tooltip location="top" text="上传图片">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-image" @click="addImage"></v-btn>
          </template>
        </v-tooltip>

        <v-tooltip location="top" text="撤销">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-undo"
              :disabled="!editor.can().chain().focus().undo().run()"
              @click="editor.chain().focus().undo().run()"
            >
            </v-btn>
          </template>
        </v-tooltip>

        <v-tooltip location="top" text="重做">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-redo"
              :disabled="!editor.can().chain().focus().redo().run()"
              @click="editor.chain().focus().redo().run()"
            >
            </v-btn>
          </template>
        </v-tooltip>
      </v-toolbar-items>
    </div>
    <EditorContent :editor="editor"></EditorContent>
  </div>
</template>

<style>
.is-active {
  @apply text-white bg-black;
}
</style>
