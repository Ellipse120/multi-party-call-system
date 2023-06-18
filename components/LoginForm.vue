<script setup>
import { useField, useForm } from "vee-validate";
import logoUrl from "@/assets/imgs/logo.png";

const { handleSubmit } = useForm();
const [bool1, toggle1] = useToggle();
const { ruleRequired, rulePassword } = useFormRules();

const name = useField("name");
const email = useField("email");
const password = useField("password");
const corporation = useAppConfig().corporation;
const appName = useAppConfig().name;

const { setToken } = useAuth();

const doLogin = handleSubmit((values) => {
  setToken("xxxxx");
  navigateTo("/");
  console.log(values);
});
</script>

<template>
  <div class="w-120">
    <v-sheet elevation="4" class="p-4">
      <v-container fluid>
        <div class="flex flex-col items-center justify-center">
          <v-img class="w-20" :src="logoUrl"></v-img>
          <div class="my-4 text-2xl">{{ appName }}</div>
        </div>

        <v-form>
          <v-text-field
            v-model="name.value.value"
            :counter="10"
            clearable
            :rules="[ruleRequired]"
            prepend-inner-icon="mdi-account-outline"
            label="账号"
            class="my-4"
          ></v-text-field>

          <v-text-field
            v-model="password.value.value"
            prepend-inner-icon="mdi-lock-outline"
            :append-inner-icon="bool1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[ruleRequired, rulePassword]"
            :type="bool1 ? 'text' : 'password'"
            label="密码"
            hint="密码至少8位, 需要包含数字、大写字母、小写字母、特殊符号"
            persistent-hint
            counter
            clearable
            @click:append="toggle1()"
          ></v-text-field>
        </v-form>
      </v-container>

      <div class="text-center m-4">
        <v-btn color="primary" variant="flat" block @click="doLogin()">
          登录
        </v-btn>
        <div class="mt-4">&#169;{{ corporation }}</div>
      </div>
    </v-sheet>
  </div>
</template>
