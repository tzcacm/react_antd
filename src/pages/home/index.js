import React from 'react';
import './index.less';
import { Icon, Card, Avatar } from 'antd';
const { Meta } = Card;

const HomePage = () => {

    const homeMenuList = [
        { icon: 'user', title: '用户总数', count: Math.round(Math.random() * 10000) },
        { icon: 'user', title: '商品总数', count: Math.round(Math.random() * 1000) },
        { icon: 'user', title: '订单总数', count: Math.round(Math.random() * 100) },
        { icon: 'user', title: '浏览总数', count: Math.round(Math.random() * 1000) }
    ];

    return (
        <div>
            <div className="home_menu">
                {
                    homeMenuList.map((item, index) => {
                        return (
                            <div className="menu_list" key={index}>
                                <Icon type={item['icon']} className="menu_icon"></Icon>
                                <div className="menu_box">
                                    <div className="menu_title">{item['title']}</div>
                                    <div className="menu_number">{item.count}</div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>

            <div className="home_card">
                <Card
                    hoverable
                    cover={<img alt="example" src="http://bimgs.plmeizi.com/images/bing/2018/WhiteTiger_ZH-CN12326957209_1920x1080.jpg" />}
                >
                    <Meta avatar={<Avatar src='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=f23b0796b74543a9f11bfdce2e178a7b/8b13632762d0f703d0ad4cbe08fa513d2697c5b1.jpg' />} title="孟加拉白虎" description="尽管在野外有孟加拉白虎出没的记载，但它们非常罕见。这可能是因为孟加拉白虎的毛皮里缺少色素，这种天生的缺陷降低了它们在自然界的存活率。如今，人们看到的孟加拉白虎都是动物园的园宝。孟加拉白虎在许多文化中具有很强的神话色彩，包括在韩国，它是力量和信任的象征。因此韩国奥林匹克委员会选择了孟加拉白虎作为2018年冬季奥运会的吉祥物之一。" />
                </Card>
            </div>
        </div>
    )
}

export default HomePage;