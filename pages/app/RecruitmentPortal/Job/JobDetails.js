import React from 'react'
import style from '../../../../public/style/RecruitmentPortal/jobDetails.module.css';
import dynamic from "next/dynamic";
import Banner from "@/components/RecruitmentPortal/banner";
import Footer from "@/components/RecruitmentPortal/footer";
const ClassicLayout = dynamic(() => import("components/layout/ClassicLayout"), {
    ssr: false,
  });
import {FaArrowRight} from 'react-icons/fa';
const JobDetails = () => {
  return (
    <ClassicLayout>
      <>
        <Banner heading={"Senior Web Developer"} />
            <div className={style.container}>
                <div className={style.box}>
                    <p>Description:</p>
                    <p>Our vision is to provide the next billion people with access to products that exemplify the ideals of Techwind. These ideals - which include peer-to-peer transactions, decentralization, censorship resistance, and permissionless-ness - support economic freedom.</p>
                    <p>Our approach is to develop and promote widely accessible products that support economic freedom. For example, our digital wallet - which has 16 million downloads - provides people with an easy-to-use, non-custodial method for buying, selling, storing, sending, receiving, and trading cryptocurrencies.</p>
                </div>

                <div className={style.box}>
                    <p>Duties:</p>
                    <div className={style.pointWithLogo}>
                        <FaArrowRight className={style.arrow} color='#4f46e5e6'/>
                        <span>Work alongside Product, Engineering, Design and Marketing to build world-class cryptocurrency applications and experiences</span>
                    </div>   
                    <div className={style.pointWithLogo}>
                        <FaArrowRight className={style.arrow} color='#4f46e5e6'/>
                        <span>Provide produce vision and strategy for the team</span>
                    </div>  
                    <div className={style.pointWithLogo}>
                        <FaArrowRight className={style.arrow} color='#4f46e5e6'/>
                        <span>Design and lead a multi-year roadmap in accordance with company&apos;s OKRs, strategy and vision</span>
                    </div>  
                    <div className={style.pointWithLogo}>
                        <FaArrowRight className={style.arrow} color='#4f46e5e6'/>
                        <span>Build and lead an exceptional engineering team to innovate, invent, implement and deploy complex software solutions in mission-critical environment</span>
                    </div>  
                    <div className={style.pointWithLogo}>
                        <FaArrowRight className={style.arrow} color='#4f46e5e6'/>
                        <span>Understand customer needs and gather product requirements. Identify market opportunities and define product vision and strategy</span>
                    </div>                   
                </div>

                <div className={style.box}>
                    <p>Requirements:</p>
                    <div className={style.pointWithLogo}>
                        <FaArrowRight className={style.arrow} color='#4f46e5e6'/>
                        <span>5+ years of Product Management, Product Marketing or Product Growth experience with creating product roadmaps from conception to launch, driving product vision and defining go-to-market strategy</span>
                    </div>   
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Has experience designing, implementing and/or integrating IAM solutions</span>
                    </div>  
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Has managed engineering teams, designers, and collaborated with other product people</span>
                    </div>  
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Strong project management skills and ability to work across different product teams</span>
                    </div>  
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Strong leadership skills</span>
                    </div>  
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Agile mindset to improve iteratively, rather than placing big long term bets</span>
                    </div>   
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Excellent communication skills</span>
                    </div>  
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Communicates well in both written and verbal English</span>
                    </div>                 
                </div>

                <div className={style.box}>
                    <p>Nice To Have:</p>
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Strong understanding of blockchain, both technical and practical</span>
                    </div>   
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Cryptocurrency or financial services product management is a big plus</span>
                    </div>  
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Experience in KYC (know your customer), AML (anti-money laundering) and IAM services</span>
                    </div>  
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Understanding of custodial vs non-custodial aspects of cryptocurrency financial products</span>
                    </div>  
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Financial/payment apps experience</span>
                    </div>                   
                </div>

                <div className={style.box}>
                    <p>Benefits:</p>
                    <p>Bitcoin.com is paving the way for the next generation of financial technology products and platforms. We&apos;re bringing cryptocurrency and the future of money to the masses. We&apos;d love to have you on board.</p>
                    <p>We are serious about what we do, but more importantly, we have a lot of fun doing it. Our work culture is modern, meaning we strive for work experiences based on transparency, productivity, trust, and passion. For all employees, benefits include:</p>
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Flexible work hours</span>
                    </div> 
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Remote work</span>
                    </div> 
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Health insurance reimbursement</span>
                    </div> 
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Wellness program (gym, etc.)</span>
                    </div> 
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Yoga classes</span>
                    </div> 
                    <div className={style.pointWithLogo}>
                        <FaArrowRight  className={style.arrow} color='#4f46e5e6'/>
                        <span>Japanese classes</span>
                    </div> 
                    <p>For employees residing in Japan, we offer &quot;permanent employment&quot; status (正社員) and the option to be paid in yen.</p>
                    <p>Employees residing outside of Japan are classified as Independent Contractors and are paid in the cryptocurrency of their choice.</p>

                </div>

                <button>Apply now</button>
            </div>
        <Footer />
      </>
    </ClassicLayout>
  )
}

export default JobDetails