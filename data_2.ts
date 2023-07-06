interface dataTypes {
    title: string,
    img: string,
    infor?: string
}

const data: dataTypes[] = [
    {
        title: 'vehicle type',
        // 将图片放在 public 文件夹下，public 为根目录
        img: '/Vehicle_type.png',
        infor: '车辆类型分布'
    },
    {
        title: 'speed distribution',
        // 将图片放在 public 文件夹下，public 为根目录
        img: '/speed_all_2.png',
        infor: '全部车辆速度分布'
    },
    {
        title: 'speed distribution of moving vehicles',
        // 将图片放在 public 文件夹下，public 为根目录
        img: '/speed_moving_2.png',
        infor: '移动中的车辆速度分布'
    },
    {
        title: 'average speed',
        // 将图片放在 public 文件夹下，public 为根目录
        img: '/speed_ave.png',
        infor: '各类型车辆平均速度'
    },
    {
        title: 'speed distribution by vehicle type',
        // 将图片放在 public 文件夹下，public 为根目录
        img: '/violin.png',
        infor: '各类型车辆速度分布'
    },
    // ...
]

export default data
