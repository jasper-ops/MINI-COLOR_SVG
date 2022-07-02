import SvgManager from "../../asstes/SvgManager"
import { getColorSVG } from "../../utils/tools"

Component({
    options: {
        styleIsolation: 'apply-shared',
        virtualHost: true
    },
    properties: {
        /** 图标名称 */
        name: {
            type: String,
            value: ''
        },
        /** 图标颜色 */
        color: {
            type: String,
            value: '#000000'
        },
        size: {
            type: String,
            value: '28rpx'
        }
    },
    observers: {
        // 监听名称和颜色变化
        'name,color': function (name, color) {
            this.changeIcon(name, color);
        }
    },
    data: {
        svgData: ''
    },

    methods: {
        changeIcon(name, color) {
            let svgBase64 = SvgManager[name]; // 从svg管理器中取出对应svg
            svgBase64 = getColorSVG(svgBase64, color); // 替换它的颜色
            this.setData({
                svgData: svgBase64 // 渲染
            });
        }
    }
})
