import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "../Home/home.module.scss";


const Sponsors = ()=>{

const [sponsors,setSponsors] = useState([]);

useEffect(()=>{
    setSponsors([
        {
            id:1,
            sponsorImg:"https://www.posstore.az/55.jpg"
        },
        {
            id:2,
            sponsorImg:"https://www.posstore.az/66.jpg"
        },
        {
            id:3,
            sponsorImg:"https://www.posstore.az/77.jpg"
        },
        {
            id:4,
            sponsorImg:"https://www.posstore.az/88.jpg"
        },
        {
            id:5,
            sponsorImg:"https://www.posstore.az/99.jpg"
        },
        {
            id:6,
            sponsorImg:"https://www.posstore.az/100.jpg"
        }
    ])
},[sponsors])



    return(
        <section id={styles.mainSponsors}>
            <div className={styles.container}>
            <h2>Tərəfdaşlarımız</h2>
        <p>
        Avadanlıq və xidmətlərimizdən istifadə edən bütün şirkətlər
        </p>
        <div className={styles.sponsorssInnerParts}>
          <div className={classNames("row", styles.fullCustomers)}>
            {sponsors.map((sponsor) => {
              return (
                <div
                  key={sponsor.id}
                  className={classNames(
                    "col-12 col-md-6 col-lg-4",
                    styles.cstmCol
                  )}
                >
                  <div className={classNames("card", styles.cstmCard)}>
                    <div className={styles.cstmCardImg}>
                      <img src={sponsor.sponsorImg} alt="" />
                      
 

                    </div>
                  
                  </div>
                </div>
              );
            })}
          </div>
        </div>
            </div>
        </section>
    )
}
export default Sponsors