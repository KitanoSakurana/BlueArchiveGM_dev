import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Give from '../views/Give.vue'
import GiveAll from '../views/GiveAll.vue'
import GetPlayer from '../views/GetPlayer.vue'
import Mail from '../views/Mail.vue'
import GetEmailCode from '../views/GetEmailCode.vue'
import IdList from '../views/IdList.vue'
import Character from '../views/Character.vue'
import About from '../views/About.vue'
import GameSetting from '../views/GameSetting.vue'
import Command from '../views/Command.vue'
import ConfigMaker from '../views/ConfigMaker.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/give', name: 'Give', component: Give },
  { path: '/give-all', name: 'GiveAll', component: GiveAll },
  { path: '/get-player', name: 'GetPlayer', component: GetPlayer },
  { path: '/mail', name: 'Mail', component: Mail },
  { path: '/get-email-code', name: 'GetEmailCode', component: GetEmailCode },
  { path: '/id-list', name: 'IdList', component: IdList },
  { path: '/character', name: 'Character', component: Character },
  { path: '/about', name: 'About', component: About },
  { path: '/setting', name: 'GameSetting', component: GameSetting },
  { path: '/command', name: 'Command', component: Command },
  { path: '/configmaker', name: 'ConfigMaker', component: ConfigMaker },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
