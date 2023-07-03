<script setup>
const text = ref('')

const props = defineProps({
    showPhoneIcon:  {
        type: Boolean,
        default: false,
        required: false
    }
})

const emit = defineEmits(['click-phone'])		// 接收传递过来的方法
const handlePhone = () => {
    emit('click-phone', '13818840311')	// emit触发自定义事件并传递参数
}

</script>

<template>
    <div :class="showPhoneIcon ? 'h-60px' : 'h-100px'">
        <p v-if="!showPhoneIcon" class="leading-40px text-blue-500 pl-20px border-b-1 border-b-blue">专家库</p>
        <q-input class="m-y-10px" outlined v-model="text" dense  placeholder="搜索专家">
            <template v-slot:append>
                <q-icon name="mdi-magnify" />
            </template>
        </q-input>
    </div>
    <q-scroll-area class="flex-1">
        <q-list bordered class="rounded-borders">
            <q-expansion-item
                    switch-toggle-side
                    expand-separator
                    default-opened
            >
                <template v-slot:header>
                    <q-item-section>
                        本段
                    </q-item-section>

                    <q-item-section side>
                        49/99
                    </q-item-section>
                </template>
                <q-list bordered separator>
                    <q-item clickable v-ripple class="expert-item !pr-5px">
                        <q-item-section>
                            <div class="flex">
                                <q-avatar color="primary" text-color="white" class="text-48px mr-20px">路</q-avatar>
                                <div>
                                    <p>路赛</p>
                                    <span class="text-12px text-gray-500">ID:63872826</span>
                                </div>
                            </div>
                        </q-item-section>
                        <q-item-section side class="expert-setting text-center !px-0 leading-48px" :class="showPhoneIcon ? '!w-80px' : '!w-40px'">
                            <q-icon @click="handlePhone()" v-if="showPhoneIcon" class="mr-6px" size="md" name="mdi-phone" />
                            <q-icon size="md" name="mdi-cog-outline" />
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-expansion-item>
        </q-list>
    </q-scroll-area>
</template>

<style scoped>
.expert-item .expert-setting{
    display: none;
}

.expert-item:hover .expert-setting{
    display: block;
}
</style>
