import React, { useState } from 'react'

const CalculatorWrap = () => {
    const [list, setList] = useState("");





    return (
        <React.Fragment className="layout">
            <div className="emi-calc__container">
                <div className="emi-calc__section">
                    <h1 className="emi-calc__section--title">Home Loan EMI Calculator</h1>
                </div>
                <div class="leftSide">2</div>
                <div className="emi-calc__section--body">
                    <form action="" className="calc__form">
                        <div className="calc__form__input-row">
                            <input type="text" id="amountRequiredEmiCal" className="calc__form--input has-rupees-gap"
                                onKeyUp="onkeyUpAmountInWordsEmiCal();" onInput="reFormate(this)" onClick="" maxlength="12"
                                value="50,00,000" required />

                            <span className="has-rupees">&#8377;</span>
                            <label for="" className="calc__form--label">
                                Loan Amount
                            </label>
                            <span className="calc__form--error" id="amountRequiredEmiCalError">error</span>
                            <span className="calc__form--num-text" id="amountRequired_in_rs"></span>
                        </div>

                        <div className="calc__form__row">
                            <div className="calc__form__row--item">
                                <div className="calc__form__input-row select" onClick="showSelectBox('loan-tenure_Emi');">
                                    <input type="text" id="loanTenureEmiCal" className="calc__form--input" value="20 yrs" required />
                                    <label for="loanTenureEmiCal" className="calc__form--label">
                                        Loan Tenure
                                    </label>
                                    <span className="calc__form--error" id="loanTenureYearEmiCalError">error</span>
                                    <ul className="select__list" id="loan-tenure_Emi">
                                        {
                                            
                                        }
                                        <li className="select__list--option" onClick="getInputValueEmiCal(event);">
                                            5 yrs</li>
                                        <li className="select__list--option" onClick="getInputValueEmiCal(event);">
                                            10 yrs</li>
                                        <li className="select__list--option" onClick="getInputValueEmiCal(event);">
                                            15 yrs</li>
                                        <li className="select__list--option" onClick="getInputValueEmiCal(event);">
                                            20 yrs</li>
                                        <li className="select__list--option" onClick="getInputValueEmiCal(event);">
                                            25 yrs</li>
                                        <li className="select__list--option" onClick="getInputValueEmiCal(event);">
                                            30 yrs</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="calc__form__row--item">
                                <div className="calc__form__input-row">
                                    <input type="text" id="interestRateEmiCal" className="calc__form--input" maxLength="5"
                                        onClick="" value="8.45" required />
                                    <label for="" className="calc__form--label">
                                        Interest Rate % (p.a.)
                                    </label>
                                    <span className="calc__form--error" id="interestRateEmiCalError">error</span>
                                </div>
                            </div>
                        </div>

                        {/* <a href="javascript:void(0);" className="calc--btn" id="submitbuttonEmiCalid"
                            onClick="submitEMICalculatorValidations();">Calculate
                            Your EMI</a> */}
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CalculatorWrap;