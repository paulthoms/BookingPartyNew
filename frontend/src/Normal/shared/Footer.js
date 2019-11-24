import React, { useState } from 'react';
import { TextareaAutosize, Button } from '@material-ui/core';
import { postAPI, postAPIWithoutToken } from '../shared/APICaller';
import swal from 'sweetalert';

export default function Footer() {

    const [feedback, setFeedBack] = useState();


    function handleChangeFeedBack(e) {
        console.log(e.target.value);
        setFeedBack(e.target.value);
    }

    function handleSendFeedback() {
        var formData = new FormData();
        if (feedback !== undefined) {
            formData.append('Feedback', feedback);
            postAPIWithoutToken('/pub/feedback', formData, function (res) {
                if (res.data.status === "ok") {
                    setFeedBack('');
                    swal("send feedback");
                }
            });
        }
        else {
            swal("something empty!!!");
        }
    }


    return (
        <div className="footer" >
            <div className="footer__head-container" >
                <div className="footer__introduce" >
                    <h3 className="footer__namewebsite" > BooPa </h3>
                    <p className="footer__description" >Trang web đặt bàn với những nhà hàng nổi tiếng trên địa bàn Hà Nội</p>
                </div>
                <div className="footer__contact" >
                    <h3 className="footer__contact__title" >Liên Hệ</h3>
                    <div className="footer__contact-single" >
                        <i class="fab fa-facebook"></i>Facebook
                    </div>
                    <div className="footer__contact-single" >
                        <i class="fab fa-google"></i>Gmail:avaichuong@gmail.com
                    </div>
                    <div className="footer__contact-single" >
                        <i class="fas fa-phone"></i>Phone: 1900 1000
                    </div>
                </div>

                <div className="footer__feedback">
                    <h3 className="footer__contact__title" >Phản Hồi</h3>
                    <TextareaAutosize onChange={handleChangeFeedBack} style={{ width: "100%" }} aria-label="minimum height" rows={6} placeholder="Phản hồi của bạn về trang web" />
                    <Button onClick={handleSendFeedback} variant="contained" color="primary">
                        Send
                    </Button>
                </div>
            </div>
            <div className="footer__copyright" ></div>
        </div>
    )
}
