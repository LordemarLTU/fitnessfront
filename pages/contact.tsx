import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import navStyle from '../styles/navStyles.module.css'
import mainStyle from '../styles/contactStyle.module.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Select from 'react-select';
import React, {useState} from "react";

export default function Message(){
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [trainer, setTrainer] = useState("");

  function validateForm(){
    return subject.length > 0 && message.length > 0;
  }

  function handleSubmit(event: { preventDefault: () => void }){
    event.preventDefault();
  }

  return (
    <main className={mainStyle.main}>
      <nav className={navStyle.navigation}>
        <div>
          <h1>Fit<span>ness</span></h1>
        </div>
        <ul>
          <li><a href="/">Pagrindinis</a></li>
          <li><a href="schedules">Tvarkaraščiai</a></li>
          <li><a href="programs">Treniruočių programos</a></li>
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