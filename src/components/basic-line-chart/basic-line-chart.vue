<template>
    <div :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import mixins from '../mixins';
export default {
  mixins: [mixins],
  name: 'base-line-chart',
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
              },
              'value': {
                  min: 0
              }
          })
          this.chart.tooltip({
              crosshairs: {
                  type: 'line'
              }
          });
          this.chart.axis('value', {
              label: {
                  formatter: (val) => {
                      return this.unit ? val + this.unit : val
                  }
              }
          });
          this.chart.line().position('key*value').tooltip('key*value', (key, value) => {
              return {
                  name: this.yText,
                  value: this.unit ? value + this.unit : value
              }
          });
          this.chart.point().position('key*value').size(4).shape('circle').style({
              stroke: '#fff',
              lineWidth: 1
          });
          this.chart.render();
      }
  }
}
</script>

<style scoped>

</style>