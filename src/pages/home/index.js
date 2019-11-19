import React from 'react';
import './index.less';
import { Icon, Card, Avatar } from 'antd';
const { Meta } = Card;

const HomePage = () => {

    const homeMenuList = [
        { icon: 'user-add', title: '用户总数', count: Math.round(Math.random() * 10000) },
        { icon: 'shopping', title: '商品总数', count: Math.round(Math.random() * 1000) },
        { icon: 'shop', title: '订单总数', count: Math.round(Math.random() * 100) },
        { icon: 'usergroup-delete', title: '浏览总数', count: Math.round(Math.random() * 1000) }
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
                    cover={<img alt="example" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574165869443&di=d75634a6940392e6dca3ff2f0b074627&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F279759ee3d6d55fb76bf28446b224f4a20a4dd53.jpg" />}>
                    <Meta
                        avatar={<Avatar src='https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=f23b0796b74543a9f11bfdce2e178a7b/8b13632762d0f703d0ad4cbe08fa513d2697c5b1.jpg' />}
                        title="周杰伦"
                        description="周杰伦（Jay Chou），1979年1月18日出生于台湾省新北市，毕业于淡江中学，中国台湾流行乐男歌手、音乐人、演员、导演、编剧等。
                        2000年发行首张个人专辑《Jay》。2001年发行的专辑《范特西》奠定其融合中西方音乐的风格。2002年举行“The One”世界巡回演唱会。2003年成为美国《时代周刊》封面人物。2004年获得世界音乐大奖中国区最畅销艺人奖。2005年凭借动作片《头文字D》获得台湾电影金马奖、香港电影金像奖最佳新人奖。2006年起连续三年获得世界音乐大奖中国区最畅销艺人奖。2007年自编自导的文艺片《不能说的秘密》获得台湾电影金马奖年度台湾杰出电影奖。
                        2008年凭借歌曲《青花瓷》获得第19届金曲奖最佳作曲人奖。2009年入选美国CNN评出的“25位亚洲最具影响力的人物”；同年凭借专辑《魔杰座》获得第20届金曲奖最佳国语男歌手奖。2010年入选美国《Fast Company》评出的“全球百大创意人物” 。2011年凭借专辑《跨时代》再度获得金曲奖最佳国语男歌手奖，并且第4次获得金曲奖最佳国语专辑奖；同年主演好莱坞电影《青蜂侠》。2012年登福布斯中国名人榜榜首。2014年发行华语乐坛首张数字音乐专辑《哎呦，不错哦》。2018年举行“地表最强2”世界巡回演唱会。" >
                    </Meta>
                </Card>
            </div>
        </div>
    )
}

export default HomePage;