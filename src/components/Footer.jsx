import styles from "../style";
import { Addline, ExpertLogo } from "../assets";
import { socialMedia } from "../constants";

const Footer = () => (

  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <p className={`${styles.paragraph} mt-4 max-w-[312px] text-center`}>
      <b>Contact</b>
    </p>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className=" justify-center mr-10 text-center"style={{border:'1px solid red'}}>
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          <b className="text-gradient"> Walk In <br /> </b>
          69, 3 ถ. อรุณอมรินทร์ แขวงวัดอรุณ <br />
          เขตบางกอกใหญ่ กรุงเทพมหานคร 10600 <br />

          <b className="text-gradient"> Head Office</b> <br />
          30/22 ถ.พุทธมณฑลสาย 3 <br />
          แขวงทวีวัฒนา เขตทวีวัฒนา กรุงเทพมหานคร

        </p>
        
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          <b className="text-gradient"> Walk In <br /> </b>
          69, 3 ถ. อรุณอมรินทร์ แขวงวัดอรุณ <br />
          เขตบางกอกใหญ่ กรุงเทพมหานคร 10600 <br />

          <b className="text-gradient"> Head Office</b> <br />
          30/22 ถ.พุทธมณฑลสาย 3 <br />
          แขวงทวีวัฒนา เขตทวีวัฒนา กรุงเทพมหานคร
          
        </p>
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
        <img src={Addline} className="" />
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          <iframe className="md:flex-row flex-col mb-8  h-[500px] w-[800px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5867758200357!2d100.4880765864186!3d13.743449744714432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29976917b5c7b%3A0x896cec458e6cea3e!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4p-C4seC4h-C4reC4seC4geC4qeC4oyDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sth!4v1675137221681!5m2!1sth!2sth"
            height={500} width={800} allowFullScreen="" loading='lazy' referrerPolicy='no-referrer-when-downgrade' style={{objectFit:'fill'}}></iframe>
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;