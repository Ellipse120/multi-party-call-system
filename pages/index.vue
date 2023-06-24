<script setup>
definePageMeta({
  name: "首页",
  layout: "home",
  middleware: ["auth"],
});

const { token } = useAuth();

const currentYear = ref(useDateFormat(new Date(), "YYYY"));

const { data } = useRequest("/api/mock");

const editor = ref("some text");
const editorRef = ref(null);
const tokenRef = ref(null);
const highlight = ref("#000000");
const foreColor = ref("#000000");

const color = (cmd, name) => {
  const edit = editorRef.value;
  tokenRef.value.hide();
  edit.caret.restore();
  edit.runCmd(cmd, name);
  edit.focus();
};
</script>

<template>
  <div>
    index , {{ currentYear }}
    <div>{{ token }}</div>

    <q-btn color="primary" @click="navigateTo('/meeting')">Meeting</q-btn>

    <div class="text-center text-white text-3xl bg-indigo-500 rounded my-4 p-8">
      {{ data }}
    </div>

    <RichTextEditor />

    <q-editor
      v-model="editor"
      ref="editorRef"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['token'],
        ['removeFormat'],
      ]"
    >
      <template v-slot:token>
        <q-btn-dropdown
          dense
          no-caps
          ref="tokenRef"
          no-wrap
          unelevated
          color="white"
          text-color="primary"
          label="Text Color"
          size="sm"
        >
          <q-list dense>
            <q-item
              tag="label"
              clickable
              @click="color('backColor', highlight)"
            >
              <q-item-section side>
                <q-icon name="mdi-format-color-highlight" />
              </q-item-section>
              <q-item-section>
                <q-color
                  v-model="highlight"
                  default-view="palette"
                  no-header
                  no-footer
                  :palette="[
                    '#ffccccaa',
                    '#ffe6ccaa',
                    '#ffffccaa',
                    '#ccffccaa',
                    '#ccffe6aa',
                    '#ccffffaa',
                    '#cce6ffaa',
                    '#ccccffaa',
                    '#e6ccffaa',
                    '#ffccffaa',
                    '#ff0000aa',
                    '#ff8000aa',
                    '#ffff00aa',
                    '##00ff00aa',
                    '#00ff80aa',
                    '#00ffffaa',
                    '#0080ffaa',
                    '#0000ffaa',
                    '#8000ffaa',
                    '#ff00ffaa',
                  ]"
                  class="my-picker"
                />
              </q-item-section>
            </q-item>
            <q-item
              tag="label"
              clickable
              @click="color('foreColor', foreColor)"
            >
              <q-item-section side>
                <q-icon name="mdi-format-paint" />
              </q-item-section>
              <q-item-section>
                <q-color
                  v-model="foreColor"
                  no-header
                  no-footer
                  default-view="palette"
                  :palette="[
                    '#ff0000',
                    '#ff8000',
                    '#ffff00',
                    '##00ff00',
                    '#00ff80',
                    '#00ffff',
                    '#0080ff',
                    '#0000ff',
                    '#8000ff',
                    '#ff00ff',
                  ]"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </template>
    </q-editor>
  </div>
</template>
