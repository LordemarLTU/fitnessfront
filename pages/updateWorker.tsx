import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import navStyle from '../styles/navStyles.module.css'
import mainStyle from '../styles/loginStyle.module.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import { IWorker } from '../interface/IWorker'
import axios from 'axios'

export default function updateWorker(){
  const [personalCode, setPersonalCode] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [workTime, setWorkTime] = useState("");

  function validateForm(){
    return personalCode.length > 0 && fname.length > 0 &&
    lname.length > 0 && password.length > 0 &&
    email.length > 0 && workTime.length > 0
  }

  function handleSubmit(event: { preventDefault: () => void }){
    event.preventDefault();
  }

  const [updateWorker, setUpdateWorker] = useState<Array<IWorker>>([])
  const [id, setId] = useState<string | null>('');
  const restApi = "http://127.0.0.1:8000/api" 

  if(typeof window != "undefined")
  {
    useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search);
      const id = queryParams.get('ID');
      setId(id)
    }, []);
  }

  async function putUpdateWorker()
  { 
    await axios.put(`${restApi}/darbuotojas/${id}`, {
        "asmens_kodas": personalCode,
        "vardas": fname,
        "pavarde": lname,
        "slaptazodis": password,
        "el_pastas": email,
        "darbo_etatas": workTime,
      }).then(function (response) {
      console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.href = 'workers'
  }

  return (
    <main className={mainStyle.main}>
      <nav className={navStyle.navigation}>
        <div>
          <h1>Fit<span>ness</span></h1>
        </div>
        <ul>
          <li><a href="/">Pagrindinis</a></li>
          <li><a href="Schedule">Tvarkara????iai</a></li>
          <li><a href="Programs">Treniruo??i?? programos</a></li>
          <li><a href="contact">Kontaktai</a></li>
          <li><a href="register">Registracija</a></li>
          <li><a href="login">Prisijungti</a></li>
        </ul>
      </nav>
      
      <div className={mainStyle.Login}>
        <h1>Prid??ti</h1>
        <p>U??pildykite visus laukus</p>
        <hr></hr>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="personalCode">
              <Form.Label>Darbuotojo asmens kodas</Form.Label>
              <br></br>
              <Form.Control
                autoFocus
                type="text"
                value={personalCode}
                placeholder="??ra??ykite darbuotojo asmens kod??"
                onChange={(e) => setPersonalCode(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="fname">
              <Form.Label>Vardas</Form.Label>
              <br></br>
              <Form.Control
                type="text"
                value={fname}
                placeholder="??ra??ykite darbuotojo vard??"
                onChange={(e) => setFName(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="lname">
              <Form.Label>Pavard??</Form.Label>
              <br></br>
              <Form.Control
                type="text"
                value={lname}
                placeholder="??ra??ykite darbuotojo pavard??"
                onChange={(e) => setLName(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="password">
              <Form.Label>Slapta??odis</Form.Label>
              <br></br>
              <Form.Control
                type="text"
                value={password}
                placeholder="??ra??ykite darbuotojo slapta??od??"
                onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>El. pa??tas</Form.Label>
              <br></br>
              <Form.Control
                type="text"
                value={email}
                placeholder="??ra??ykite darbuotojo el. pa??t??"
                onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="workTime">
              <Form.Label>Darbo etatas</Form.Label>
              <br></br>
              <Form.Control
                type="text"
                value={workTime}
                placeholder="??ra??ykite darbuotojo darbo etat??"
                onChange={(e) => setWorkTime(e.target.value)} />
            </Form.Group>
            <Button onClick={() => putUpdateWorker()}> 
              Saugoti
            </Button>
          </Form>
      </div>
    </main>
  );
}