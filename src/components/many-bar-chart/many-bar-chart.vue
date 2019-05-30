<template>
    <div :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import mixins from '../mixins';
export default {
  mixins: [mixins],
  name: 'many-bar-chart',
  data () {
    return {

    }
  },
  methods: {
      updateChart () {
          this.chart.source(this.data);
          this.chart.axis('value', {
              label: {
                  formatter: (val) => {
                      return this.unit ? val + this.unit : val
                  }
              }
          });
          this.chart.legend({
              position: 'top-center'
          });
          this.chart.interval().position('key*value').color('name').tooltip('key*value*name', (key, value, name) => {
              return {
                  name: name,
                  value: this.unit ? value + this.unit : value
              }
          }).opacity(1).adjust([{
              type: 'dodge',
              marginRatio: 1 / 32
          }]);
          this.chart.render();
      }
  }
}
</script>

<style scoped>

</style>