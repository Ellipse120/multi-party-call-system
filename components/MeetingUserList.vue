<script setup>
const props = defineProps({
    showVideoIcon:  {
        type: Boolean,
        default: true,
        required: false
    }
})
</script>

<template>
  <div>
      <div>
          <q-list separator>
              <q-item clickable v-ripple class="meeting-expert-item !h-72px">
                  <q-item-section>
                      <div class="flex">
                          <q-avatar color="primary" text-color="white" class="text-48px mr-20px">路</q-avatar>
                          <div>
                              <p>路赛</p>
                              <span class="text-12px text-gray-500">ID:63872826</span>
                          </div>
                      </div>
                  </q-item-section>
                  <q-item-section side class="!w-80px text-center operate flex !px-0 leading-48px">
                      <q-icon class="mr-5px" size="md" name="mdi-microphone-message" />
                      <q-icon v-if="showVideoIcon" size="md" name="mdi-video" />
                  </q-item-section>
                  <q-item-section side class="!w-60px expert-setting text-center !px-0">
                      <q-btn class="mb-5px" size="sm" color="primary" no-caps>改名</q-btn>
                      <q-btn size="sm" color="red" no-caps>删除</q-btn>
                  </q-item-section>
              </q-item>
          </q-list>
      </div>
  </div>
</template>

<style>
.meeting-expert-item .operate{
    display: block;
}
.meeting-expert-item .expert-setting{
    display: none;
}
</style>
