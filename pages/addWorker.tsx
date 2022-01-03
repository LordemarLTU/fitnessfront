import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import navStyle from '../styles/navStyles.module.css'
import mainStyle from '../styles/loginStyle.module.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import axios from 'axios'
import { IWorker } from '../interface/IWorker'

export default function AddWorker(){
  const [personCode, setPersonCode] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState(""); 
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [workTime, setWorkTime] = useState("");

  function validateForm(){
    return personCode.length > 0 && fname.length > 0 &&
    lname.length > 0 && password.length > 0 &&
    email.length > 0 && workTime.length > 0
  }

  function handleSubmit(event: { preventDefault: () => void }){
    event.preventDefault();
  }

  const [worker, setWorker] = useState<Array<IWorker>>([])

  const restApi = "http://127.0.0.1:8000/api"

  const getWorker = async () => {
    let worker: Array<IWorker> = await fetch(restApi+'/darbuotojas').then(r => r.json())
    setWorker(worker)
  }

  const postWorker = async () => {
    await
      axios.post(`${restApi}/darbuotojas`, {
        "asmens_kodas": personCode,
        "vardas": fname,
        "pavarde": lname,
        "slaptazodis": password,
        "el_pastas" : email,
        "darbo_etatas" : workTime,
      }).then(function (response) {
        console.log(response);
      })
        .catch(function (error) {
          console.log(error);
        });
    window.location.href = 'workers'
  }

  useEffect(() => {
    getWorker();
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
            <Form.Group controlId="personCode">
              <Form.Label>Darbuotojo asmens kodas</Form.Label>
              <br></br>
              <Form.Control
                autoFocus
                type="text"
                value={personCode}
                placeholder="Įrašykite darbuotojo asmens kodą"
                onChange={(e) => setPersonCode(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="fname">
              <Form.Label>Darbuotojo vardas</Form.Label>
              <br></br>
              <Form.Control
                type="text"
                value={fname}
                placeholder="Įrašykite darbuotojo vardą"
                onChange={(e) => setFName(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="lname">
              <Form.Label>Darbuotojo pavardė</Form.Label>
              <br></br>
              <Form.Control
                type="text"
                value={lname}
                placeholder="Įrašykite darbuotojo pavardę"
                onChange={(e) => setLName(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="password">
              <Form.Label>Slaptažodis</Form.Label>
              <br></br>
              <Form.Control
                type="text"
                value={password}
                placeholder="Įrašykite darbuotojo slaptažodį"
                onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="email">
              <Form.Label>Darbuotojo el. paštas</Form.Label>
              <br></br>
              <Form.Control
                type="text"
                value={email}
                placeholder="Įrašykite darbuotojo el. paštą"
                onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="workTime">
              <Form.Label>Darbo etatas</Form.Label>
              <br></br>
              <Form.Control
                type="number"
                value={workTime}
                placeholder="Įrašykite darbuotojo darbo etatą"
                onChange={(e) => setWorkTime(e.target.value)} />
            </Form.Group>
            <Button onClick={postWorker}>
              Kurti
            </Button>
          </Form>
      </div>
    </main>
  );
}