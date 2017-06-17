/*! vue.start.js © yamoo9.net, 2017 */
;(function(global, Vue){
  'use strict';

  global.todolist = new Vue({
    el: '.demo-todolist',
    data: {
      doList: [
        { desc: 'Vue.js 도서 쓰기', complete: false },
        { desc: 'Vuex 패턴 연구', complete: true },
        { desc: 'jQuery 플러그인 패턴 집필', complete: false },
        { desc: 'FDS 스쿨 과정 포트폴리오 컨펌', complete: false },
        { desc: 'Vue 캠프 수업 준비', complete: true },
      ]
    }
  });

})(window, window.Vue);
