import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";

const IntCalc = () => {
    const [debt,setDebt] = useState();
    const [per,setPer] = useState();
    const [month,setMonth] = useState();
    const [hold,setHold] = useState();
    const [type,setType] = useState(1);
    const [iza,setIza] = useState();

    const handleDebt = (e) => {
        setDebt(e.target.value);
    }
    const handlePer = (e) => {
        setPer(e.target.value);
    }
    const handleHold = (e) => {
        setHold(e.target.value);
    }
    const handleMonth = (e) => {
        setMonth(e.target.value);
    }
        
    const [table,setTable] = useState([]);
    // const test = () => {
    //     for(let i =0;i<3;i++){
    //         setTable(table => [...table, { No:i }])
    //     }
    // }

    const [hit, setHit] = useState(false);

    const punch = () => {
        if(hit===true){setHit(false)}else{setHit(true)};
    }

    const call = (n,p,po,i,l) => {
        setTable(table => [...table, {
            No:n,
            pay:p,
            pay_ori:po,
            int:i,
            left:l
        }])
    }

    const butt1 = () => {
        setType(1);
        setTable([]);
        document.getElementById("but1").classList.add("on");
        document.getElementById("but2").classList.remove("on");
        document.getElementById("but3").classList.remove("on");
    }
    const butt2 = () => {
        setType(2);
        setTable([]);
        document.getElementById("but2").classList.add("on");
        document.getElementById("but1").classList.remove("on");
        document.getElementById("but3").classList.remove("on");
    }
    const butt3 = () => {
        setType(3);
        setTable([]);
        document.getElementById("but3").classList.add("on");
        document.getElementById("but1").classList.remove("on");
        document.getElementById("but2").classList.remove("on");
    }

    useEffect(()=>{
        if(type === 1){
            console.log("원리금균등상환");
            if(month>0.01){
                // setIza((debt*month*per/1200));
                let int_hold = debt*per/1200;
                // if(hold >= month){
                //     alert("거치기간이 대출기간을 초과하였습니다.\n다시 확인해주세요. ")
                // }
                let int_total = int_hold * hold;
                let target = ((debt*Number(per/1200))*Math.pow([(1+Number(per/1200))],[Number(month)-Number(hold)]))/(Math.pow([1+Number(per/1200)],[Number(month)-Number(hold)])-1);
                for(let i =0;i<hold;i++){
                    setTable(table => [...table, {
                        No:i,
                        pay:int_hold,
                        pay_ori:0,
                        int:int_hold,
                        left:debt
                    }])
                }
                let intt = 0;
                let current_debt = 0;
                for(let j = hold;j<month;j++){
                    if(j===hold){
                        intt = debt * per/1200;
                        current_debt = Number(debt) - (target - intt);
                        call(j,target,target-intt,intt,current_debt);
                        int_total = int_total + intt;
                    }else{
                        intt = current_debt * per/1200;
                        current_debt = current_debt - (target - intt);
                        if(current_debt<0){
                            call(j,target+intt,target,intt,0);
                        }else{
                            call(j,target+intt,target,intt,current_debt);
                        }
                        int_total = int_total + intt;
                    }
                }
                setIza(int_total);
            }else{
                setIza(0);
            }
        }else if(type === 2){
            console.log("원금균등상환");
            if(month>0.01){
                let int_hold = debt*per/1200;
                // if(hold >= month){
                //     alert("거치기간이 대출기간을 초과하였습니다.\n다시 확인해주세요. ")
                // }
                let int_total = int_hold * hold;
                let target = debt/(Number(month)-Number(hold));
                for(let i =0;i<hold;i++){
                    setTable(table => [...table, {
                        No:i,
                        pay:int_hold,
                        pay_ori:0,
                        int:int_hold,
                        left:debt
                    }])
                }
                let intt = 0;
                let current_debt = 0;
                for(let j = hold;j<month;j++){
                    if(j===hold){
                        intt = debt * per/1200;
                        current_debt = Number(debt) - target;
                        call(j,target+intt,target,intt,current_debt);
                        int_total = int_total + intt;
                    }else{
                        intt = current_debt * per/1200;
                        current_debt = current_debt - target;
                        if(current_debt<0){
                            call(j,target+intt,target,intt,0);
                        }else{
                            call(j,target+intt,target,intt,current_debt);
                        }
                        int_total = int_total + intt;
                    }
                }
                setIza(int_total);
            }else{
                setIza(0);
            }
        }else{
            console.log("원금 만기일 상환");
            if(month>0.01){
                let int_hold = debt*per/1200;
                // if(hold >= month){
                //     alert("거치기간이 대출기간을 초과하였습니다.\n다시 확인해주세요. ")
                // }
                let int_total = int_hold * month;
                for(let i =0;i<month;i++){
                    setTable(table => [...table, {
                        No:i,
                        pay:int_hold,
                        pay_ori:0,
                        int:int_hold,
                        left:debt
                    }])
                    if(i+1 == month){
                        call(i+1,Number(debt)+int_hold,debt,int_hold,0);
                    }
                }
                setIza(int_total);
            }else{
                setIza(0);
            }
        }
    },[hit])

    return (
        <div className="int_calc">
            <div className="int_calc_header">
                <div>
                    <Link to=""><div>적금 계산기</div></Link>
                </div>
                <span className="int_calc_title">대출이자 계산기</span>
            </div>
            <div className="int_calc_body">
                <div>
                </div>
                <div id="calc1" className="on">
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span>대출 금액</span>
                        </div>
                        <div className="left">
                            <input value={debt} onChange={handleDebt} placeholder="10,000,000"/>
                            <span>원</span>
                        </div>
                    </div>
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span>대출 금리</span>
                        </div>
                        <div className="left">
                            <input value={per} onChange={handlePer} placeholder="6.8" />
                            <span>%</span>
                        </div>
                    </div>
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span>대출 기간</span>
                        </div>
                        <div className="left">
                            <input value={month} onChange={handleMonth} placeholder="24" />
                            <span>개월</span>
                        </div>
                    </div>
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span title="거치기간동안 이자만 납부하고, 거치기간이 끝나면 원금+이자를 납부하게 됩니다. 따라서 원리금/원금 균등상환에만 적용됩니다.">거치 기간</span>
                        </div>
                        <div className="left">
                            <input value={hold} onChange={handleHold} placeholder="12" />
                            <span>개월</span>
                        </div>
                    </div>
                    <div className="int_calc_body_level1">
                        <div className="right">
                            <span>상환 방법</span>
                        </div>
                        <div className="left_with_options">
                            <span id="but1" onClick={butt1} className="on" title="원금균등상환은 매월 동일한 원금과 남은 잔금에 상응하는 이자를 매월 상환하는 방식입니다.">원리금 균등 상환</span>
                            <span id="but2" onClick={butt2} title="원리금균등상환은 매월 동일한 원금과 이자를 상환하는 방식입니다. ">원금 균등 상환</span>
                            <span id="but3" onClick={butt3} title="만기일시상환은 대출 기간동안 매월 이자만 상환하는 방식입니다. ">원금 만기일 상환</span>
                        </div>
                    </div>
                    <div className="hit_calc">
                        <span onClick={punch}>계산하기</span>
                    </div>
                </div>
                <div></div>
                <div>
                    <div className="int_calc_body_level22">
                        <div>
                            <span>월별 상환금</span>
                            <div>
                                <span>총 이자</span>
                                <div>
                                    <span>{Math.floor(iza).toLocaleString()}</span>
                                    <span>원</span>
                                </div>
                            </div>
                        </div>
                        <div className="debt_result">
                            <div>
                                <span>No</span>
                                <span>상환금</span>
                                <span>납입 원금</span>
                                <span>이자</span>
                                <span>잔금</span>
                            </div>
                            {
                                table.map(t => (
                                    <div>
                                        <span>{t.No}</span>
                                        <span>{Math.floor(t.pay).toLocaleString()}</span>
                                        <span>{Math.floor(t.pay_ori).toLocaleString()}</span>
                                        <span>{Math.floor(t.int).toLocaleString()}</span>
                                        <span>{Math.floor(t.left).toLocaleString()}</span>
                                    </div>
                                ))
                            }
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