<template>
    <div :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import mixins from '../mixins';
export default {
  mixins: [mixins],
  name: 'many-line-chart',
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
          this.chart.legend({
              position: 'top-center'
          });
          this.chart.axis('value', {
              label: {
                  formatter: (val) => {
                      return this.unit ? val + this.unit : val
                  }
              }
          });
          this.chart.line().position('key*value').color('name').tooltip('key*value*name', (key, value, name) => {
              return {
                  name: name,
                  value: this.unit ? value + this.unit : value
              }
          });
          this.chart.point().position('key*value').color('name').size(4).shape('circle').style({
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