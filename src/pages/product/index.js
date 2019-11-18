import React, { Fragment, useState } from 'react';
import EditInfo from './components/editInfo';
import { Select, Input, Button, Icon, Table, Popconfirm, message } from 'antd';
import './index.less';
const { Option } = Select;

const ProductPage = () => {

    const options = [
        { value: '0', title: '商品序列号' },
        { value: '1', title: '商品信息' },
    ]

    //记录查询（options）
    const [selectOption, setOption] = useState(0);

    //记录查询（Input值）
    const [selectInput, setInput] = useState('');

    //查询
    const searchListData = () => {
        const selectInputData = selectOption === 0 ? listData.filter(val => val.id === Number(selectInput)) : listData.filter(val => val.name === selectInput);
        setListData([...selectInputData]);
    }

    //table的header内容
    const [columns] = useState([
        {
            title: '序列号',
            dataIndex: 'id',
            width: '20%'
        },
        {
            title: '商品信息',
            dataIndex: 'name',
            width: '20%'
        },
        {
            title: '价格(元)',
            dataIndex: 'price',
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
            width: '20%',
            render: (tools, record, index) => {
                return (
                    <div>
                        {
                            tools.map((item, key) => {
                                if (key === 0) {
                                    return (<Button ghost key={item} type='primary' style={{ marginRight: '10px' }} onClick={() => changeTable('edit', index)}>{item}</Button>)
                                } else {
                                    return (
                                        <Popconfirm key={item} title="确定删除?" cancelText="取消" okText="确定" onConfirm={() => handleDelete(index)}>
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
            state: 1,
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
            state: 1,
            tool: ['修改', '删除'],
        },
        {
            key: '5',
            id: Math.round(Math.random() * 10000),
            name: '番茄',
            price: parseFloat(Math.random() * 100).toFixed(2),
            state: 1,
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

    //记录弹出编辑器的列表下标
    const [dataIndex, setDataIndex] = useState(null);

    //是否弹出修改编辑器状态
    const [isShowChange, setIsShowChange] = useState(false);

    //编辑的商品信息
    let [editInfoData, setEditInfoData] = useState({})

    //删除列表数据某一项
    const handleDelete = (index) => {
        listData.splice(index, 1);
        setListData([...listData]);
        console.log(listData)
    }

    const [editType, setEditType] = useState('edit');

    //弹出修改编辑器
    const changeTable = (type, index) => {
        setIsShowChange(true);
        if (type === 'edit') {
            setDataIndex(index);
            console.log(listData[index]);
            setEditInfoData((prevData) => ({ ...prevData, ...listData[index] }))
        };
    }

    //修改编辑器（监听添加name事件）
    const nameChange = (e) => {
        setEditInfoData(prevData => ({ ...prevData, ...{ name: e.target.value } }));
    }

    //修改编辑器（监听price事件）
    const priceChange = (e) => {
        setEditInfoData(prevData => ({ ...prevData, ...{ price: e.target.value } }));
    }

    //修改编辑器（改变是否在售事件）
    const radioChange = (e) => {
        setEditInfoData(prevData => ({ ...prevData, ...{ state: e.target.value } }));
    }

    //修改编辑器（确定事件）
    const changeSure = () => {
        setIsShowChange(false);
        if (editType === 'edit') {
            if (editInfoData['price'] !== listData[dataIndex]['price'] || editInfoData['state'] !== listData[dataIndex]['state']) {
                const editList = JSON.parse(JSON.stringify(listData));
                editList.splice(dataIndex, 1, editInfoData);

                setListData((prevData => [...prevData]));
                message.success('修改成功');
            }
        } else {
            console.log('我来添加的')
            // if (editInfoData['name'] !== '' && editInfoData['price'] !== '') {
            //     Object.assign({ ...editInfoData }, { key: listData.length + 1 });
            //     console.log(editInfoData);
            //     message.success('添加成功');
            //     // listData.push(editInfoData);
            //     // setListData([...listData])
            // } else {
            //     message.error('添加失败，缺少参数')
            // }
        }
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
                        <Select className="product_select" defaultValue={options[0]['value']} onChange={(value) => setOption(value)}>
                            {
                                options.map(item => {
                                    return (
                                        <Option value={item['value']} key={item['title']}>{item['title']}</Option>
                                    )
                                })
                            }
                        </Select>
                        <Input className="product_input" placeholder="关键词" onChange={(e) => setInput(e.target.value)}></Input>
                        <Button onClick={searchListData}>查询</Button>
                    </div>
                    <Button className="product_add" type="primary" onClick={() => changeTable('add')}>
                        <Icon type="plus"></Icon>
                        <div className="product_addBtm">添加商品</div>
                    </Button>
                </div>

                <div className="product_table">
                    <Table bordered dataSource={listData} columns={columns} pagination={false} />
                </div>
            </div>

            <EditInfo isShowChange={isShowChange} editType={editType} nameChange={nameChange} editInfoData={editInfoData} radioChange={radioChange} priceChange={priceChange} changeSure={changeSure} changeCancel={changeCancel} />
        </Fragment>
    )
}

export default ProductPage;