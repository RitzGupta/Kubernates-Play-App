
import http from "k6/http"

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '20m', target: 100 },
        { duration: '50m', target: 100 },
        { duration: '20m', target: 200 },
        { duration: '50m', target: 200 },
        { duration: '20m', target: 300 },
        { duration: '50m', target: 300 },
        { duration: '20m', target: 200 },
        { duration: '50m', target: 200 },
        { duration: '20m', target: 300 },
        { duration: '50m', target: 300 },
        { duration: '20m', target: 400 },
        { duration: '50m', target: 400 },
        { duration: '10m', target: 0 },
    ],
    thresholds: { http_req_duration: ['p(95)<200'] }
};

export default () => {
    let payload = JSON.stringify({
        "text_list": [
            "Putting people first , every day : BDO is a firm built on a foundation of positive relationships with our people and our clients . Each day , we rely on our professionals to provide exceptional service , and help our clients by providing advice and insight they can trust . In turn , we offer an environment that fosters a people - first culture with a high priority on your personal and professional growth . Your opportunity : Our Winnipeg office is looking for an Intermediate Bookkeeper to join the Outsourcing team and own the following responsibilities : Work on complex bookkeeping and accounting assignments Processes financial transactions into accounting software Provide support to clients on general questions regarding bookkeeping issues while providing technical and project management support to team members for bookkeeping related engagements Thorough review of accounting and bookkeeping assignments to ensure quality standards and processes are met Assist with mentoring staff to meet all client deadlines Effectively communicate with clients , partners and staff face to face as well as through email and phone conversations How do we define success for your role ? You demonstrate BDO ' s core values through all aspect of your work : Integrity , Respect & Collaboration You understand your clients industry , challenges , and opportunities ; client describe you as positive , professional , and delivering high quality work You identify , recommend , & are focused on effective service delivery to your clients You share in an inclusive & engaging work environment that develops , retains & attracts talent You actively participate in the adoption of digital tools and strategies to drive an innovative workplace You grow your expertise through learning & professional development . Your experience and education A minimum of 2 + years of progressive , full - cycle accounting / bookkeeping experience ( prior experience in public accounting is an asset ) Experience with foreign exchange translations and consolidations Ability to transact in multiple accounting software programs including Microsoft NAV , Business Central or Xero Working knowledge of bookkeeping for multiple industries is required Strong analytical and problem - solving skills and developed oral and written communication skills Strong ability to prioritize , delegate and manage conflicting priorities Why BDO ? Our firm is committed to providing an environment where you can be successful in the following ways : We enable you to engage with the firm ' s strategic plan , and be a key contributor to the success and growth of the firm . We help you be the best professional you can be in our services , industries and markets . Achieve your personal goals outside of the office and make an impact on your community . Giving back , it adds up : Where company meets community ."
        ],
        "is_clean": false,
        "index_required": false
    })
    http.post('https://dev-jmeta-ner.simplify-ai.com/v1/job/entities', payload);
};
