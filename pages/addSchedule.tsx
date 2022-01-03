import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import navStyle from '../styles/navStyles.module.css'
import mainStyle from '../styles/loginStyle.module.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import { ISchedule } from '../interface/ISchedule'
import axios from 'axios'

export default function AddSchedule(){
  const [hall, setHall] = useState("");
  const [time, setTime] = useState(""); 
  const [type, setType] = useState("");

  function validateForm(){
    return hall.length > 0 && time.length > 0 && type.length > 0
  }

  function handleSubmit(event: { preventDefault: () => void }){
    event.preventDefault();
  }

  const [schedule, setSchedule] = useState<Array<ISchedule>>([])

  const restApi = "http://127.0.0.1:8000/api"

  const getSchedule = async () => {
    let schedule: Array<ISchedule> = await fetch(restApi+'/tvarkarastis').then(r => r.json())
    setSchedule(schedule)
  }

  const postSchedule = async () => {
    await
      axios.post(`${restApi}/tvarkarastis`, {
        "sale_treniravimosi": hall,
        "laikas": time,
        "uzsiemimo_tipas":type,
      }).then(function (response) {
        console.log(response);
      })
        .catch(function (error) {
          console.log(error);
        });

    window.location.href = 'Schedule'
  }

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <main className={mainStyle.main}>
      <nav className={navStyle.navigation}>
        <div>
          <h1>Fit<span>ness</span></h1>
        </div>
        <ul>
          <li><a href="/">Pagrindinis</a></li>
          <li><a href="Schedule">Tvarkaraščiai</a></li>
          <li><a href="Programs">Treniruočių programos</a></li>
          <li><a href="contact">Kontaktai</a></li>
          <li><a href="register">Registracija</a></li>
          <li><a href="login">Prisijungti</a></li>
        </ul>
      </nav>
      
      <div className={mainStyle.Login}>
        <h1>Pridėti</h1>
        <p>Užpildykite visus laukus</p>
        <hr></hr>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="hall">
              <Form.Label>Užsiėmimo salė</Form.Label>
              <br></br>
              <Form.Control
                autoFocus
                type="text"
                value={hall}
                placeholder="Įrašykite užsiėmimo salę"
                onChange={(e) => setHall(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="time">
              <Form.Label>Laikas</Form.Label>
              <br></br>
              <Form.Control
                type="text"
                value={time}
                placeholder="Įrašykite užsimėimo laiką"
                onChange={(e) => setTime(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="type">
              <Form.Label>Užsiėmimo tipas</Form.Label>
              <br></br>
              <Form.Control
                type="text"
                value={type}
                placeholder="Įrašykite užsiėmimo tipą"
                onChange={(e) => setType(e.target.value)} />
            </Form.Group>
            <Button onClick={postSchedule}>
              Kurti
            </Button>
          </Form>
      </div>
    </main>
  );
}