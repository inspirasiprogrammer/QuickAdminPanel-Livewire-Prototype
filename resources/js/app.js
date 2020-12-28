/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

window.Vue = require('vue')

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  el: '#app'
})


/* Sidebar - Side navigation menu on mobile/responsive mode */
window.toggleNavbar = function (collapseID) {
  document.getElementById(collapseID).classList.toggle('hidden')
  document.getElementById(collapseID).classList.toggle('bg-white')
  document.getElementById(collapseID).classList.toggle('m-2')
  document.getElementById(collapseID).classList.toggle('py-3')
  document.getElementById(collapseID).classList.toggle('px-6')
}

/* Opens sidebar navigation that contains sub-items */
window.openSubNav = function (el) {
  let parent = el.parentElement

  let subnavs = document.getElementsByClassName('subnav')
  for (let i = 0; i < subnavs.length; i++) {
    if (!subnavs[i].classList.contains('hidden')) {
      subnavs[i].classList.add('hidden')
    }
  }

  parent.getElementsByClassName('subnav')[0].classList.remove('hidden')
}

window.initialSubNavLoad = function () {
  let active = document.getElementsByClassName('has-sub sidebar-nav-active')
  if (active[0]) {
    window.openSubNav(active[0])
  }
}

initialSubNavLoad()
/* Opens sidebar navigation that contains sub-items */