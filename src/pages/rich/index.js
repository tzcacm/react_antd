import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react'
import './index.less';

class RichPage extends Component {


    componentDidMount() {
        this.initEditor()
    }

    initEditor() {
        const editor = this.refs.tinyEditor;
        this.editor = editor.editor;
    }

    imagesUploadHandler = (blobInfo, success, failure) => {
        // if (blobInfo.blob()) {
        //     const formData = new window.FormData()
        //     formData.append('file', blobInfo.blob(), blobInfo.filename())
        //     fetch(utils.url + '/fileclient-management/api/uploadpic', {
        //         method: 'POST',
        //         body: formData
        //     }).then((res) => {
        //         return res.json()
        //     }).then((res) => {
        //         const data = res.resultData
        //         if (data) {
        //             // 将图片插入到编辑器中
        //             success(data.resourceUrl)
        //         } else {
        //             failure(data.msg)
        //         }
        //     })
        // } else {
        //     message.info('請選擇要上傳的圖片')
        // }
    }

render() {
    return (
        <div className="rich_box">
            <Editor
                className='min-h300'
                // apiKey='wkwmi4ugkdza3yj4tgfljmxbdfffe7rb3nc7mkul5hxjtj5e'
                ref='tinyEditor'
                // automatic_uploads={!false}
                // images_upload_url={utils.url + '/fileclient-management/api/uploadpic'}
                // images_upload_handler={this.imagesUploadHandler}
                // initialValue='<p>在此輸入您的資訊內容</p>'
                // value={this.state.content}
                init={{
                    min_height: 500,
                    theme: 'modern',
                    language: 'zh_CN',
                    // skin: 'lightgray',
                    // menubar: false, // 頂部菜單
                    // resize: false, // 右下角調整大小
                    statusbar: false, // 底部狀態欄
                    object_resizing: false, // 禁止設置媒體大小
                    // images_upload_url: utils.url + '/fileclient-management/api/uploadpic',
                    images_upload_handler: this.imagesUploadHandler,
                    images_reuse_filename: true,
                    plugins: 'table advlist image lists preview textcolor', // imagetools 圖片編輯工具-剪切、旋轉、設置大小
                    toolbar: 'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat | image'
                    // image_description: false, // 图像对话框中的图像描述输入字段
                    // image_caption: true // 圖片下的文字
                    // image_title: true
                }}
            />
        </div>
    )
}
}

export default RichPage;