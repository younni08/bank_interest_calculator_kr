import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";

const IntCalc = () => {
    const [pay, setPay] = useState();
    const [family, setFamily] = useState();
    const [underAge, setUnderAge] = useState();
    const [notax, setNotax] = useState();
    const [omgtax,setOmgtax] = useState();

    const [monthly, setMonthly] = useState();
    const [pension, setPension] = useState();
    const [healthcare, setHealthcare] = useState();

    const button1 = () => {

    }
    const button2 = () => {
        
    }
    const button3 = () => {
        
    }
    const button4 = () => {
        
    }

    const handlePay = (e) => {
        setPay(e.target.value);
    }
    const handleFamily = (e) => {
        setFamily(e.target.value);
    }
    const handleUnderAge = (e) => {
        setUnderAge(e.target.value);
    }

    useEffect(() => {

    },[pay,underAge,notax,family])
    
    return (
        <div className="int_calc">
            <div className="int_calc_header">
                <div>
                    <Link to="loan">
                        <div>월급 계산기</div>
                    </Link>
                </div>
                <span className="int_calc_title">월금 계산기</span>
            </div>
            <div className="int_calc_body">
                <div>
                </div>
                <div id="calc1" className="on">
                    <div className="int_calc_body_level111">
                        <div className="right">
                            <span>월급</span>
                        </div>
                        <div className="spacial_left_calc3">
                            <div>
                                <div>
                                    <span id="b1" onClick={button1}>연봉</span>
                                    <span id="b2" className="on"  onClick={button2}>월급</span>
                                </div>
                                <div>
                                    <span id="b3" className="on" onClick={button3}>퇴직금 미포함</span>
                                    <span id="b3" onClick={button4}>퇴직금 보함</span>
                                </div>
                            </div>
                            <div>
                                <input value={pay} placeholder="28,000,000" onChange={handlePay}/>
                                <span>원</span>    
                            </div>
                        </div>
                    </div>
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span>부양 가족수</span>
                        </div>
                        <div className="left">
                            <input value={family} placeholder="18" onChange={handleFamily}/>
                            <span>명</span>
                        </div>
                    </div>
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span>20세 이하 자녀수</span>
                        </div>
                        <div className="left">
                            <input value={underAge} placeholder="0" onChange={handleUnderAge}/>
                            <span>명</span>
                        </div>
                    </div>
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span>비과세 금액</span>
                        </div>
                        <div className="left">
                            <input value={notax} placeholder="100,000" onChange={handleUnderAge}/>
                            <span>원</span>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div>
                    <div className="int_calc_body_level2">
                        <div>
                            <span>예상 월 실수령 금액</span>
                        </div>
                        <div>
                            <div className="int_calc_body_level2_level1">
                                <span>{Math.floor(1).toLocaleString()}</span>
                                <span>원</span>
                            </div>
                            <div className="int_calc_body_level2_level2">
                                <span>원금</span>
                                <div>
                                    <span>{Math.floor(1).toLocaleString()}</span>
                                    <span>원</span>
                                </div>
                            </div>
                            <div className="int_calc_body_level2_level2">
                                <span>총 공제 금액</span>
                                <div>
                                    <span>{Math.floor(1).toLocaleString()}</span>
                                    <span>원</span>
                                </div>
                            </div>
                            <div className="int_calc_body_level2_level3">
                                <span>공제 내역 ( %는 과세 금액 기준)</span>
                                <div>
                                    <div className="tax">
                                        <div className="tax_1">
                                            <span>국민 연금</span>
                                            <span>4.5%</span>
                                        </div>
                                        <div className="tax_2">
                                            <span>{Math.floor(1).toLocaleString()}</span>
                                            <span>원</span>
                                        </div>
                                    </div>
                                    <div className="tax">
                                        <div className="tax_1">
                                            <span>건강 보험</span>
                                            <span>3.3%</span>
                                        </div>
                                        <div className="tax_2">
                                            <span>{Math.floor(1).toLocaleString()}</span>
                                            <span>원</span>
                                        </div>
                                    </div>
                                    <div className="tax">
                                        <div className="tax_1">
                                            <span>장기 요양</span>
                                            <span>0.3%</span>
                                        </div>
                                        <div className="tax_2">
                                            <span>0</span>
                                            <span>원</span>
                                        </div>
                                    </div>
                                    <div className="tax">
                                        <div className="tax_1">
                                            <span>고용 보험</span>
                                            <span>0.8%</span>
                                        </div>
                                        <div className="tax_2">
                                            <span>0</span>
                                            <span>원</span>
                                        </div>
                                    </div>
                                    <div className="tax">
                                        <div className="tax_1">
                                            <span>소득세</span>
                                            <span title="부양 가족 수와 20세 이하 자녀 수에 의해 변동합니다.">참고</span>
                                        </div>
                                        <div className="tax_2">
                                            <span>0</span>
                                            <span>원</span>
                                        </div>
                                    </div>
                                    <div className="tax">
                                        <div className="tax_1">
                                            <span>지방 소득세</span>
                                            <span title="부양 가족 수와 20세 이하 자녀 수에 의해 변동합니다.">참고</span>
                                        </div>
                                        <div className="tax_2">
                                            <span>0</span>
                                            <span>원</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <span>Copyright(c) 2020 All rights reserved by WoonNa</span>
                <span>contact: younni08@naver.com</span>
            </div>
        </div>
    )
}

export default IntCalc;