interface dataTypes {
    title: string,
    img: string,
    infor?: string
}

const data: dataTypes[] = [
    {
        title: 'boundary road',
        // 将图片放在 public 文件夹下，public 为根目录
        img: '/boundary_road.png',
        infor: '界限路'
    },
    {
        title: 'crosswalk',
        // 将图片放在 public 文件夹下，public 为根目录
        img: '/crosswalk_road.png',
        infor: '人行横道、斑马线'
    },
    {
        title: 'lane',
        // 将图片放在 public 文件夹下，public 为根目录
        img: '/lane_road.png',
        infor: '车行道、行车线'
    },
    {
        title: 'signal',
        // 将图片放在 public 文件夹下，public 为根目录
        img: '/signal_road.png',
        infor: '交通信号灯'
    },
    {
        title: 'stopline',
        // 将图片放在 public 文件夹下，public 为根目录
        img: '/stopline_road.png',
        infor: '停车线'
    },
    {
        title: 'heatmap',
        // 将图片放在 public 文件夹下，public 为根目录
        img: '/heatmap.png',
        infor: '路况热力图'
    },
    // ...
]

export default data
