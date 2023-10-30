import React, { useState } from 'react';
import './App.css';
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import FlyySDK from "flyy-web-sdk";
import { CodeBlock, dracula } from "react-code-blocks";


function App() {

    const flyySDK = new FlyySDK();

    flyySDK.startReferralTracking();

    var data = {
        package_name: "theflyy.com.flyysdk",
        partner_id: "89a3e8bed066cc07268e",
        ext_user_token: "nAlyijFANB",
        attachMode: 'popup',
        //attachMode: 'drawer',
        environment: "STAGING",
        device_id: "flyy-demo-app"
    };
    

    const code = `const flyySDK = new FlyySDK();

    call this in your token fetch call
    var data = {
        package_name: "<Your-Package-name>",
        partner_id: "<your-partner-id>",
        ext_user_token: "<user-token-from-partner-api>",
        attachMode: 'popup',
        //attachMode: 'drawer',
        //attachMode: 'chatbox',
        //attachMode: 'embed',s
        environment: "STAGING"
    };
    (function () {
        //If the attachMode is Chatbox;
        flyySDK.setActionButtonPosition('left');
        flyySDK.setActionButtonColor('#faa232');
        flyySDK.setActionButtonText('Reward Points');
        flyySDK.setUserName("user name set by method");
        flyySDK.setUserBankCredntials({acc_type: "upi/bank", upi_id: "<upi_id>", "acc_num": "", "ifsc": "", "name":""})
        flyySDK.init(JSON.stringify(data));
    })();   `;

    const language = "js";

    const [userName, setUserName] = useState("");
    const startFlyy = () => {
        fetch(`https://stage-partner-api.theflyy.com/v1/89a3e8bed066cc07268e/user/${userName}/user_token`, {
            method : "POST",
            headers : {
                "partner-key" : "LZDHf0Fm055M3tOIxDfCKGS5LRdExE9H5eQNYf0c",
                "content-type": "application/json"
            },
            body : JSON.stringify({is_new: "false", username: userName})
        }).then(res => res.json()).then((res) => {
            console.log(res);
            data.ext_user_token = res.token;
            data.device_id = res.device_id;
            flyySDK.setActionButtonPosition('left');
            flyySDK.setActionButtonColor('#faa232');
            flyySDK.setActionButtonText('Reward Points');
            flyySDK.init(JSON.stringify(data));
            flyySDK.setUserName("user name set by method");
            flyySDK.setUserBankCredntials({acc_type: "upi", upi_id: "vinuyer@ybl"})
        })
    }

    return (
        <div className="parent-container">


            <div className="container top-container">

                <h2>
                    Flyy Web SDK 
                </h2>

                <div className={"mt-2"}>
                <h4>Install the Package using npm</h4>
                </div>
                
                <CodeBlock text={"npm i fly-web-sdk"}/>

                <h4>Initialize the Package using the consturctor</h4>
                <div className={"code-block-init"}>
                    <CodeBlock
                        text={code}
                        language={language}
                        showLineNumbers={true}
                        theme={dracula} />
                </div>

                <div style={{textAlign: 'center'}}>
                    <h4>Enter user id to generate token in Flyy and Initilize Flyy</h4>
                    <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <input value={userName} onChange={(e) => {setUserName(e.target.value)}} style={{margin: '5px'}}/>
                    <button className={"form-control btn-primary mt-2  submit-button"} style={{width: '90px'}} onClick={() => {startFlyy()}}>Init Flyy</button>
                    </div>
                </div>

                <h4>Following Methods are availabe for various screens to call.</h4>
                <div className="app d-flex flex-wrap mb-3">

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Offers Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Offers Screen</h6>
                            <CodeBlock
                                text={"flyySDK.clickToOpenSDK(data)"}
                                language={language}
                                theme={dracula} />
                                <p className={"card-text"}>This Method is to Open Offers Screen.</p>
                            <button onClick={() => flyySDK.clickToOpenSDK(data)} className={"form-control btn-primary mt-2  submit-button"} >Offers</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Spin Wheel Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Spin the Wheel</h6>
                            <CodeBlock
                                text={"flyySDK.openSpinTheWheel()"}
                                language={language}
                                theme={dracula} />
                                <p className={"card-text"}>This Method is to Open the Spin the Wheel Screen. It will only open when there is a live offer is present</p>
                            <button onClick={() => flyySDK.openSpinTheWheel()} className={"form-control btn-primary mt-2 submit-button"} >Spin Wheel</button>
                        </div>
                    </div>



                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Wallet Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Wallet Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openWalletScreen()"}
                                language={language}
                                theme={dracula} />
                                <p className={"card-text"}>This Method is to Open the Wallet Screen.</p>
                            <button onClick={() => flyySDK.openWalletScreen()} className={"form-control btn-primary mt-2 submit-button"} >Open Wallet</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Account Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Account Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openRedeemScreen()"}
                                language={language}
                                theme={dracula} />
                                <p className={"card-text"}>This Method is to Open the Account Screen.</p>
                            <button onClick={() => flyySDK.openRedeemScreen()} className={"form-control btn-primary mt-2 submit-button"} >Account</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Rewards Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Rewards Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openRewardsScreen()"}
                                language={language}
                                theme={dracula} />
                                <p className={"card-text"}>This Method is to Open the User Rewards Screen.</p>
                            <button onClick={() => flyySDK.openRewardsScreen()} className={"form-control btn-primary mt-2 submit-button"} >Open Rewards</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Gift Cards Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Gift Cards Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openGiftCardsScreen()"}
                                language={language}
                                theme={dracula} />
                                <p className={"card-text"}>This Method is to Open the Gift Cards Redemption Screen.</p>
                            <button onClick={() => flyySDK.openGiftCardsScreen()} className={"form-control btn-primary mt-2 submit-button"} >Gift Cards</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Tourmament Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Tournaments Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openTournamentsScreen()"}
                                language={language}
                                theme={dracula} />
                                <p className={"card-text"}>This Method is to Open the Games and Tournaments Screen.</p>
                            <button onClick={() => flyySDK.openTournamentsScreen()} className={"form-control btn-primary mt-2 submit-button"} >Tournaments</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Referral Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Referral Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openReferralscreen()"}
                                language={language}
                                theme={dracula} />
                                <p className={"card-text"}>This Method is to Open the Referrals Screen, where the user's unique Referral code is shown.</p>
                            <button onClick={() => flyySDK.openReferralscreen()} className={"form-control btn-primary mt-2 submit-button"} >Referrals</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Quiz Zone Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Quiz Zone Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openQuizZoneScreen()"}
                                language={language}
                                theme={dracula} />
                                <p className={"card-text"}>This Method is to Open the Quiz Listing Screen</p>
                            <button onClick={() => flyySDK.openQuizZoneScreen()} className={"form-control btn-primary mt-2 submit-button"} >Quiz</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Transactions Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Transactions Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openTransactionsScreen('Curency type as Param')"}
                                language={language}
                                theme={dracula} />
                            <p className={"card-text"}>Params Accepted - 'String' : Name of the currency to which the transaction needs to be shown</p>
                            <button onClick={() => flyySDK.openTransactionsScreen('Cash')} className={"form-control btn-primary mt-2 submit-button"} >Transation</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Transactions Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Transactions Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openTransactionsScreen('Curency type as Param')"}
                                language={language}
                                theme={dracula} />
                                <p className={"card-text"}>Params Accepted - 'String' : Name of the currency to which the transaction needs to be shown</p>
                            <button onClick={() => flyySDK.openTransactionsScreen('Coins')} className={"form-control btn-primary mt-2 submit-button"} >Points History</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Invite and Earn Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Invite and Earn Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openInviteAndEarnOffer()"}
                                language={language}
                                theme={dracula} />
                                <p className={"card-text"}>It will only work when there is any live offer available</p>
                            <button onClick={() => flyySDK.openInviteAndEarnOffer()} className={"form-control btn-primary mt-2 submit-button"} >Invite And Earn</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>CheckIn Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open CheckIn Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openDailyCheckInOffer()"}
                                language={language}
                                theme={dracula} />
                                <p className={"card-text"}>It will only work when there is any live offer available</p>
                            <button onClick={() => flyySDK.openDailyCheckInOffer()} className={"form-control btn-primary mt-2 submit-button"} >Daily CheckIn</button>
                        </div>
                    </div>


                </div>

                <div>


                </div>
            </div>
        </div>
    );
}

export default App;
