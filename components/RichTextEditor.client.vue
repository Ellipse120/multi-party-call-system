<script setup>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";

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
    extensions: [StarterKit, Image, TextStyle, Color],
    editorProps: {
      attributes: {
        class:
          "border m-4  max-w-none  prose  prose prose-coolgray dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none",
      },
    },
    injectCSS: true,
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
      <q-toolbar class="flex flex-wrap bg-gray-200">
        <input
          type="color"
          @input="editor.chain().focus().setColor($event.target.value).run()"
          :value="editor.getAttributes('textStyle').color"
        />
        <q-btn
          @click="editor.chain().focus().toggleBold().run()"
          icon="mdi-format-bold"
          :disabled="!editor.can().chain().focus().toggleBold().run()"
          :class="{ 'is-active': editor.isActive('bold') }"
        ></q-btn>
        <q-btn
          @click="editor.chain().focus().toggleItalic().run()"
          icon="mdi-format-italic"
          :disabled="!editor.can().chain().focus().toggleItalic().run()"
          :class="{ 'is-active': editor.isActive('italic') }"
        >
        </q-btn>
        <q-btn
          @click="editor.chain().focus().toggleStrike().run()"
          icon="mdi-format-strikethrough"
          :disabled="!editor.can().chain().focus().toggleStrike().run()"
          :class="{ 'is-active': editor.isActive('strike') }"
        >
        </q-btn>
        <q-btn
          icon="mdi-format-clear"
          @click="editor.chain().focus().unsetAllMarks().run()"
        >
        </q-btn>
        <q-btn
          @click="editor.chain().focus().setParagraph().run()"
          icon="mdi-format-paragraph"
          :class="{ 'is-active': editor.isActive('paragraph') }"
        >
        </q-btn>
        <q-btn
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          icon="mdi-format-header-1"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        >
        </q-btn>
        <q-btn
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          icon="mdi-format-header-2"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        >
        </q-btn>
        <q-btn
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          icon="mdi-format-header-3"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
        >
        </q-btn>
        <q-btn
          @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
          icon="mdi-format-header-4"
          :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
        >
        </q-btn>
        <q-btn
          @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
          icon="mdi-format-header-5"
          :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
        >
        </q-btn>
        <q-btn
          @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
          icon="mdi-format-header-6"
          :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
        >
        </q-btn>
        <q-btn
          @click="editor.chain().focus().toggleBulletList().run()"
          icon="mdi-format-list-bulleted"
          :class="{ 'is-active': editor.isActive('bulletList') }"
        >
        </q-btn>
        <q-btn
          @click="editor.chain().focus().toggleOrderedList().run()"
          icon="mdi-format-list-numbered"
          :class="{ 'is-active': editor.isActive('orderedList') }"
        >
        </q-btn>

        <q-btn
          v-bind="props"
          :class="{ 'is-active': editor.isActive('codeBlock') }"
          icon="mdi-code-not-equal-variant"
          @click="editor.chain().focus().toggleCodeBlock().run()"
        >
          <q-tooltip> 代码块 </q-tooltip>
        </q-btn>

        <q-btn
          v-bind="props"
          :class="{ 'is-active': editor.isActive('blockquote') }"
          icon="mdi-card-text-outline"
          @click="editor.chain().focus().toggleBlockquote().run()"
        >
          <q-tooltip>引用</q-tooltip>
        </q-btn>

        <q-btn
          v-bind="props"
          icon="mdi-view-day-outline"
          @click="editor.chain().focus().setHorizontalRule().run()"
        >
          <q-tooltip>分隔符 </q-tooltip>
        </q-btn>

        <q-btn
          v-bind="props"
          icon="mdi-format-page-break"
          @click="editor.chain().focus().setHardBreak().run()"
        >
          <q-tooltip>换页</q-tooltip>
        </q-btn>

        <q-btn v-bind="props" icon="mdi-image" @click="addImage">
          <q-tooltip>上传图片</q-tooltip>
        </q-btn>

        <q-btn
          v-bind="props"
          icon="mdi-undo"
          :disabled="!editor.can().chain().focus().undo().run()"
          @click="editor.chain().focus().undo().run()"
        >
          <q-tooltip>撤销</q-tooltip>
        </q-btn>

        <q-btn
          v-bind="props"
          icon="mdi-redo"
          :disabled="!editor.can().chain().focus().redo().run()"
          @click="editor.chain().focus().redo().run()"
        >
          <q-tooltip>重做</q-tooltip>
        </q-btn>
      </q-toolbar>
    </div>
    <EditorContent :editor="editor"></EditorContent>
  </div>
</template>

<style>
.is-active {
  @apply text-white bg-black;
}
</style>
