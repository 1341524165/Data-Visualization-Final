import data from '../data_2'
import smoothscroll from 'smoothscroll-polyfill'
import { useCallback,useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        smoothscroll.polyfill();
    }, []);
    const scrollToAnchor = (anchorName: string): void => {
        if (anchorName) {
            const anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        }
    };
    return (
        <main
            className={'min-h-screen h-full flex flex-col justify-center items-center'}
        >
            <div className={'w-full h-max flex flex-col justify-center items-center'}>
                <h1 className={'font-bold font-mono text-6xl m-2' +
                    // 文字颜色渐变
                    ' bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'
                }>交通参与者数据可视化</h1>
                <h5 className={'font-bold font-mono text-3xl m-2' +
                    // 文字颜色渐变
                    ' bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'
                }>Traffic-Participant_Data-Visualization</h5>
                <div
                    className={'border-t-2 border-b-2 border-dashed border-blue-200 min-h-3 grid grid-cols-5 gap-4 mx-6 py-5'}>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}
                                     onClick={() => {
                                         scrollToAnchor('scroll' + index);
                                     }}
                                     className={'flex flex-col justify-center items-center cursor-pointer'}>
                                    <img src={item.img} alt={'text'} className={'hover:opacity-60 transition-all ease duration-700'}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={'w-full flex flex-col my-8 mx-6'} id={'scroll'} style={{height: '0px'}}>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}
                                 id={'scroll' + index}
                                 className={'flex flex-col justify-center items-center'}>
                                <img src={item.img} alt={'text'} className={'h-max w-max'}/>
                                <div className={'font-bold font-mono text-2xl m-2 text-white'}>{item.title}</div>
                                <div className={'font-mono text-gray-200 mb-2 mx-10'}>
                                    {item.infor}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* 跳到顶部 */}
            <div className={'fixed bottom-10 right-10 cursor-pointer bg-gray-700 p-3 rounded-full'}
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
            >
                👆
            </div>
            <button className={'fixed bottom-10 right-40 cursor-pointer bg-blue-500 p-3 rounded-full'}
                    onClick={() => {
                        // 换成index_2.tsx页面
                        window.location.href = '/';
                    }}
             >
                路况数据可视化
             </button>
        </main>
    )
}
