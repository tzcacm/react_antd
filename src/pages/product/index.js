import React, { Fragment, Component } from 'react';
import EditInfo from './components/editInfo';
import { Select, Input, Button, Icon, Table, Popconfirm, message } from 'antd';
import './index.less';
const { Option } = Select;

class ProductPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            options: [
                { value: '0', title: '商品序列号' },
                { value: '1', title: '商品信息' }
            ],
            selectOption: 0,//记录查询（options）
            selectInput: '',//记录查询（Input值）
            columns: [  //table的header内容
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
                                            return (<Button ghost key={item} type='primary' style={{ marginRight: '10px' }} onClick={() => this.changeTable('edit', index)}>{item}</Button>)
                                        } else {
                                            return (
                                                <Popconfirm key={item} title="确定删除?" cancelText="取消" okText="确定" onConfirm={() => this.handleDelete(index)}>
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
            ],
            listData: [//列表数据
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
                }, {
                    key: '7',
                    id: Math.round(Math.random() * 10000),
                    name: '番薯叶',
                    price: parseFloat(Math.random() * 100).toFixed(2),
                    state: 1,
                    tool: ['修改', '删除'],
                }, {
                    key: '8',
                    id: Math.round(Math.random() * 10000),
                    name: '番薯叶',
                    price: parseFloat(Math.random() * 100).toFixed(2),
                    state: 1,
                    tool: ['修改', '删除'],
                }, {
                    key: '9',
                    id: Math.round(Math.random() * 10000),
                    name: '番薯叶',
                    price: parseFloat(Math.random() * 100).toFixed(2),
                    state: 1,
                    tool: ['修改', '删除'],
                }, {
                    key: '10',
                    id: Math.round(Math.random() * 10000),
                    name: '番薯叶',
                    price: parseFloat(Math.random() * 100).toFixed(2),
                    state: 1,
                    tool: ['修改', '删除'],
                }
            ],
            dataIndex: null,//记录弹出编辑器的列表下标
            isShowChange: false,//是否弹出修改编辑器状态
            infoData: {},//编辑的商品信息
            editType: 'edit',//记录弹出编辑器是修改还是添加
        }
    }

    //性能优化
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.isShowChange !== nextState.isShowChange) return true
        if (this.state.listData !== nextState.listData) return true
        if (this.state.infoData !== nextState.infoData) return true
        return false;
    }

    //弹出修改编辑器
    changeTable(type, index) {
        this.setState({
            editType: type,
            dataIndex: index,
            isShowChange: true,
            infoData: type === 'edit' ? this.state.listData[index] : {}
        });
    }

    //查询
    searchListData() {
        let { selectOption, selectInput, listData } = this.state;
        const selectInputData = selectOption === 0 ? listData.filter(val => val.id === Number(selectInput)) : listData.filter(val => val.name === selectInput);
        this.setState({
            listData: selectInputData
        });
    }

    //修改编辑器（确定事件）
    changeSure() {
        let { dataIndex, editType, infoData, listData } = this.state;
        this.setState(() => ({ isShowChange: false }));

        //编辑列表
        if (editType === 'edit') {
            if ((infoData['price'] && infoData['price'] !== listData[dataIndex]['price']) || infoData['state'] !== listData[dataIndex]['state']) {
                let editListData = JSON.parse(JSON.stringify(listData));
                editListData.splice(dataIndex, 1, infoData);
                this.setState(() => ({ listData: editListData }));
                message.success('修改成功');
            } else {
                message.error('修改失败');
            }
        } else {
            //增加列表
            if (infoData['name'] !== '' && infoData['price'] !== '' && infoData['state']) {
                let [editListData, editInfoData] = [JSON.parse(JSON.stringify(listData)), JSON.parse(JSON.stringify(infoData))];
                let maxListData = JSON.parse(JSON.stringify(editListData));
                //获取列表的key的最大值
                maxListData.sort((a, b) => Number(b['key']) - Number(a['key']));
                const isMaxKey = Number(maxListData[0]['key']) + 1;
                Object.assign(editInfoData, { key: String(isMaxKey), id: 5248, tool: ['修改', '删除'] });
                editListData.push(editInfoData);
                this.setState(() => ({ listData: editListData }));
                message.success('添加成功');
            } else {
                message.error('添加失败，缺少参数')
            }
        }
    }

    //删除列表数据某一项
    handleDelete(index) {
        let editListData = JSON.parse(JSON.stringify(this.state.listData));
        editListData.splice(index, 1);
        this.setState({
            listData: editListData
        });
    }

    render() {
        let { options, listData, columns, isShowChange, editType, infoData } = this.state;
        return (
            <Fragment>
                <div className="product_box">
                    <div className="product_header">
                        <div className="product_tool">
                            <Select className="product_select" defaultValue={options[0]['value']} onChange={(value) => this.setState({ selectOption: value })}>
                                {
                                    options.map(item => {
                                        return (
                                            <Option value={item['value']} key={item['title']}>{item['title']}</Option>
                                        )
                                    })
                                }
                            </Select>
                            <Input className="product_input" placeholder="关键词" onChange={(e) => this.setState({ selectInput: e.target.value })}></Input>
                            <Button onClick={this.searchListData.bind(this)}>查询</Button>
                        </div>
                        <Button className="product_add" type="primary" onClick={() => this.changeTable('add')}>
                            <Icon type="plus"></Icon>
                            <div className="product_addBtm">添加商品</div>
                        </Button>
                    </div>

                    <div className="product_table">
                        <Table bordered dataSource={listData} columns={columns} pagination={true} />
                    </div>
                </div>

                <EditInfo
                    isShowChange={isShowChange}
                    editType={editType}
                    infoData={infoData}
                    changeSure={this.changeSure.bind(this)}
                    editDataChange={(event) => this.setState(() => ({ infoData: event }))}
                    changeCancel={() => this.setState(() => ({ isShowChange: false }))}
                ></EditInfo>
            </Fragment>
        )
    }
}

export default ProductPage;