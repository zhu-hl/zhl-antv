import G2 from '@antv/g2';

export default {
    props: {
        data: {
            type: null,
        },
        yText: {
            type: String,
        },
        unit: {
            type: String,
        },
        className: {
            type: String,
            default: 'chart',
        },
        id: {
            type: String,
            default: 'chart',
        },
        width: {
            type: String,
            default: '100%',
        },
        height: {
            type: String,
            default: '350px',
        },
    },
    data() {
        return {
            chart: null,
        };
    },
    mounted() {
        this.initChart();
    },
    watch: {
        data: function () {
            this.updateChart();
        },
    },
    methods: {
        initChart() {
            const innerHeight = document.getElementById(this.id).offsetHeight;
            this.chart = new G2.Chart({
                container: this.id,
                forceFit: true,
                height: innerHeight,
                padding: [40, 'auto']
            });
            this.updateChart();
        }
    },
    beforeDestroy() {
        if (!this.chart) {
            return;
        }
        this.chart = null;
    }
};
