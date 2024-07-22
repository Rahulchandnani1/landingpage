import './App.css';
import gridline from "./assets/glines.png";
import empoweringtext from "./assets/Empoweringtext.png";
import btnimg from "./assets/button.png";
import personimg from "./assets/Group 427319595.png";
import star from "./assets/star.png";
import bimg from "./assets/Subtract.png";
import arright from "./assets/arrow-right.png";
import globe from "./assets/globe.png";
import line from "./assets/dottedline.png";
import line1 from "./assets/Ellipse 2720.png";
import line2 from "./assets/Ellipse 2723.png";
import p1 from "./assets/Ellipse 2712.png";
import p2 from "./assets/Ellipse 2718.png";
import p3 from "./assets/Ellipse 2716.png";
import p4 from "./assets/Page 1.png";
import p5 from "./assets/Ellipse 2724.png";
import p6 from "./assets/Ellipse 2715.png";
import p7 from "./assets/Ellipse 2717.png";
import p10 from "./assets/Page 1 (1).png";
import p8 from "./assets/Heart.png";
import p9 from "./assets/Ellipse 2713.png";
import p11 from "./assets/Ellipse 2714.png";
import p12 from "./assets/Ellipse 2721.png";
import p13 from "./assets/Ellipse 2722.png";
import p14 from "./assets/Ellipse 2719.png";
import p15 from "./assets/Ellipse 2729.png";
import p16 from "./assets/Ellipse 2731.png";
import p17 from "./assets/Ellipse 2732.png";
import p18 from "./assets/Group 427319598.png";
import p19 from "./assets/Group 427319599.png";
import pattern from "./assets/Pattern (1).png";
import pattern1 from "./assets/Pattern (2).png";
import bottomimg from "./assets/Subtract.png";
function Landingpage() {
    return (
        <div className="App">
            <div className='topdiv'>
                <img className='grids' src={gridline} />
                <img className='bimg' src={bimg} />
                <div className='maindiv'>
                    <img className='empowertext' src={empoweringtext} />
                    <p className='text1'>Join the world's first DePIN: Revolutionizing Content Streaming with faster, Safer and Cheaper Access</p>
                    <button className='btn1' onClick={() => { alert("Coming Soon") }}><img src={btnimg} />
                    </button>
                    <img className='personimg' src={personimg} />
                    <div className='divs'>
                        <div className='divoperator'>
                            <p className='stext' >No. of Node Operators <img src={star} /></p>
                            <p className='btext'>2000</p>
                            <img className='patterimg1' src={bottomimg} />

                        </div>
                        <div className='divdata'>
                            <p className='stext'><p>Data Transferred in TB <span>(last 30 days)</span></p><img src={star} /></p>
                            <p className='btext'>12,000</p>
                            <img className='patterimg1' src={bottomimg} />

                        </div>
                    </div>
                </div>
            </div>
            <div className='middiv'>
                <p className='mtext1'>FanCloud CDN network revolutionizes video infrastructure with community-driven Innovation</p>
                <p className='mtext2'>FanCloud pioneers a new era of connectivity with its decentralised content delivery network (dCDN), leveraging a global network of community-powered nodes. By harnessing a decentralised architecture, dCDN drastically reduces data transfer and compute costs while enhancing load time. Join FanCloud’s dCDN network and experience the future of seamless, secure and community- driven consumption</p>
                <div className='globediv'>
                    <img className='globeimg' src={globe} />
                    <img className='lineimg' src={line} />
                    <img className='lineimg1' src={line1} />
                    <img className='lineimg2' src={line2} />
                    <img className='p1' src={p1} />
                    <img className='p2' src={p2} />
                    <img className='p3' src={p3} />
                    <img className='p4' src={p4} />
                    <img className='p5' src={p5} />
                    <img className='p6' src={p6} />
                    <img className='p7' src={p7} />
                    <img className='p8' src={p8} />
                    <img className='p9' src={p9} />
                    <img className='p10' src={p10} />
                    <img className='p11' src={p11} />
                    <img className='p12' src={p12} />
                    <img className='p13' src={p13} />
                    <img className='p14' src={p14} />
                    <img className='p15' src={p15} />
                    <img className='p16' src={p16} />
                    <img className='p17' src={p17} />
                    <img className='p18' src={p18} />
                    <img className='p19' src={p19} />


                </div>

                <div className='divs2'>
                    <div className='divc1'>
                        <p className='divct1'>Content Nodes</p>
                        <p className='divct2'>Content Nodes, Earn rewards for supplying their GPU, Storage and bandwidth for dCDN</p>
                        <div>
                            <button className='btn2'>
                                Deploy<img src={arright} />
                            </button>
                        </div>
                        <img className='patterimg' src={pattern} />
                    </div>
                    <div className='divc2'>
                        <p className='divc1t1'>Orchestrators</p>
                        <p className='divc1t2'>Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance</p>
                        <div>
                            <button className='btn3'>
                                Coming Soon
                            </button>
                        </div>
                        <img className='patterimg' src={pattern} />
                    </div>
                    <div className='divc3'>
                        <p className='divc1t1'>Validators</p>
                        <p className='divc1t2'>Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated.</p>
                        <div>
                            <button className='btn4'>
                                Coming Soon
                            </button>
                        </div>
                        <img className='patterimg' src={pattern1} />
                    </div>
                </div>

            </div>
            <div className='bottomdiv'>
                <p className='btext1'>The transition CDN-dCDN</p>
                <p className='btext2'>FanCloud pioneers a new era of connectivity with its decentralised content delivery network (dCDN), leveraging a global network of community-powered nodes. By harnessing a decentralised architecture, dCDN drastically reduces data transfer and compute costs while enhancing load time. Join FanCloud’s dCDN network and experience the future of seamless, secure and community- driven consumption</p>
            </div>
        </div>
    );
}

export default Landingpage;
