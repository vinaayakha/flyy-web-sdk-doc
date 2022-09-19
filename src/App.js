import React, { useState } from 'react';
import './App.css';
import TodoForm from "./TodoForm";
import Todos from "./Todos";
import FlyySDK from "flyy-web-sdk";
import { CodeBlock, dracula } from "react-code-blocks";


function App() {

    const flyySDK = new FlyySDK();

    var data = {
        package_name: "theflyy.com.flyysdk",
        partner_id: "08c0758cd2ef8dfba42a",
        ext_user_token: "nAlyijFANB",
        attachMode: 'popup',
        //attachMode: 'drawer',
        environment: "STAGING"
    };
    (function () {

        flyySDK.setActionButtonPosition('left');
        flyySDK.setActionButtonColor('#faa232');
        flyySDK.setActionButtonText('Reward Points');
        flyySDK.init(JSON.stringify(data));
    })();

    const code = `const flyySDK = new FlyySDK();

    var data = {
        package_name: "<Your-Package-name>",
        partner_id: "<your-partner-id>",
        ext_user_token: "<user-token-from-partner-api>",
        attachMode: 'popup',
        //attachMode: 'drawer',
        environment: "STAGING"
    };
    (function () {
        //If the attachMode is Chatbox;
        flyySDK.setActionButtonPosition('left');
        flyySDK.setActionButtonColor('#faa232');
        flyySDK.setActionButtonText('Reward Points');
        flyySDK.init(JSON.stringify(data));
    })();
`;

    const language = "js";

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Write a new blog post.",
            isCompleted: false
        },
        {
            id: 2,
            text: "Pick up laundry.",
            isCompleted: false
        },
        {
            id: 3,
            text: "Die.",
            isCompleted: false
        }
    ]);

    const addTodo = (todo) => {
        setTodos([...todos, { text: todo }]);
    };

    const markComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const editTitle = (index, title) => {
        const newTodos = [...todos];
        newTodos[index].text = title;
        setTodos(newTodos);
    };

    const openOffers = (data) => {
        console.log(data);
        flyySDK.clickToOpenSDK(data);
    }

    const openSpinWheel = () => {
        flyySDK.openSpinTheWheel();
    }

    return (
        <div className="parent-container">


            <div className="container top-container">

                <h2>
                    Initialize the Flyy Web SDK using the consturctor
                </h2>
                <div className={"code-block-init"}>
                    <CodeBlock
                        text={code}
                        language={language}
                        showLineNumbers={true}
                        theme={dracula} />
                </div>

                <div className="app d-flex flex-wrap mb-3">

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Offers Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Offers Screen</h6>
                            <CodeBlock
                                text={"flyySDK.clickToOpenSDK(data)"}
                                language={language}
                                theme={dracula} />
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
                            <button onClick={() => flyySDK.openWalletScreen()} className={"form-control btn-primary mt-2 submit-button"} >Open Wallet</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Account Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Account Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openAccountScreen()"}
                                language={language}
                                theme={dracula} />
                            <button onClick={() => flyySDK.openAccountScreen()} className={"form-control btn-primary mt-2 submit-button"} >Account</button>
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
                            <button onClick={() => flyySDK.openQuizZoneScreen()} className={"form-control btn-primary mt-2 submit-button"} >Quiz</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Offers Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Transactions Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openTransactionsScreen('Curency type as Param')"}
                                language={language}
                                theme={dracula} />
                            <p className={"card-text"}>flyySDK.openTransactionsScreen('Curency type as Param')</p>
                            <button onClick={() => flyySDK.openTransactionsScreen('Cash')} className={"form-control btn-primary mt-2 submit-button"} >Transation</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Offers Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Transactions Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openTransactionsScreen('Curency type as Param')"}
                                language={language}
                                theme={dracula} />
                            <button onClick={() => flyySDK.openTransactionsScreen('Coins')} className={"form-control btn-primary mt-2 submit-button"} >Points History</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Offers Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open Invite and Earn Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openInviteAndEarnOffer()"}
                                language={language}
                                theme={dracula} />
                            <button onClick={() => flyySDK.openInviteAndEarnOffer()} className={"form-control btn-primary mt-2 submit-button"} >Invite And Earn</button>
                        </div>
                    </div>

                    <div className={"card m-2"} style={{ width: 20 + 'rem' }}>
                        <h5 className={"card-header"}>Offers Method</h5>
                        <div className={"card-body"}>
                            <h6 className={"card-subtitle mb-2 text-muted"}>To Open CheckIn Screen</h6>
                            <CodeBlock
                                text={"flyySDK.openDailyCheckInOffer()"}
                                language={language}
                                theme={dracula} />
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
