<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div id="test">
      {{row_1_1}}
    </div>
    <div id="test1">
      {{row_1_2}}
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "Home",
    components: {
      HelloWorld
    },
    //支持缓存，只有依赖数据发生改变，才会重新进行计算，computed 属性值会默认走缓存
    //如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用computed
    //如果computed属性属性值是函数，那么默认会走get方法；函数的返回值就是属性的属性值；在computed中的，
    //属性都有一个get和一个set方法，当数据变化时，调用set方法。
    //想要获取到state中的数据{{$store.state.属性}}
    computed: {
      row_1_1 () {
        return this.$store.state.overview.row_1_1;
      },
      row_1_2 () {
        return this.$store.state.overview.row_1_2;
      }
    },
    mounted() {
      let hasReload = this.$store.state.pageState.overview;
      if (!hasReload) {
        this.reload();
        //todo change state to true

      }
    },
    methods: {
      reload() {
        console.log(this.qApp);
        this.Cube.getData(this.qApp, this, {
          kpiName: ['overview', 'row_1_1'],
          storeName: ['overview', 'row_1_1']
        });
        //
        this.Cube.getKpiData(this.qApp, this, {
          kpiName: ['overview', 'row_1_2'],
          storeName: ['overview', 'row_1_2']
        });
        this.$store.commit('setData', {
          dataName: ['pageState','overview'],
          data: true
        });
      }
    }
  };
</script>

<style lang="less" scoped></style>
