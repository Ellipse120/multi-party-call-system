<script setup>
definePageMeta({
  name: "首页",
  layout: "home",
  middleware: ["auth"]
});

import logoUrl from "@/assets/imgs/bg.jpg";

const [drawerExpert, toggleDrawerExpert] = useToggle();
const [drawerHistoricalCalls, toggleDrawerHistoricalCalls] = useToggle();
const [dialogShowStatus, toggleDialog] = useToggle();
const expertList = ref([])
const { token } = useAuth();

const currentYear = ref(useDateFormat(new Date(), "YYYY"));

const { data } = useRequest("/api/mock");

const text = ref('')
const formRef = ref(null);
const { ruleRequired } = useFormRules();
const model = ref({
    dateTime: null,
    trainNo: null,
    trainId: null,
    type: null,
})

const initiateCallFn = async () => {
    const valid = await formRef.value.validate();
    if (!valid) return;
    navigateTo("/meeting");
}

const goToMeetingFn = () => {
  toggleDialog()
}

</script>

<template>
  <div class="relative">
      <!-- 专家库 -->
    <q-drawer
        v-model="drawerExpert"
        side="right"
        :width="320"
        :breakpoint="700"
        elevated
        class="bg-white"
    >
       <div class="flex flex-col h-full">
           <div class="flex-1 flex flex-col h-full">
               <MeetingExpertList />
           </div>
           <div class="h-55px p-y-5px p-x-10px">
               <div class="grid grid-cols-2 gap-x-3">
                   <q-btn color="primary">添加组</q-btn>
                   <q-btn color="primary" outline>新建联系人</q-btn>
               </div>

           </div>
       </div>
    </q-drawer>

      <!-- 历史通话 -->
    <q-drawer
        v-model="drawerHistoricalCalls"
        side="right"
        :width="320"
        :breakpoint="700"
        elevated
        class="bg-white"
    >
        <HistoricalCallsList />
    </q-drawer>

    <q-dialog v-model="dialogShowStatus" persistent title="动车组应急多方通话">
      <q-card class="w-600px">
          <q-card-section class="row items-center q-pb-none">
              <div class="text-h6">动车组应急多方视频通话</div>
              <q-space />
              <q-btn class="text-12px" icon="mdi-close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
              <q-form ref="formRef">
                <div class="flex">

                    <p class="leading-40px w-70px text-right"><span class="text-red mr-5px">*</span>时间</p>
                    <q-input class="flex-1 m-x-10px" outlined v-model="model.dateTime" :rules="[ruleRequired]" dense></q-input>
                </div>
                  <div class="flex">
                      <p class="leading-40px w-70px text-right"><span class="text-red mr-5px">*</span>车次</p>
                      <q-input class="flex-1 m-x-10px" outlined v-model="model.trainNo" :rules="[ruleRequired]" dense></q-input>
                  </div>
                  <div class="flex">
                      <p class="leading-40px w-70px text-right"><span class="text-red mr-5px">*</span>车组号</p>
                      <q-input class="flex-1 m-x-10px" outlined v-model="model.trainId" :rules="[ruleRequired]" dense></q-input>
                  </div>
                  <div class="flex">
                      <p class="leading-40px w-70px text-right"><span class="text-red mr-5px">*</span>申请发起</p>
                      <q-input class="flex-1 m-x-10px" outlined v-model="model.type" :rules="[ruleRequired]" dense></q-input>
                  </div>
              </q-form>
          </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="取消" color="primary" v-close-popup />
          <q-btn flat label="确认" color="primary" @click="initiateCallFn" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-btn  @click="goToMeetingFn" class="absolute top-140px w-120px" :class="drawerExpert || drawerHistoricalCalls ? '-right-320px' : ' right-0'" color="primary" label="创建应急通话" />
    <q-btn class="absolute top-220px w-120px" :class="drawerExpert ? '-right-320px' : ' right-0'" color="primary" @click="toggleDrawerHistoricalCalls()" label="历史通话列表" />
    <q-btn class="absolute top-300px w-120px"  :class="drawerHistoricalCalls ? '-right-320px' : ' right-0'"  color="primary" label="专家库" @click="toggleDrawerExpert()" />
  </div>

  <div class="full-height !bg-cover"></div>

</template>

<style>
.full-height{
  height: calc(100vh - 104px) !important;
  background: url("../assets/imgs/bg.jpg");
}
</style>
