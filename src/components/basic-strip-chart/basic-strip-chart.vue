<template>
    <div :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import mixins from '../mixins';
export default {
  mixins: [mixins],
  name: 'basic-strip-chart',
  data () {
    return {

    }
  },
  methods: {
      updateChart () {
          this.chart.source(this.data, {
              value: {
                  alias: this.yText
              }
          });
          this.chart.axis('key', {
              tickLine: {
                  alignWithLabel: false,
                  length: 0
              },
          });
          this.chart.axis('value', {
              label: null
          });
          this.chart.legend(false);
          this.chart.coord().transpose();
          this.chart.interval().position('key*value').size(26).opacity(1).label('value', {
              offset: 10
          });
          this.chart.render();
      }
  }
}
</script>

<style scoped>

</style>