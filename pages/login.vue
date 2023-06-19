<script setup>
definePageMeta({
  name: "登录",
  layout: false,
  middleware(to) {
    const { isLoggedIn } = useAuth();

    if (isLoggedIn.value && to.path === "/login") {
      return navigateTo("/");
    }

    // return navigateTo(to.path);
  },
});
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <LoginForm />
  </div>
</template>
