import React, { Fragment, Component } from 'react';
import { Input, Button, Radio } from 'antd';
import PropTypes from 'prop-types';


class EditInfo extends Component {

    //监听name、price、radio的值
    dataChange(value, type) {
        let editData = {};
        editData[type] = value;
        const editInfoData = JSON.parse(JSON.stringify(this.props.infoData));
        const editInfo = Object.assign(editInfoData, editData);
        this.props.editDataChange(editInfo);
    }

    render() {

        let { isShowChange, editType, infoData, changeSure, changeCancel } = this.props;

        return (
            <div className="product_amendbox" style={{ display: isShowChange ? 'block' : 'none' }}>
                {
                    <div className="product_form">
                        {editType === 'edit' ?
                            <div className="product_amendTitle">{infoData['name']}</div>
                            :
                            <div className="product_amendInput">
                                <label htmlFor="name" className="product_type">商品信息：</label>
                                <Input placeholder="name" id="name" value={infoData['name']} onChange={(e) => this.dataChange(e.target.value, 'name')} />
                            </div>
                        }
                        <div className="product_amendInput">
                            <label htmlFor="price" className="product_type">商品价格：</label>
                            <Input placeholder="price" id="price" value={infoData['price']} onChange={(e) => this.dataChange(e.target.value, 'price')} />
                        </div>
                        <div className="product_amendInput">
                            <label htmlFor="state" className="product_type">是否在售：</label>
                            <Radio.Group onChange={(e) => this.dataChange(e.target.value, 'state')} value={infoData['state']}>
                                <Radio value={1}>在售</Radio>
                                <Radio value={0}>下架</Radio>
                            </Radio.Group>
                        </div>
                        <Fragment>
                            <Button htmlType="submit" className="product_sure" onClick={changeSure}>确定</Button>
                            <Button htmlType="submit" className="product_sure" onClick={changeCancel}>取消</Button>
                        </Fragment>
                    </div>
                }
            </div>
        )
    }
}


// 类型检查
EditInfo.propTypes = {
    editInfoData: PropTypes.object,
    isShowChange: PropTypes.bool
}

export default EditInfo;