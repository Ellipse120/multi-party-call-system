<template>
  <v-layout>
    <VApp>
      <HomePageHeader />
      <VMain class="">
        <slot />
      </VMain>
      <PageFooter />
    </VApp>
  </v-layout>
</template>
