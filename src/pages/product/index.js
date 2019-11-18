import React, { Fragment, useState } from 'react';
import EditInfo from './components/editInfo';
import { Select, Input, Button, Icon, Table, Popconfirm, message } from 'antd';
import './index.less';
const { Option } = Select;


const ProductPage = () => {

    const options = [
        { value: '0', title: '商品id' },
        { value: '1', title: '商品名称' },
    ]

    //table的header内容
    const [columns] = useState([
        {
            title: '序列号',
            dataIndex: 'id',
            key: 'id',
            width: '20%'
        },
        {
            title: '商品信息',
            dataIndex: 'name',
            key: 'name',
            width: '20%'
        },
        {
            title: '价格(元)',
            dataIndex: 'price',
            key: 'price',
            width: '20%'
        },
        {
            title: '状态',
            dataIndex: 'state',
            width: '20%',
            render: (states, record, index) => {
                return (
                    <span>{states === 0 ? '已下架' : ' 在售'}</span>
                )
            }
        },
        {
            title: '操作',
            dataIndex: 'tool',
            key: 'tool',
            width: '20%',
            render: (tools, record, index) => {
                console.log(record)
                return (
                    <div>
                        {
                            tools.map((item, key) => {
                                if (key === 0) {
                                    return (<Button ghost key={key} type='primary' style={{ marginRight: '10px' }} onClick={() => changeTable(index)}>{item}</Button>)
                                } else {
                                    return (
                                        <Popconfirm key={key} title="确定删除?" cancelText="取消" okText="确定" onConfirm={() => handleDelete(index)}>
                                            <Button ghost type='danger' style={{ marginRight: '10px' }}>{item}</Button>
                                        </Popconfirm>
                                    )
                                }
                            })
                        }
                    </div>
                )
            }
        },
    ])


    //列表数据
    const [listData, setListData] = useState([
        {
            key: '1',
            id: Math.round(Math.random() * 10000),
            name: '番茄',
            price: parseFloat(Math.random() * 100).toFixed(2),
            state: 1,
            tool: ['修改', '删除'],
        },
        {
            key: '2',
            id: Math.round(Math.random() * 10000),
            name: '番薯叶',
            price: parseFloat(Math.random() * 100).toFixed(2),
            state: 0,
            tool: ['修改', '删除'],
        },
        {
            key: '3',
            id: Math.round(Math.random() * 10000),
            name: '番茄',
            price: parseFloat(Math.random() * 100).toFixed(2),
            state: 1,
            tool: ['修改', '删除'],
        },
        {
            key: '4',
            id: Math.round(Math.random() * 10000),
            name: '番薯叶',
            price: parseFloat(Math.random() * 100).toFixed(2),
            state: 0,
            tool: ['修改', '删除'],
        },
        {
            key: '5',
            id: Math.round(Math.random() * 10000),
            name: '番茄',
            price: parseFloat(Math.random() * 100).toFixed(2),
            state: 0,
            tool: ['修改', '删除'],
        },
        {
            key: '6',
            id: Math.round(Math.random() * 10000),
            name: '番薯叶',
            price: parseFloat(Math.random() * 100).toFixed(2),
            state: 1,
            tool: ['修改', '删除'],
        }
    ])

    //查询
    const handleChange = (e) => {
        console.log('123')
    }

    //是否弹出修改编辑器状态
    const [dataIndex, setDataIndex] = useState(null);

    //记录弹出编辑器的列表下标
    const [isShowChange, setIsShowChange] = useState(false);

    //编辑的商品信息
    let [editInfoData, setEditInfoData] = useState({
        name: '',
        price: 0,
        state: 0
    })

    //删除列表数据某一项
    const handleDelete = (index) => {
        let delListData = JSON.parse(JSON.stringify(listData));
        delListData.splice(index, 1);
        console.log(delListData)
        setListData(delListData);
        console.log(listData)
    }

    //弹出修改编辑器
    const changeTable = (index) => {
        setIsShowChange(true);
        setDataIndex(index);
        setEditInfoData({
            name: listData[index]['name'],
            price: listData[index]['price'],
            state: listData[index]['state']
        })
    }

    //修改编辑器（监听price事件）
    const priceChange = (e) => {
        setEditInfoData({
            name: editInfoData['name'],
            price: e.target.value,
            state: editInfoData['state']
        })
    }

    //修改编辑器（改变是否在售事件）
    const radioChange = (e) => {
        setEditInfoData({
            name: editInfoData['name'],
            price: editInfoData['price'],
            state: e.target.value
        })
    }

    //修改编辑器（确定事件）
    const changeSure = () => {
        setIsShowChange(false);
        let dataList = JSON.parse(JSON.stringify(listData));
        dataList.forEach((item, index) => {
            if (index === dataIndex) {
                item['price'] = editInfoData['price'];
                item['state'] = editInfoData['state'];
            }
        })
        setListData(dataList);
        message.success('修改成功');
    }

    //修改编辑器（取消事件）
    const changeCancel = () => {
        setIsShowChange(false);
    }

    return (
        <Fragment>
            <div className="product_box">
                <div className="product_header">
                    <div className="product_tool">
                        <Select className="product_select" defaultValue={options[0]['value']} onChange={handleChange}>
                            {
                                options.map((item, index) => {
                                    return (
                                        <Option value={item['value']} key={index}>{item['title']}</Option>
                                    )
                                })
                            }
                        </Select>
                        <Input className="product_input" placeholder="关键词"></Input>
                        <Button>查询</Button>
                    </div>
                    <Button className="product_add" type="primary">
                        <Icon type="plus"></Icon>
                        <div className="product_addBtm">添加商品</div>
                    </Button>
                </div>

                <div className="product_table">
                    <Table bordered dataSource={listData} columns={columns} pagination={false} />
                </div>
            </div>

            <EditInfo isShowChange={isShowChange} editInfoData={editInfoData} radioChange={radioChange} priceChange={priceChange} changeSure={changeSure} changeCancel={changeCancel} />
        </Fragment>
    )
}

export default ProductPage;