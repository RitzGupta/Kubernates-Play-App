/* 
Spike test is a variation of a stress test, but it does not gradually increase the load instead it spikes to extreme load over a very short window of time 

Run a stress test to:
    - Determine how your system will perform under a sudden surge of traffic
    - Determine if your system will recover once the traffic has subsided

Success is based on expectations. Systems will generally react in 1 of 4 ways spike_test.js 
    - Excellent: system performance is not degraded during the surge of traffic.
    - Response time is similar during low traffic and high traffic Scratches and Consoles
    - Good: Response time is slower, but the system does not produce any errors.
    - All requests are handled 
    - Poor: System produces errors during the surge of traffic, but recovers to normal after the traffic subside: 
    - Bad: System crashes, and does not recover after the traffic has subsided

*/

import http from "k6/http"

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '10s', target: 30 }, // below normal load s spike_test.js no index
        { duration: '1m', target: 30 },
        { duration: '10s', target: 700 }, // spike to 1400 users Scratches and Consoles
        { duration: '3m', target: 1400 }, // stay at 1400 for 3 minutes 
        { duration: '10s', target: 30 }, // scale down. Recovery stage.
        { duration: '3m', target: 100 },
        { duration: '10s', target: 0 },
    ],
};

const API_BASE_URL = "https://localhost:5001";

export default () => {
    let payload = JSON.stringify({
        "text_list": [
            "Putting people first , every day : BDO is a firm built on a foundation of positive relationships with our people and our clients . Each day , we rely on our professionals to provide exceptional service , and help our clients by providing advice and insight they can trust . In turn , we offer an environment that fosters a people - first culture with a high priority on your personal and professional growth . Your opportunity : Our Winnipeg office is looking for an Intermediate Bookkeeper to join the Outsourcing team and own the following responsibilities : Work on complex bookkeeping and accounting assignments Processes financial transactions into accounting software Provide support to clients on general questions regarding bookkeeping issues while providing technical and project management support to team members for bookkeeping related engagements Thorough review of accounting and bookkeeping assignments to ensure quality standards and processes are met Assist with mentoring staff to meet all client deadlines Effectively communicate with clients , partners and staff face to face as well as through email and phone conversations How do we define success for your role ? You demonstrate BDO ' s core values through all aspect of your work : Integrity , Respect & Collaboration You understand your clients industry , challenges , and opportunities ; client describe you as positive , professional , and delivering high quality work You identify , recommend , & are focused on effective service delivery to your clients You share in an inclusive & engaging work environment that develops , retains & attracts talent You actively participate in the adoption of digital tools and strategies to drive an innovative workplace You grow your expertise through learning & professional development . Your experience and education A minimum of 2 + years of progressive , full - cycle accounting / bookkeeping experience ( prior experience in public accounting is an asset ) Experience with foreign exchange translations and consolidations Ability to transact in multiple accounting software programs including Microsoft NAV , Business Central or Xero Working knowledge of bookkeeping for multiple industries is required Strong analytical and problem - solving skills and developed oral and written communication skills Strong ability to prioritize , delegate and manage conflicting priorities Why BDO ? Our firm is committed to providing an environment where you can be successful in the following ways : We enable you to engage with the firm ' s strategic plan , and be a key contributor to the success and growth of the firm . We help you be the best professional you can be in our services , industries and markets . Achieve your personal goals outside of the office and make an impact on your community . Giving back , it adds up : Where company meets community ."
        ],
        "is_clean": false,
        "index_required": false
    })
    http.get('http://35.200.187.12:5000/movieslist');
};
