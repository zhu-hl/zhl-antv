import BasicAreaChart from './components/basic-area-chart';
import BasicBarChart from './components/basic-bar-chart';
import BasicDonutChart from './components/basic-donut-chart';
import BasicLineChart from './components/basic-line-chart';
import BasicPieChart from './components/basic-pie-chart';
import BasicStripChart from './components/basic-strip-chart';
import ManyAreaChart from './components/many-area-chart';
import ManyBarChart from './components/many-bar-chart';
import ManyLineChart from './components/many-line-chart';
import ManyStripChart from './components/many-strip-chart';
const components = {
    BasicAreaChart,
    BasicBarChart,
    BasicDonutChart,
    BasicLineChart,
    BasicPieChart,
    BasicStripChart,
    ManyAreaChart,
    ManyBarChart,
    ManyLineChart,
    ManyStripChart
};
const install = function(Vue) {
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const resource = {
    BasicAreaChart,
    BasicBarChart,
    BasicDonutChart,
    BasicLineChart,
    BasicPieChart,
    BasicStripChart,
    ManyAreaChart,
    ManyBarChart,
    ManyLineChart,
    ManyStripChart,
    install
};
export default resource
