<template>
  <v-layout>
    <VApp>
      <PageHeader />
      <VMain>
        <v-navigation-drawer color="surface" location="right">
          <v-list>
            <v-list-item title="Drawer right">22</v-list-item>
            <v-list-item title="Drawer right">33</v-list-item>
            <v-list-item title="Drawer right">44</v-list-item>
          </v-list>
        </v-navigation-drawer>
        <slot />
      </VMain>
      <PageFooter />
    </VApp>
  </v-layout>
</template>
