<script setup>
definePageMeta({
  name: '首页',
  layout: 'home',
  middleware: ['auth'],
});

const { token } = useAuth();
const userInfo = useState('user-info');

const currentYear = ref(useDateFormat(new Date(), 'YYYY'));
const { data } = useRequest('/api/mock');
const editor = ref('some text');
const editorRef = ref(null);
const tokenRef = ref(null);
const highlight = ref('#000000');
const foreColor = ref('#000000');

const color = (cmd, name) => {
  const edit = editorRef.value;
  tokenRef.value.hide();
  edit.caret.restore();
  edit.runCmd(cmd, name);
  edit.focus();
};

const toggleRandomId = () => {
  userInfo.value.id = Math.ceil(Math.random() * 10000000);
};

const generateLuckyNums = () => {
  const array = new Uint32Array(10);
  self.crypto.getRandomValues(array);

  return array;
};

const selected = ref([]);
const ticked = ref(['Good recipe2']);
const expanded = ref([]);
const simple = [
  {
    label: 'Satisfied customers',
    children: [
      {
        label: 'Good food',
        children: [{ label: 'Quality ingredients' }, { label: 'Good recipe' }],
      },
      {
        label: 'Good service (disabled node)',
        children: [
          { label: 'Prompt attention' },
          { label: 'Professional waiter' },
        ],
      },
      {
        label: 'Pleasant surroundings',
        children: [
          { label: 'Happy atmosphere' },
          { label: 'Good table presentation' },
          { label: 'Pleasing decor' },
        ],
      },
    ],
  },
  {
    label: 'Satisfied customers2',
    children: [
      {
        label: 'Good food2',
        children: [
          { label: 'Quality ingredients2' },
          { label: 'Good recipe2' },
        ],
      },
      {
        label: 'Good service (disabled node)2',
        children: [
          { label: 'Prompt attention2' },
          { label: 'Professional waiter2' },
        ],
      },
      {
        label: 'Pleasant surroundings2',
        children: [
          { label: 'Happy atmosphere2' },
          { label: 'Good table presentation2' },
          { label: 'Pleasing decor2' },
        ],
      },
    ],
  },
];

const handleRemove = (item) => {
  const index = ticked.value.findIndex((t) => t === item);
  ticked.value?.splice(index, 1);
};
const chipSelected = ref();

const model = ref();
const title = ref();
const options = ref([
  { key: 1, value: '选项1' },
  { key: 2, value: '选项2' },
]);
</script>

<template>
  <div class="p-4">
    index , {{ currentYear }}
    <div>{{ token }} = {{ chipSelected }}</div>

    <div class="bg-pink-400 text-white p-4 my-2">userInfo: {{ userInfo }}</div>
    <q-btn color="primary" @click="navigateTo('/meeting')">Meeting</q-btn>

    <q-btn color="red" class="mx-4" @click="toggleRandomId()"
      >Random UserInfo Id</q-btn
    >

    <div class="my-4">
      <q-list bordered separator>
        <q-item
          clickable
          v-ripple
          v-for="item in generateLuckyNums()"
          :key="item"
        >
          <q-item-section>{{ item }}</q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="text-center text-white text-3xl bg-indigo-500 rounded my-4 p-8">
      {{ data }}
    </div>

    <div>
      {{ model }} | {{ title }}
      <QSelectorWrapper
        v-model="model"
        v-model:title="title"
        class="mb-6 w-100"
        :options="options"
      />
    </div>

    <div>
      selected: {{ selected }} ticked: {{ ticked }} expanded: {{ expanded }}
    </div>

    <q-field label="TreeSelect" stack-label>
      <template v-slot:control>
        <div class="text-red-500 flex items-center gap-2" tabindex="0">
          <q-btn icon="mdi-tree" class="cursor-pointer">
            <q-popup-proxy fit anchor="bottom left" color="red">
              <q-tree
                class=""
                :nodes="simple"
                node-key="label"
                tick-strategy="leaf"
                v-model:selected="selected"
                v-model:ticked="ticked"
                v-model:expanded="expanded"
              />
            </q-popup-proxy>
          </q-btn>
          <div>
            <q-chip
              v-for="t in ticked"
              removable
              color="primary"
              text-color="white"
              @remove="handleRemove(t)"
            >
              {{ t }}
            </q-chip>
          </div>
        </div>
      </template>
    </q-field>

    <div>
      <q-editor
        v-model="editor"
        ref="editorRef"
        :toolbar="[
          ['bold', 'italic', 'strike', 'underline'],
          ['token', 'upload'],
          ['removeFormat'],
        ]"
      >
        <template v-slot:upload>
          <q-btn
            icon="mdi-image"
            flat
            size="xs"
            padding="xs"
            class="cursor-pointer"
          >
            <q-popup-proxy fit anchor="bottom left">
              <q-uploader />
            </q-popup-proxy>
          </q-btn>
        </template>

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
                      '#00ff00aa',
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
                      '#00ff00',
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
  </div>
</template>
