import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IProgram } from '../interface/IProgram'
import navStyle from '../styles/navStyles.module.css'
import mainStyle from '../styles/programsStyle.module.css'
import tableStyle from '../styles/tableStyle.module.css'
const Programs = () => {
  const [program, setProgram] = useState<Array<IProgram>>([])

  const restApi = "http://127.0.0.1:8000/api"

  const getProgram = async () => {
    let program: Array<IProgram> = await fetch(restApi+'/treniruotes_programa').then(r => r.json())
    setProgram(program)
  }

  const postProgram = async () => {        
    window.location.href = 'addProgram'
  }

  function updateProgram(id : number)
  {
    window.location.href = `updateProgram?ID=${id}`;
  }

  async function deleteProgram(id: number)
  {
    debugger
    await axios.delete(`${restApi}/treniruotes_programa/${id}`).then(function (response) {
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
      window.location.href='Programs';
  }

  useEffect(() => {
    getProgram();
  }, []);

  return (
    <div>
      <Head>
        <title>Treniruočių programos</title>
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
            <li><a href="Schedule">Tvarkaraščiai</a></li>
            <li><a href="">Treniruočių programos</a></li>
            <li><a href="contact">Kontaktai</a></li>
            <li><a href="register">Registracija</a></li>
            <li><a href="login">Prisijungti</a></li>
          </ul>
        </nav>

        <h1>Treniruočių programos</h1>

        <button onClick={postProgram}>
          Pridėti
        </button>
        
        {program !== undefined? 
          <table className={tableStyle.table}>
           <tr>
               <th>Nr</th>
               <th>Darbuotojas</th>
               <th>Pavadinimas</th>
               <th>Vietų skaičius</th>
               <th>Trukmė (min)</th>
           </tr>
 
           {program.map((program, index) => (
             <tr data-index={index}>
               <td>{program.id}</td>
               <td>{program.darbuotojo_vardas}</td>
               <td>{program.pavadinimas}</td>
               <td>{program.dalyviu_skaicius}</td>
               <td>{program.trukme}</td>
               <td>
                 <button onClick={() => deleteProgram(program.id)}>
                   Šalinti
                 </button>
               </td>
               <td>
                 <button onClick={() => updateProgram(program.id)}>
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
export default Programs
