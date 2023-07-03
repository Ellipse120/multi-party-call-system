<script setup>
import {formatDate} from "@vueuse/shared";

definePageMeta({
  name: "会议",
  middleware: ["auth"]
});

const { token } = useAuth();
const time1 = ref('13:21:45')
const time2 = ref('15:21:45')
const text = ref('')
const tab = ref('userList')
const tab1 = ref('trainInfo')
const phoneTab = ref('dial')
const pagination = ref({
    rowsPerPage: 0
})
const mainWidth = ref('w-1800px')
const contentWidth = ref('w-1500px')
const showVideoStatus = ref(true)

const contentStyle =ref({
    backgroundColor: 'rgba(0,0,0,0.02)',
    color: '#555'
})

const contentActiveStyle = ref({
        backgroundColor: '#eee',
        color: 'black'
    })

const thumbStyle = ref({
    right: '2px',
    borderRadius: '5px',
    backgroundColor: '#ccc',
    width: '5px',
    opacity: '0.75'
})

const columns = ref([
    {name: 'time', required: true, label: '故障时间', align: 'left', field: 'time'},
    {name: 'carriage', required: true, label: '车厢', align: 'left', field: 'carriage'},
    {name: 'code', required: true, label: '代码', align: 'left', field: 'code'},
    {name: 'describe', required: true, label: '故障描述', align: 'left', field: 'describe'},
    {name: 'status', required: true, label: '状态', align: 'left', field: 'status'},
])

const keyArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#']

const { now, pause, resume } = useNow({ controls: true })

const baseInfo = ref([
    {
        label: '担当车次',
        value: 'G106 上海虹桥-北京南'
    },
    {
        label: '车组号',
        value: 'CRH380BL-5001'
    },
    {
        label: '配属动车所',
        value: '杭州所'
    },
    {
        label: '当日停放点',
        value: '上海虹桥所'
    },
    {
        label: '当前升弓车厢',
        value: 'CRH380BL-5001 2车'
    },
    {
        label: '主控端位置',
        value: 'CRH380BL-5001 1车'
    },
    {
        label: '当前运行速度',
        value: '298kn/h'
    },
    {
        label: '环境温度及天气',
        value: '25 晴'
    },
])

const rows = ref([
    {
        time: '2023-08-08',
        carriage: '08',
        code: '9078',
        describe: '牵引电机故障',
        status: '发生'
    },
    {
        time: '2023-08-08',
        carriage: '08',
        code: '9012',
        describe: '齿轮箱故障',
        status: '恢复'
    }
])

const phonePlaneShow = ref(false)

const phonePlanelCss = ref('h-0')

const phoneVal = ref('')

const handleClickKey = (val) => {
    phoneVal.value += val
}

const handleDeleteKey = (val) => {
    phoneVal.value = phoneVal.value.slice(0, -1)
}

const clickPhoneFn = (val) => {
    if(val) {
        phoneVal.value = val
    }
    phonePlanelCss.value = 'h-400px'
}

const closePhoneFn = () => {
    phonePlanelCss.value = 'h-0'
}

const closeVideoFn = () => {
    mainWidth.value = 'w-1500px'
    contentWidth.value = 'w-1200px'
    showVideoStatus.value = false
}
const openVideoFn = () => {
    mainWidth.value = 'w-1800px'
    contentWidth.value = 'w-1500px'
    showVideoStatus.value = true
}

const currentYear = ref(useDateFormat(new Date(), "YYYY"));
</script>

<template>
    <q-scroll-area
            :thumb-style="thumbStyle"
            :content-style="contentStyle"
            :content-active-style="contentActiveStyle"
            class="!w-full meeting-full-height relative"
    >
        <div class="flex flex-col bg-white content-height m-auto" :class="mainWidth">
            <div class="h-full overflow-auto" :class="contentWidth">
                <div class="flex h-60px items-center px-20px border-b-1 relative">
                    <p class="mr-10px">G106</p>
                    <p class="mr-20px">上海虹桥-北京南</p>
                    <p class="mr-10px">CRH380BL-5001</p>
                    <div class="mr-30px flex items-center">
                        <span>汇报时间</span>
                        <q-input class="m-10px" outlined v-model="time1" dense />
                    </div>
                    <div class="flex items-center">
                        <span>停车时间</span>
                        <q-input class="m-10px" outlined v-model="time2" dense />
                    </div>
                    <div>{{formatDate(now, 'HH:mm:ss')}}</div>
                    <q-btn class="absolute right-0" color="primary" size="md" @click="openVideoFn" v-if="!showVideoStatus">开启视频</q-btn>
                </div>
                <div class="flex content-main-height">
                    <div class="flex-1 bg-white h-full">
                        <q-card class="m-x-10px h-full">
                            <q-tabs
                                    v-model="tab1"
                                    dense
                                    class="text-black"
                                    active-color="primary"
                                    indicator-color="primary"
                                    align="left"
                                    inline-label
                            >
                                <q-tab icon="mdi-information" name="trainInfo" label="车组信息" />
                                <q-tab icon="mdi-chat-processing-outline" name="chatInfo" label="聊天信息" />
                            </q-tabs>

                            <q-separator />
                            <q-tab-panels v-model="tab1" animated>
                                <q-tab-panel name="trainInfo">
                                    <div class="flex flex-col h-full">
                                        <div class="relative">
                                            <h3 class="leading-36px">基本信息</h3>
                                            <div class="grid grid-cols-4 leading-30px border-1px border-b-0 border-r-0">
                                                <div v-for="i in baseInfo" :key="i.label" class="text-12px flex flex-nowrap border-b-1 border-r-1">
                                                    <p class="w-95px text-center bg-gray-200">{{i.label}}</p>
                                                    <span class="px-10px">{{i.value}}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="relative">
                                            <h3 class="leading-36px">检修信息</h3>
                                            <div class="grid grid-cols-4 leading-30px border-1px border-b-0 border-r-0">
                                                <div v-for="i in baseInfo" :key="i.label" class="text-12px flex flex-nowrap border-b-1 border-r-1">
                                                    <p class="w-95px text-center bg-gray-200">{{i.label}}</p>
                                                    <span class="px-10px">{{i.value}}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-1">
                                            <h3 class="leading-36px">当前故障</h3>
                                            <q-table
                                                    :rows="rows"
                                                    dense
                                                    class="!h-160px"
                                                    :hide-pagination="true"
                                                    :columns="columns"
                                                    row-key="name"
                                                    hide-bottom
                                                    :pagination="pagination"
                                                    :rows-per-page-options="[0]"
                                            />
                                        </div>
                                        <div class="flex-1">
                                            <h3 class="leading-36px">历史故障</h3>
                                            <q-table
                                                    :rows="rows"
                                                    dense
                                                    class="!h-180px"
                                                    :hide-pagination="true"
                                                    :columns="columns"
                                                    row-key="name"
                                                    hide-bottom
                                                    :pagination="pagination"
                                                    :rows-per-page-options="[0]"
                                            />
                                        </div>
                                    </div>
                                </q-tab-panel>
                                <q-tab-panel name="chatInfo">
                                    <div class="flex flex-col h-full">
                                        <div class="q-pa-md flex-1 row justify-center">
                                            <div class="w-100% max-w-500px">
                                                <q-chat-message
                                                        name="me"
                                                        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                                                        :text="['hey, how are you?']"
                                                        stamp="7 minutes ago"
                                                        sent
                                                        bg-color="amber-7"
                                                />
                                                <q-chat-message
                                                        name="Jane"
                                                        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
                                                        :text="['doing fine, how r you?']"
                                                        stamp="4 minutes ago"
                                                        text-color="white"
                                                        bg-color="primary"
                                                />
                                                <q-chat-message
                                                        name="me"
                                                        avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                                                        :text="['hahahaha']"
                                                        stamp="1 minutes ago"
                                                        sent
                                                        bg-color="amber-7"
                                                />
                                            </div>
                                        </div>
                                        <div class="flex-1">222</div>
                                    </div>
                                </q-tab-panel>
                            </q-tab-panels>
                        </q-card>
                    </div>
                    <div v-show="showVideoStatus" class="w-300px flex items-center h-full relative">
                        <q-icon @click="closeVideoFn" class="text-32px absolute top-30px right-10px z-9 cursor-pointer" name="mdi-power" />
                        <video style="object-fit:fill;" poster="../assets/imgs/video.png" class="w-full h-95% m-auto" src=""></video>
                    </div>
                </div>
            </div>
            <div class="w-300px flex flex-col bg-gray-50 h-full overflow-auto">
                <div class="h-60px border-b-1px border-l-1px relative">
                    <q-tabs
                            v-model="tab"
                            active-color="primary"
                            indicator-color="primary"
                            align="justify"
                            narrow-indicator
                            class="absolute bottom-0 w-full h-full"
                    >
                        <q-tab name="userList">
                            会议中(4)
                        </q-tab>
                        <q-tab name="alarms" >
                            专家库(94)
                        </q-tab>
                    </q-tabs>
                </div>

                <q-tab-panels class="bg-gray-100 border-l-1 flex-1" v-model="tab" animated>
                    <q-tab-panel name="userList" class="p-y-0 pt-10px p-x-5px">
                        <div class="flex flex-col h-full">
                            <div class="h-40px">
                                <q-input outlined v-model="text" dense  placeholder="搜索成员">
                                    <template v-slot:append>
                                        <q-icon name="mdi-magnify" />
                                    </template>
                                </q-input>
                            </div>
                            <q-scroll-area class="flex-1">
                                <MeetingUserList />
                                <p class="text-center leading-32px">音频隔离</p>
                                <MeetingUserList :showVideoIcon="false" />
                            </q-scroll-area>
                        </div>
                    </q-tab-panel>
                    <q-tab-panel name="alarms" class="p-y-0 p-x-5px flex flex-col relative">
                        <MeetingExpertList @click-phone="clickPhoneFn" :showPhoneIcon="true" />
                        <div @click="clickPhoneFn()" class="border-1px border-blue cursor-pointer bg-white p-3px absolute right-10px bottom-40px text-center">
                            <q-icon class="text-24px" name="mdi-phone-dial"></q-icon>
                            <p class="text-12px">确认拨号</p>
                        </div>
                    </q-tab-panel>
                </q-tab-panels>
            </div>
        </div>
        <q-slide-transition>
            <div class="w-300px shadow-md bg-white absolute right-100px bottom-0 transition-all ease-linear overflow-hidden" :class="phonePlanelCss">
                <div class="h-36px bg-gray-100 relative">
                    <p class="leading-36px px-10px">拨号</p>
                    <q-icon @click="closePhoneFn" name="mdi-close-circle" class="absolute right-10px top-6px text-24px cursor-pointer" />
                </div>
                <q-tabs
                        dense
                        v-model="phoneTab"
                        active-color="primary"
                        indicator-color="primary"
                        narrow-indicator
                        class="bg-white"
                >
                    <q-tab name="dial">键盘拨号</q-tab>
                    <q-tab name="history" >呼叫历史</q-tab>
                </q-tabs>
                <div v-if="phoneTab === 'dial'">
                    <div class="h-60px bg-gray-100 pt-10px number-wrap">
                        <p class="h-40px w-260px m-auto bg-white text-center leading-40px overflow-hidden whitespace-nowrap relative">
                            <span v-if="phoneVal">{{phoneVal}}</span>
                            <span v-else class="text-12px text-gray-400">输入电话号码</span>
                            <q-icon @click="handleDeleteKey" v-if="phoneVal" class="cursor-pointer text-16px absolute right-10px top-12px text-gray-400 delete-key" name="mdi-backspace-outline"></q-icon>
                        </p>
                    </div>
                    <div class="grid grid-cols-3 grid-rows-4 text-center border-1px border-r-0 border-b-0">
                        <div @click="handleClickKey(i)" class="border-b-1 border-r-1 text-20px cursor-pointer font-bold h-50px leading-50px" v-for="i in keyArr" :key="i">{{i}}</div>
                    </div>
                    <q-btn color="primary" class="m-auto display-block mt-10px w-80%">呼叫</q-btn>
                </div>
                <div v-else>
                    22222222222222222222222
                </div>

            </div>
        </q-slide-transition>
    </q-scroll-area>

</template>

<style scoped>
.meeting-full-height{
    height: calc(100vh - 100px) !important;
}
.content-height{
    height: calc(100vh - 110px) !important;
}
.content-main-height{
    height: calc(100% - 60px) !important;
}
.number-wrap .delete-key{
    display: none;
}
.number-wrap:hover .delete-key{
    display: block;
}
</style>