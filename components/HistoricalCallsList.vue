<script setup>
const text = ref('')
</script>

<template>
    <p class="leading-40px text-blue-500 pl-20px border-b-1 border-b-blue">历史通话列表</p>
    <q-input class="m-10px" outlined v-model="text" dense  placeholder="搜索历史通话列表">
        <template v-slot:append>
            <q-icon name="mdi-magnify" />
        </template>
    </q-input>
    <q-list bordered class="rounded-borders">
        <q-expansion-item
                switch-toggle-side
                expand-separator
                default-opened
        >
            <template v-slot:header>
                <q-item-section class="!-ml-20px">
                    6月
                </q-item-section>

                <q-item-section side>
                    2023年
                </q-item-section>
            </template>
            <q-list bordered separator>
                <q-item class="call-item !pr-0" clickable v-ripple>
                    <q-item-section>
                        <p class="text-16px font-bold">G106 CRH380BL-2008</p>
                        <span class="text-gray-500 mt-12px">6月9日 13:43:54</span>
                    </q-item-section>
                    <q-item-section side class="call-operate !w-80px">
                        <q-btn class="mb-5px" size="sm" color="primary" no-caps>详情</q-btn>
                        <q-btn size="sm" color="red" no-caps>删除</q-btn>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-expansion-item>
        <q-expansion-item
                switch-toggle-side
                expand-separator
        >
            <template v-slot:header>
                <q-item-section class="!-ml-20px">
                    5月
                </q-item-section>

                <q-item-section side>
                    2023年
                </q-item-section>
            </template>
            <q-list bordered separator>
                <q-item class="call-item !pr-0" clickable v-ripple>
                    <q-item-section>
                        <p class="text-16px font-bold">G106 CRH380BL-2008</p>
                        <span class="text-gray-500 mt-12px">6月9日 13:43:54</span>
                    </q-item-section>
                    <q-item-section side class="call-operate !w-80px">
                        <q-btn class="mb-5px" size="sm" color="primary" no-caps>详情</q-btn>
                        <q-btn size="sm" color="red" no-caps>删除</q-btn>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-expansion-item>
    </q-list>
</template>

<style scoped>
.call-item .call-operate{
    display: none;
}

.call-item:hover .call-operate{
    display: block;
}
</style>