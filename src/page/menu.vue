<script setup lang="ts">
import { NButton, NSpace } from 'naive-ui'
import { MenuBookFilled } from '@vicons/material'
import { Icon } from '@vicons/utils'
import { router } from "../routes";
import { useUserStore } from "../store/store.user.ts";
import { storeToRefs } from "pinia";
import UserSettings from "../components/user-settings.vue";
import MenuCard from "../components/menu-card.vue";
const store = useUserStore()
const { user } = storeToRefs(store)
</script>

<template>
  <section class="menu">
      <div class="container _h-ai-c">
          <div class="col">
              <div class="row _h-gap-md _h-jc-sb _h-ai-c">
                  <h1 class="h1">Меню</h1>
                  <n-space>
                      <n-button type="primary"
                                @click="router.push('/menu-edit')"
                      >
                          <Icon size="24">
                              <MenuBookFilled/>
                          </Icon>
                          Редактировать
                      </n-button>
                      <user-settings :email="user.email"/>
                  </n-space>
              </div>

              <div class="menu--card-list">
                  <Suspense>
                      <menu-card/>
                      <template #fallback>
                          Загрузка...
                      </template>
                  </Suspense>
              </div>
          </div>
      </div>
  </section>
</template>

<style scoped>

</style>