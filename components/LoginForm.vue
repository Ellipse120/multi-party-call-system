<script setup>
import logoUrl from "@/assets/imgs/logo.png";

const formRef = ref(null);
const [isPwd, toggleIsPwd] = useToggle();
const corporation = useAppConfig().corporation;
const appName = useAppConfig().name;

const userName = ref(null);
const passwd = ref(null);
const { ruleRequired } = useFormRules();

const { setToken } = useAuth();

const doLogin = async () => {
  const valid = await formRef.value.validate();

  if (!valid) return;

  setToken("xxxxx");
  navigateTo("/");
  console.log({
    userName: userName.value,
    passwd: passwd.value,
  });
};
</script>

<template>
  <div class="w-130">
    <q-card elevation="4" class="p-8">
      <div class="flex flex-col items-center justify-center">
        <q-img class="w-24" :src="logoUrl" />
        <div class="my-4 text-2xl">{{ appName }}</div>
      </div>

      <q-form ref="formRef">
        <q-input
          v-model="userName"
          class="my-4"
          label="用户名"
          :rules="[ruleRequired]"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-account" />
          </template>
        </q-input>

        <q-input
          v-model="passwd"
          label="密码"
          :type="!isPwd ? 'password' : 'text'"
          :rules="[ruleRequired]"
          hint="密码至少8位, 需要包含数字、大写字母、小写字母、特殊符号"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-key" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'mdi-eye-off' : 'mdi-eye'"
              class="cursor-pointer"
              @click="toggleIsPwd()"
            />
          </template>
        </q-input>
      </q-form>

      <div class="text-center my-4">
        <q-btn
          color="primary"
          class="full-width"
          label="登录"
          @click="doLogin()"
        />
        <div class="mt-4">&#169;{{ corporation }}</div>
      </div>
    </q-card>
  </div>
</template>
