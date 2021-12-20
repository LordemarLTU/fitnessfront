import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import navStyle from '../styles/navStyles.module.css'
import mainStyle from '../styles/contactStyle.module.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from 'react-select';
import React, {useState} from "react";
import { IMessage } from '../interface/IMessage'
import axios from 'axios'

export default function Message(){
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [trainerFirst, setTrainerFirst] = useState("");
  const [trainerLast, setTrainerLast] = useState("");

  function validateForm(){
    return subject.length > 0 && text.length > 0 &&
           trainerFirst.length > 0 && trainerLast.length > 0;
  }

  function handleSubmit(event: { preventDefault: () => void }){
    event.preventDefault();
  }

  const [message, setMessage] = useState<Array<IMessage>>([])

  const restApi = "http://127.0.0.1:8000/api"

  const getMessage = async () => {
    let message: Array<IMessage> = await fetch(restApi+'/zinute').then(r => r.json())
    getMessage(message)
  }

  const postMessage = async () => {
    await
      axios.post(`${restApi}/zinute`, {
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
      
      <div className={mainStyle.Contact}>
        <h1>Rašyti žinutę</h1>
        <p>Užpildykite visus laukus</p>
        <hr></hr>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="subject">
              <Form.Label>Tema</Form.Label>
              <br></br>
              <Form.Control
                autoFocus
                type="subject"
                value={subject}
                placeholder="Įrašykite žinutės temą"
                onChange={(e) => setSubject(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="message">
              <Form.Label>Žinutė</Form.Label>
              <br></br>
              <Form.Control
                type="textarea"
                value={message}
                placeholder="Įrašykite žinutės tekstą"
                onChange={(e) => setMessage(e.target.value)} />
            </Form.Group>
            <br></br>
            <Form.Group controlId="trainer">
              <Form.Label>Treneris</Form.Label>
              <br></br>
              <Form.Control
                type="textarea"
                value={trainer}
                onChange={(e) => setTrainer(e.target.value)} />
            </Form.Group>
            <Button type="submit" disabled={!validateForm()}>
              Siųsti
            </Button>
          </Form>
      </div>
    </main>
  );
}