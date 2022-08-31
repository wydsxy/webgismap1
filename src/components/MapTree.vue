<template>
    <div class="maptree-pannel" v-show="this.$store.getters._getDefaultMapTreeVisible">
        <div class="maptree-header">
            <span>图层管理</span>
            <i class="el-icon-close" @click="closeMapTreePannel"></i>
        </div>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>
import { loadModules } from 'esri-loader';
const options = {
    url: 'https://js.arcgis.com/4.18/init.js',
    css: 'https://js.arcgis.com/4.18/esri/themes/light/main.css',
};
export default {
    name: 'MapTree',
    components: {},
    data() {
        return {
            data: [
                {
                    label: '底图',
                    children: [
                        {
                            label: '云南政区',
                            layerid: 'layerid',
                            layerurl: 'http://47.113.221.187:6080/arcgis/rest/services/YLGS/YLGS_District/MapServer',
                        },
                        {
                            label: '云南路网',
                            layerid: 'layerid',
                            layerurl: 'http://47.113.221.187:6080/arcgis/rest/services/YLGS/YLGS_Route/MapServer',
                        },
                        {
                            label: '云南资产',
                            layerid: 'layerid',
                            layerurl: 'http://47.113.221.187:6080/arcgis/rest/services/YLGS/YLGS_AssetPoint/MapServer',
                        },
                    ],
                },
                {
                    label: '行政区划',
                    // layerid: 'layerid',
                    //layerurl: 'http://47.113.221.187:6080/arcgis/rest/services/YLGS/YLGS_Route/MapServer',
                    children: [
                        {
                            label: '省级行政区划',
                            layerid: 'layerid',
                            layerurl: 'http://192.168.24.29:6080/arcgis/rest/services/Province/MapServer',
                        },
                        {
                            label: '地市级行政区划',
                            layerid: 'layerid',
                            layerurl: 'http://192.168.24.29:6080/arcgis/rest/services/City/MapServer',
                        },
                        {
                            label: '区县级行政区划',
                            layerid: 'layerid',
                            layerurl: 'http://192.168.24.29:6080/arcgis/rest/services/County/MapServer',
                        },
                    ],
                },
                {
                    label: '业务数据',
                    //layerid: 'layerid',
                    //layerurl: 'http://47.113.221.187:6080/arcgis/rest/services/YLGS/YLGS_AssetPoint/MapServer',
                    children: [
                        {
                            label: '火车站84',
                        },
                        {
                            label: '火车站墨卡托',
                        },
                    ],
                },
            ],
            defaultProps: {
                children: 'children',
                label: 'label',
            },
        };
    },
    mounted: function () {},
    methods: {
        async handleNodeClick(data) {
            console.log(data);
            if (data.layerurl) {
                const view = this.$store.getters._getDefaultMapView;
                const resultLayer = view.map.findLayerById('layerid');
                // if (resultLayer) view.map.remove(resultLayer); //关闭其它图层
                const [MapImageLayer] = await loadModules(['esri/layers/MapImageLayer'], options);
                const layer = new MapImageLayer({ url: data.layerurl, id: data.layerid });
                view.map.add(layer);
            }
        },
        closeMapTreePannel() {
            const currentVisible = this.$store.getters._getDefaultMapTreeVisible;
            this.$store.commit('_setDefaultMapTreeVisible', !currentVisible);
        },
    },
};
</script>

<style>
.maptree-pannel {
    position: absolute;
    top: 20px;
    left: 15px;
    width: 200px;
    height: 300px;
    background-color: aliceblue;
}
.maptree-header {
    width: 100%;
    height: 35px;
    border-bottom: 1px solid #e4e7ed;
    padding: 0 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}
.maptree-header > span {
    line-height: 35px;
    font-size: 16px;
    font-weight: 600;
}
.maptree-header > i {
    line-height: 35px;
    cursor: pointer;
}
</style>
