import React, { Fragment } from 'react';
import { Input, Button, Radio } from 'antd';
import PropTypes from 'prop-types';

const EditInfo = (props) => {

    return (
        <div className="product_amendbox" style={{ display: props.isShowChange ? 'block' : 'none' }}>
            {
                props.editType === 'edit' ?
                    <div className="product_form">
                        <div className="product_amendTitle">{props.editInfoData['name']}</div>
                        <div className="product_amendInput">
                            <label htmlFor="price" className="product_type">商品价格：</label>
                            <Input placeholder="price" id="price" value={props.editInfoData['price']} onChange={props.priceChange} />
                        </div>
                        <div className="product_amendInput">
                            <label htmlFor="state" className="product_type">是否在售：</label>
                            <Radio.Group onChange={props.radioChange} value={props.editInfoData['state']}>
                                <Radio value={1}>在售</Radio>
                                <Radio value={0}>下架</Radio>
                            </Radio.Group>
                        </div>
                        <Fragment>
                            <Button htmlType="submit" className="product_sure" onClick={props.changeSure}>确定</Button>
                            <Button htmlType="submit" className="product_sure" onClick={props.changeCancel}>取消</Button>
                        </Fragment>
                    </div>
                    :
                    <div className="product_form">
                        <div className="product_amendInput">
                            <label htmlFor="price" className="product_type">商品信息：</label>
                            <Input placeholder="name" id="price" onChange={props.nameChange} />
                        </div>
                        <div className="product_amendInput">
                            <label htmlFor="price" className="product_type">商品价格：</label>
                            <Input placeholder="price" id="price" onChange={props.priceChange} />
                        </div>
                        <div className="product_amendInput">
                            <label htmlFor="state" className="product_type">是否在售：</label>
                            <Radio.Group onChange={props.radioChange} value={props.editInfoData['state']}>
                                <Radio value={1}>在售</Radio>
                                <Radio value={0}>下架</Radio>
                            </Radio.Group>
                        </div>
                        <Fragment>
                            <Button htmlType="submit" className="product_sure" onClick={props.changeSure}>确定</Button>
                            <Button htmlType="submit" className="product_sure" onClick={props.changeCancel}>取消</Button>
                        </Fragment>
                    </div>
            }
        </div>
    )
}

// 类型检查
EditInfo.propTypes = {
    editInfoData: PropTypes.object,
    isShowChange: PropTypes.bool
}

export default EditInfo;