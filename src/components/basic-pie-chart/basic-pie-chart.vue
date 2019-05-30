<template>
    <div :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import mixins from '../mixins';
export default {
  mixins: [mixins],
  name: 'basic-pie-chart',
  data () {
    return {

    }
  },
  methods: {
      updateChart () {
          this.chart.source(this.data, {
              value: {
                  formatter: function formatter(val) {
                      val = val * 100 + '%';
                      return val;
                  }
              }
          });
          this.chart.coord('theta', {
              radius: 0.75
          });
          this.chart.tooltip({
              showTitle: false,
              itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
          });
          this.chart.intervalStack().position('value').color('key').label('value', {
              formatter: function formatter(val, key) {
                  return key.point.key + ': ' + val;
              }
          }).tooltip('key*value', function(key, value) {
              value = value * 100 + '%';
              return {
                  name: key,
                  value: value
              };
          })
          this.chart.render();
      }
  }
}
</script>

<style scoped>

</style>