const express = require('express');
const router = express.Router();
const { WebhookClient } = require('dialogflow-fulfillment');

let intentMap = new Map();
// intentMap.set('Greeting', greeting);

const costIntentMonth = (agent) => {
    agent.add('될까?')
}

const countScription = (agent) => {
    // DB접근 후 구독 리스트
}

const usingListMax = (agent) => {
    
}

const usingListMin = (agent) => {

}


intentMap.set('CostIntent-month', costIntentMonth);
intentMap.set('CountScription', countScription);
intentMap.set('UsingList-max', usingListMax);
intentMap.set('UsingList-min', usingListMin);



router.post('/', (req, res) => {
    const agent = new WebhookClient({request: req, response: res});

    agent.handleRequest(intentMap);

});






module.exports = router;