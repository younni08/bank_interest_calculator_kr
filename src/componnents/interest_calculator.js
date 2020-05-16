import React,{useState,useEffect} from "react";

const IntCalc = () => {
    const [money, setMoney] = useState();
    const [month, setMonth] = useState();
    const [percent, setPercent] = useState();
    const [type, setType] = useState(true);
    const [type2, setType2] = useState(true);
    // true is danli
    
    const [total, setTotal] = useState(0);
    const [int, setInt] = useState(0);

    const [tax1, setTax1] = useState();
    const [tax2, setTax2] = useState();

    const handleMoney = (e) => {
        setMoney(e.target.value);
    }
    const handleMonth = (e) => {
        setMonth(e.target.value);
    }
    const handlePercent = (e) => {
        setPercent(e.target.value);
    }
    useEffect(() => {
        if(type === true){
            if(type2 === false){
                console.log("예치,단리");
                if(money > 1){
                    setTotal(Number(money));
                    let temp =  month * (percent/1200) * money;
                    setInt(temp);
                    setTax1(temp*0.154);
                    setTax2(temp*0.095);
                }else{
                    setTotal(150000);
                    setInt(12375);
                    setTax1(12375*0.154);
                    setTax2(12375*0.095);
                }
            }else{
                console.log("적립,단리");
                if(money > 1){
                    setTotal(month * money);
                }else{
                    setTotal(2700000);
                    setInt(117562);
                    setTax1(117562*0.154);
                    setTax2(117562*0.095);
                }
                let couter = 0
                for(let i = 0;i<month;i++){
                    let temp = money * (percent/1200) * (i+1);
                    couter = couter + temp;
                    if(i+1 == month){
                        setInt(couter);
                        setTax1(couter*0.154);
                        setTax2(couter*0.095);
                    }
                }
            }
        }else{
            if(type2 === false){
                console.log("예치,복리");
                if(money > 1){
                    setTotal(Number(money));
                    //  원금*(1+r)(n/12)
                    let result =  Math.pow([(1 + (percent/1200))],[month*12/12]) * money;
                    let tt = result - money
                    setInt(tt);
                    setTax1(tt*0.154);
                    setTax2(tt*0.095);
                }else{
                    setTotal(150000);
                    setInt(12869);
                    setTax1(12869*0.154);
                    setTax2(12869*0.095);
                }
            }else{
                console.log("적립,복리");
                if(money > 1){
                    setTotal(month * money);
                    let result = (money*(Math.pow([1+(percent/1200)],[month])-1))/(percent/1200)
                    let tt = result - (month*money)
                    setInt(tt);
                    setTax1(tt*0.154);
                    setTax2(tt*0.095);
                }else{
                    setTotal(2700000);
                    setInt(107803);
                    setTax1(107803*0.154);
                    setTax2(107803*0.095);
                }
            }
        }
    },[money,month,percent,type,type2])

    const buttonOne = () => {
        setType(true);
        let check = document.getElementById("button2").classList.contains("on");
        let check2 = document.getElementById("button4").classList.contains("on");
        let check3 = document.getElementById("button22").classList.contains("on");
        if(check2 === true){
            if(check3 === true){
                document.getElementById("button11").classList.add("on");
                document.getElementById("button22").classList.remove("on");
            }else{
                document.getElementById("button11").classList.add("on");
            }
        }else{
            if(check === true){
                document.getElementById("button1").classList.add("on");
                document.getElementById("button2").classList.remove("on");
            }else{
                document.getElementById("button1").classList.add("on");
            }
        }
    }

    const buttonTwo = () => {
        setType(false);
        let check = document.getElementById("button1").classList.contains("on");
        let check2 = document.getElementById("button4").classList.contains("on");
        let check3 = document.getElementById("button11").classList.contains("on");
        if(check2 === true){
            if(check3 === true){
                document.getElementById("button22").classList.add("on");
                document.getElementById("button11").classList.remove("on");
            }else{
                document.getElementById("button22").classList.add("on");
            }
        }else{
            if(check === true){
                document.getElementById("button2").classList.add("on");
                document.getElementById("button1").classList.remove("on");
            }else{
                document.getElementById("button2").classList.add("on");
            }
        }
    }

    const buttonThree = () => {
        setType2(true);
        let check = document.getElementById("button4").classList.contains("on");
        if(check === true){
            document.getElementById("button3").classList.add("on");
            document.getElementById("button4").classList.remove("on");
            document.getElementById("calc1").classList.add("on");
            document.getElementById("calc2").classList.remove("on");
        }else{
            document.getElementById("button3").classList.add("on");
            document.getElementById("calc1").classList.add("on");
        }
    }

    const buttonFour = () => {
        setType2(false);
        let check = document.getElementById("button3").classList.contains("on");
        if(check === true){
            document.getElementById("button4").classList.add("on");
            document.getElementById("button3").classList.remove("on");
            document.getElementById("calc2").classList.add("on");
            document.getElementById("calc1").classList.remove("on");
        }else{
            document.getElementById("button4").classList.add("on");
            document.getElementById("calc2").classList.add("on");
        }
    }


    return (
        <div className="int_calc">
            <div className="int_calc_header">
                {/* <div>다른 앱</div> */}
                <div></div>
                <span className="int_calc_title">적금 계산기</span>
            </div>
            <div className="int_calc_body">
                <div>
                    <span id="button3" className="on" onClick={buttonThree}>적립식</span>
                    <span id="button4" onClick={buttonFour}>예치식</span>
                </div>
                <div id="calc1" className="on">
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span>매달 납입 금액</span>
                        </div>
                        <div className="left">
                            <input value={money} placeholder="150,000" onChange={handleMoney} />
                            <span>원</span>
                        </div>
                    </div>
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span>적립 기간</span>
                        </div>
                        <div className="left">
                            <input value={month} placeholder="18" onChange={handleMonth}/>
                            <span>개월</span>
                        </div>
                    </div>
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span>연 이자율</span>
                        </div>
                        <div className="spacial_left">
                            <div>
                                <span id="button1" className="on" onClick={buttonOne}>단리</span>
                                <span id="button2" onClick={buttonTwo}>복리</span>
                            </div>
                            <div>
                                <input value={percent} placeholder="5.5" onChange={handlePercent}/>
                                <span>%</span>    
                            </div>
                        </div>
                    </div>
                </div>
                <div id="calc2">
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span>예치 금액</span>
                        </div>
                        <div className="left">
                            <input value={money} placeholder="150,000" onChange={handleMoney} />
                            <span>원</span>
                        </div>
                    </div>
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span>예치 기간</span>
                        </div>
                        <div className="left">
                            <input value={month} placeholder="18" onChange={handleMonth}/>
                            <span>개월</span>
                        </div>
                    </div>
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span>연 이자율</span>
                        </div>
                        <div className="spacial_left">
                            <div>
                                <span id="button11" className="on" onClick={buttonOne}>단리</span>
                                <span id="button22" onClick={buttonTwo}>복리</span>
                            </div>
                            <div>
                                <input value={percent} placeholder="5.5" onChange={handlePercent}/>
                                <span>%</span>    
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="int_calc_body_level2">
                        <div>
                            <span>만기 지급 금액</span>
                        </div>
                        <div>
                            <div className="int_calc_body_level2_level1">
                                <span>{Math.floor(total+int).toLocaleString()}</span>
                                <span>원</span>
                            </div>
                            <div className="int_calc_body_level2_level2">
                                <span>원금</span>
                                <div>
                                    <span>{Math.floor(total).toLocaleString()}</span>
                                    <span>원</span>
                                </div>
                            </div>
                            <div className="int_calc_body_level2_level2">
                                <span>이자</span>
                                <div>
                                    <span>{Math.floor(int).toLocaleString()}</span>
                                    <span>원</span>
                                </div>
                            </div>
                            <div className="int_calc_body_level2_level3">
                                <span>세금</span>
                                <div>
                                    <div className="tax">
                                        <div className="tax_1">
                                            <span>일반 세율</span>
                                            <span>15.4%</span>
                                        </div>
                                        <div className="tax_2">
                                            <span>{Math.floor(tax1).toLocaleString()}</span>
                                            <span>원</span>
                                        </div>
                                    </div>
                                    <div className="tax">
                                        <div className="tax_1">
                                            <span>세금 우대</span>
                                            <span>9.5%</span>
                                        </div>
                                        <div className="tax_2">
                                            <span>{Math.floor(tax2).toLocaleString()}</span>
                                            <span>원</span>
                                        </div>
                                    </div>
                                    <div className="tax">
                                        <div className="tax_1">
                                            <span>비과세</span>
                                            <span>0.0%</span>
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