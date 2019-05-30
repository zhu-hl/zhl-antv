<template>
    <div :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
import mixins from '../mixins';
export default {
  mixins: [mixins],
  name: 'many-strip-chart',
  data () {
    return {

    }
  },
  methods: {
      updateChart () {
          this.chart.source(this.data);
          this.chart.axis('key', {
              tickLine: {
                  alignWithLabel: false,
                  length: 0
              },
          });
          this.chart.legend({position: 'top-center'});
          this.chart.coord().transpose();
          this.chart.interval().position('key*value').color('name').opacity(1).adjust([{
              type: 'dodge',
              marginRatio: 0.3
          }]).tooltip('key*value*name', (key, value, name) => {
              return {
                  name: name,
                  value: this.unit ? value + this.unit : value
              }
          });;
          this.chart.render();
      }
  }
}
</script>

<style scoped>

</style>