import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ISchedule } from '../interface/ISchedule'
import navStyle from '../styles/navStyles.module.css'
import mainStyle from '../styles/scheduleStyle.module.css'
const Schedule = () => {
  const [schedule, setSchedule] = useState<Array<ISchedule>>([])

  const restApi = "http://127.0.0.1:8000/api"

  const getSchedule = async () => {
    let schedule: Array<ISchedule> = await fetch(restApi+'/tvarkarastis').then(r => r.json())
    setSchedule(schedule)
  }

  const postSchedule = async () => {
    /*await
      axios.post(`${restApi}/tvarkarastis`, {
        "sale_treniravimosi": 'sale',
        "laikas": '2021-12-01 21:12:30',
        "uzsiemimo_tipas":"uzsiemimas",
      }).then(function (response) {
        console.log(response);
      })
        .catch(function (error) {
          console.log(error);
        });*/

    window.location.href = 'addSchedule'
  }

  function updateSchedule(id: number)
  {
    window.location.href = `updateSchedule?ID=${id}`;
  }
  
  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <div>
      <Head>
        <title>Tvarkaraščiai</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={mainStyle.main}>

        <nav className={navStyle.navigation}>
          <div>
            <h1>Fit<span>ness</span></h1>
          </div>

          <ul>
            <li><a href="/">Pagrindinis</a></li>
            <li><a href="">Tvarkaraščiai</a></li>
            <li><a href="Programs">Treniruočių programos</a></li>
            <li><a href="contact">Kontaktai</a></li>
            <li><a href="register">Registracija</a></li>
            <li><a href="login">Prisijungti</a></li>
          </ul>
        </nav>
        
        <button onClick={postSchedule}>
          Pridėti
        </button>

        {schedule !== undefined? 
           <table className="table table-bordered">
           <tr>
               <th>Nr</th>
               <th>Treniravimosi salė</th>
               <th>Laikas</th>
               <th>Užsiemimas</th>
           </tr>
 
           {schedule.map((schedule, index) => (
             <tr data-index={index}>
               <td>{schedule.sales_nr}</td>
               <td>{schedule.sale_treniravimosi}</td>
               <td>{schedule.laikas}</td>
               <td>{schedule.uzsiemimo_tipas}</td>
               <td>
                 <button>
                   Šalinti
                 </button>
               </td>
               <td>
                 <button onClick={() => updateSchedule(schedule.sales_nr)}>
                   Redaguoti
                 </button>
               </td>
             </tr>
           ))}
 
       </table>
      :null}
      </main> 
    </div>
  )
}
export default Schedule