import React, { useState} from "react"
import Info from "./Info";
import './styles.css';

export default function () {
    let [authMode] = useState("signin")
    const [name, setName] = useState("");
    const [id, setID] = useState("");
    const [adress, setAdress] = useState("");
    const [phonenum, setPn] = useState("");
    const [birthday, setBirth] = useState("");
    const [mail, setMail] = useState("");
    const [ticketB, setTicketB] = useState();
    const [ticketA, setTicketA] = useState();

    const [temp, setTemp] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
    
    }


    if (authMode === "signin") {
        return (
            <div className="container my-5">
                <div className="Auth-form-container">
                    <form className="Auth-form" onSubmit={handleSubmit}>
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title">Form đăng ký tour</h3>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Nhập số CMND"
                                    value={id}
                                    onChange={(e) => {
                                        // <signupbtn></signupbtn>
                                        setID(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Họ và tên"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Địa chỉ"
                                    value={adress}
                                    onChange={(e) => {
                                        // <signupbtn></signupbtn>
                                        setAdress(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="tel"
                                    className="form-control mt-1"
                                    placeholder="Di động"
                                    value={phonenum}
                                    onChange={(e) => {
                                        // <signupbtn></signupbtn>
                                        setPn(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Email"
                                    value={mail}
                                    onChange={(e) => {
                                        // <signupbtn></signupbtn>
                                        setMail(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label className="mt-1">Ngày sinh</label>
                                <input
                                    type="date"
                                    className="form-control mt-1"
                                    value={birthday}
                                    onChange={(e) => {
                                        // <signupbtn></signupbtn>
                                        setBirth(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="form-group mt-3">
                                <div class="row">
                                    <div class="col-6 col-md-6">
                                        <input
                                            type="number"
                                            min="0"
                                            className="form-control mt-1"
                                            placeholder="Vé người lớn"
                                            value={ticketB}
                                            onChange={(e) => {
                                                // <signupbtn></signupbtn>
                                                setTicketB(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div class="col-6 col-md-6">
                                        <input
                                            type="number"
                                            min="0"
                                            className="form-control mt-1"
                                            placeholder="Vé Trẻ em"
                                            value={ticketA}
                                            onChange={(e) => {
                                                // <signupbtn></signupbtn>
                                                setTicketA(e.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                Tổng tiền: {ticketA}
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    name="textarea"
                                    style={{ width: 250, height: 150 }}
                                    value={temp}
                                    onChange={(e) => {
                                        // <signupbtn></signupbtn>
                                        setTemp(e.target.value)
                                    }}
                                />

                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )

    }

}