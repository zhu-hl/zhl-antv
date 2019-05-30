<template>
    <div :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import mixins from '../mixins';
export default {
  mixins: [mixins],
  name: 'many-area-chart',
  data () {
    return {

    }
  },
  methods: {
      updateChart () {
          this.chart.source(this.data);
          this.chart.scale({
              'key': {
                  range: [0, 1]
              }
          })
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
          this.chart.area().position('key*value').color('name').shape('smooth').tooltip('key*value*name', (key, value, name) => {
              return {
                  name: name,
                  value: this.unit ? value + this.unit : value
              }
          });
          this.chart.render();
      }
  }
}
</script>

<style scoped>

</style>